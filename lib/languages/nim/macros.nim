import macros

# Simple macro that generates a procedure
macro generateProc(name: untyped, body: untyped): untyped =
  result = quote do:
    proc `name`(): void =
      `body`

# Using the macro
generateProc(sayHello):
  echo "Hello, World!"

# Macro that generates a debug version of a procedure
macro debug(procDef: untyped): untyped =
  # Get the procedure name
  let procName = procDef[0]
  let procParams = procDef[3]
  let procBody = procDef[6]
  
  # Create a new procedure definition with debug output
  result = quote do:
    proc `procName`(`procParams`): auto =
      echo "Entering ", astToStr(`procName`)
      let result = `procBody`
      echo "Exiting ", astToStr(`procName`), " with result ", result
      result

# Using the debug macro
debug:
  proc add(a, b: int): int =
    a + b

# Macro for creating a simple DSL
macro model(name: untyped, fields: untyped): untyped =
  # Create a new type with the given fields
  result = quote do:
    type `name` = object
      `fields`
    
    proc `name`Constructor(`fields`): `name` =
      `name`(fields)

# Using the model macro
model User:
  name: string
  age: int

# Template (simpler form of macro)
template twice(x: untyped): untyped =
  x
  x

# Using the template
proc templateExample() =
  twice:
    echo "This will be printed twice"

# Compile-time function execution
proc factorial(n: int): int {.compileTime.} =
  if n <= 1: 1
  else: n * factorial(n - 1)

const fact5 = factorial(5)  # Computed at compile time

# Macro for automatic property generation
macro properties(T: typedesc, fields: untyped): untyped =
  result = newStmtList()
  
  for field in fields:
    let fieldName = field[0]
    let fieldType = field[1]
    let getterName = ident("get" & $fieldName)
    let setterName = ident("set" & $fieldName)
    
    # Add getter
    result.add quote do:
      proc `getterName`(self: `T`): `fieldType` =
        self.`fieldName`
    
    # Add setter
    result.add quote do:
      proc `setterName`(self: var `T`, value: `fieldType`) =
        self.`fieldName` = value

# Using the properties macro
type
  Person = object
    name: string
    age: int

properties(Person, [(name, string), (age, int)])

# Macro for creating a simple builder pattern
macro builder(T: typedesc): untyped =
  let typeName = T.getType[1]
  let builderName = ident($typeName & "Builder")
  
  result = quote do:
    type `builderName` = object
      value: `typeName`
    
    proc new`builderName`(): `builderName` =
      `builderName`(value: `typeName`())
    
    proc build(self: `builderName`): `typeName` =
      self.value

  # Add setter methods for each field
  for field in getType(T)[1][2]:
    let fieldName = field[0]
    let fieldType = field[1]
    let setterName = ident("with" & $fieldName)
    
    result.add quote do:
      proc `setterName`(self: var `builderName`, value: `fieldType`): var `builderName` =
        self.value.`fieldName` = value
        self

# Using the builder macro
type
  Product = object
    name: string
    price: float
    inStock: bool

builder(Product)

# Simple debug macro
# macro debug(n: typed): untyped =
#   # `n` is the AST of the expression passed to debug
#   let name = $n
  
#   # Create a new AST that prints the expression and its value
#   result = quote do:
#     let value = `n`
#     echo `name`, " = ", value
#     value

# Using the debug macro
let x = 42
let y = 0 #debug(x + 10)  # Prints "x + 10 = 52"

# Macro that generates a getter and setter for a field
# macro property(T: typedesc, field: untyped): untyped =
#   let fieldName = $field
#   let getterName = newIdentNode("get" & fieldName.capitalizeAscii)
#   let setterName = newIdentNode("set" & fieldName.capitalizeAscii)
  
#   result = quote do:
#     proc `getterName`(self: `T`): type(`T`.`field`) =
#       self.`field`
    
#     proc `setterName`(self: var `T`, value: type(`T`.`field`)) =
#       self.`field` = value

# Using the property macro
# type
#   Person = object
#     name: string
#     age: int

# property(Person, name)
# property(Person, age)

# var person = Person(name: "Alice", age: 30)
# echo person.getName()  # "Alice"
# person.setAge(31)
# echo person.age  # 31

# Macro that generates a case statement from a table
macro caseTable(value: untyped, table: untyped): untyped =
  # Check that table is a table constructor
  expectKind(table, nnkTableConstr)
  
  # Create a case statement
  result = newNimNode(nnkCaseStmt).add(value)
  
  # Add each key-value pair as a case branch
  for pair in table:
    expectKind(pair, nnkExprColonExpr)
    let key = pair[0]
    let val = pair[1]
    result.add(newNimNode(nnkOfBranch).add(key, val))
  
  # Add an else branch
  result.add(newNimNode(nnkElse).add(
    quote do:
      raise newException(ValueError, "No matching case for " & $`value`)
  ))

# Using the caseTable macro
proc describe(color: string): string =
  caseTable(color, {
    "red": "warm color",
    "blue": "cool color",
    "green": "neutral color"
  })

# Domain-specific language (DSL) with macros
macro html(body: untyped): untyped =
  # Process the body and generate HTML
  # This is a simplified example
  result = newNimNode(nnkStmtList)
  
  proc processNode(node: NimNode): NimNode =
    case node.kind
    of nnkCall:
      # A call like div(...) becomes a HTML tag
      let tag = $node[0]
      let attributes = newNimNode(nnkBracket)
      var content = newNimNode(nnkBracket)
      
      # Process children
      for i in 1..<node.len:
        if node[i].kind == nnkExprEqExpr:
          # This is an attribute
          let name = $node[i][0]
          let value = node[i][1]
          attributes.add(quote do: (`name`, `value`))
        else:
          # This is content
          content.add(processNode(node[i]))
      
      # Generate code to create a HTML tag
      result = quote do:
        tag(`tag`, `attributes`, `content`)
    
    of nnkStrLit:
      # A string literal becomes text content
      result = quote do:
        text(`node`)
    
    else:
      # Pass through other nodes
      result = node
  
  # Process the body
  for node in body:
    result.add(processNode(node))

# Using the HTML DSL
proc generateHtml(): string =
  html:
    html:
      head:
        title("My Page")
      body:
        div(class="container"):
          h1("Hello, World!")
          p("This is a paragraph.")

when isMainModule:
  sayHello()
  
  echo "add(5, 3): ", add(5, 3)
  
  let user = User(name: "Alice", age: 30)
  echo "User: ", user.name, ", ", user.age
  
  templateExample()
  
  echo "factorial(5): ", fact5
  
  var person = Person(name: "Bob", age: 25)
  echo "getName(person): ", getName(person)
  echo "getAge(person): ", getAge(person)
  
  setName(person, "Charlie")
  setAge(person, 35)
  echo "After setters: ", getName(person), ", ", getAge(person)
  
  var productBuilder = newProductBuilder()
  let product = productBuilder
    .withName("Widget")
    .withPrice(19.99)
    .withInStock(true)
    .build()
  
  echo "Product: ", product.name, ", $", product.price, ", in stock: ", product.inStock

