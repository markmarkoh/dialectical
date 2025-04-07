# Type checking examples
let name = "Alice"
# let name: string = 42  # Compile error

# Procedure with type annotations
proc process(value: int): string =
  $value  # Convert to string

# Calling with wrong type
# process("hello")  # Compile error

# Type inference
let inferred = 42  # int is inferred
let list = @[1, 2, 3]  # seq[int] is inferred

# Type checking with 'is' operator
proc checkType(x: auto) =
  if x is int:
    echo "x is an integer"
  elif x is string:
    echo "x is a string"
  else:
    echo "x is something else"

# Type checking with 'of' operator (for object variants)
type
  Shape = ref object of RootObj
  Circle = ref object of Shape
    radius: float
  Rectangle = ref object of Shape
    width, height: float

proc area(shape: Shape): float =
  if shape of Circle:
    let circle = Circle(shape)
    result = 3.14159 * circle.radius * circle.radius
  elif shape of Rectangle:
    let rect = Rectangle(shape)
    result = rect.width * rect.height
  else:
    result = 0.0

# Type conversion
let x = 42
let y = float(x)  # Convert int to float

when isMainModule:
  checkType(42)
  checkType("hello")
  
  let circle = Circle(radius: 2.0)
  let rect = Rectangle(width: 3.0, height: 4.0)
  echo "Circle area: ", area(circle)
  echo "Rectangle area: ", area(rect)

