# Basic type annotations
let name: string = "Alice"
let age: int = 30
let height: float = 1.75
let is_active: bool = true

# Procedure type annotations
proc greet(name: string): string =
  "Hello, " & name

# Type aliases
type
  UserId = int
  UserName = string

# Object type
type
  User = object
    id: UserId
    name: UserName
    age: int

# Ref object type (heap allocated)
type
  Node = ref object
    value: int
    next: Node

# Enum type
type
  Color = enum
    Red, Green, Blue

# Tuple type
type
  Point = tuple[x, y: int]

# Generic type
type
  Box[T] = object
    value: T

# Using generic type
let int_box: Box[int] = Box[int](value: 42)
let string_box = Box[string](value: "hello")

# Procedure type
type
  Callback = proc(x: int): int {.nimcall.}

# Using procedure type
proc double(x: int): int =
  x * 2

let callback: Callback = double

# Distinct type (new type incompatible with its base type)
type
  Meter = distinct int
  Kilometer = distinct int

# Variant object
type
  Shape = object
    case kind: ShapeKind
    of ShapeKind.Circle:
      radius: float
    of ShapeKind.Rectangle:
      width, height: float
    of ShapeKind.Triangle:
      base, height: float

  ShapeKind = enum
    Circle, Rectangle, Triangle

# Union type (using object variants)
type
  Value = object
    case kind: ValueKind
    of ValueKind.Int: intVal: int
    of ValueKind.Float: floatVal: float
    of ValueKind.String: strVal: string

  ValueKind = enum
    Int, Float, String

when isMainModule:
  let user = User(id: 1, name: "Alice", age: 30)
  let point: Point = (x: 10, y: 20)
  let color = Green
  
  let node = Node(value: 1, next: Node(value: 2, next: nil))
  
  let circle = Shape(kind: Circle, radius: 5.0)
  let rect = Shape(kind: Rectangle, width: 10.0, height: 20.0)
  
  let intValue = Value(kind: Int, intVal: 42)
  let floatValue = Value(kind: Float, floatVal: 3.14)

