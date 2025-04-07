# Basic procedure with type annotations
proc add(a, b: int): int =
  a + b

# Function with explicit return
proc multiply(a, b: int): int =
  return a * b

# Procedure with result variable (implicit return)
proc subtract(a, b: int): int =
  result = a - b
  # result is automatically returned

# Procedure with multiple return values using tuple
proc divmod(a, b: int): (int, int) =
  (a div b, a mod b)

# Forward declaration
proc factorial(n: int): int

# Implementation
proc factorial(n: int): int =
  if n <= 1: 1
  else: n * factorial(n - 1)

# Pure function (no side effects)
func square(x: int): int =
  x * x

# Method (for object-oriented programming)
type
  Person = object
    name: string
    age: int

method greet(p: Person): string {.base.} =
  "Hello, I'm " & p.name

type
  Student = object of Person
    school: string

method greet(s: Student): string =
  "Hi, I'm " & s.name & " from " & s.school

# Iterator (for custom iteration)
iterator countTo(n: int): int =
  for i in 1..n:
    yield i

# Converter (automatic type conversion)
converter toFloat(x: int): float =
  float(x)

# Operator overloading
proc `+`(a, b: string): string =
  a & b

# Procedure with named parameters
proc createPerson(name: string, age: int): Person =
  Person(name: name, age: age)

# Procedure with default parameters
proc greet(name: string, greeting = "Hello"): string =
  greeting & ", " & name & "!"

# Procedure with discard (when result is ignored)
proc logMessage(msg: string): string {.discardable.} =
  echo msg
  return msg

# Generic procedure
proc identity[T](x: T): T =
  x

when isMainModule:
  echo "add(5, 3): ", add(5, 3)
  echo "multiply(4, 7): ", multiply(4, 7)
  echo "subtract(10, 4): ", subtract(10, 4)
  
  let (quotient, remainder) = divmod(10, 3)
  echo "divmod(10, 3): ", quotient, ", ", remainder
  
  echo "factorial(5): ", factorial(5)
  echo "square(4): ", square(4)
  
  let person = Person(name: "Alice", age: 30)
  let student = Student(name: "Bob", age: 20, school: "High School")
  echo "person.greet(): ", person.greet()
  echo "student.greet(): ", student.greet()
  
  for i in countTo(5):
    echo i
  
  let x: int = 5
  let y: float = x  # Uses converter
  echo "y: ", y
  
  echo "Hello" + " World"  # Uses operator overloading
  
  let p = createPerson(name = "Charlie", age = 25)
  echo "Person: ", p.name, ", ", p.age
  
  echo "greet(\"Dave\"): ", greet("Dave")
  echo "greet(\"Eve\", \"Hi\"): ", greet("Eve", "Hi")
  
  logMessage("This is a log message")  # Result is discarded
  
  echo "identity(42): ", identity(42)
  echo "identity(\"hello\"): ", identity("hello")

