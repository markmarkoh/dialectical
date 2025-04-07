# Variable declaration with var (mutable)
var count = 0
count += 1  # count is now 1

# Constant declaration with const (compile-time)
const Pi = 3.14159
# Pi = 3.0  # Error: cannot assign to const

# Immutable declaration with let (runtime)
let name = "Alice"
# name = "Bob"  # Error: cannot assign to let

# Multiple assignment
var
  x = 10
  y = 20
  z = 30

# Tuple assignment
let point = (10, 20)
let (px, py) = point  # Destructuring

# Result unpacking
proc divmod(a, b: int): (int, int) =
  (a div b, a mod b)

let (quotient, remainder) = divmod(10, 3)  # quotient = 3, remainder = 1

# Sequence assignment
let numbers = @[1, 2, 3, 4]
let first = numbers[0]  # 1

# Object assignment
type
  Person = object
    name: string
    age: int

var person = Person(name: "Alice", age: 30)
person.age = 31  # Modify field

# Reference assignment
type
  Node = ref object
    value: int
    next: Node

var node1 = Node(value: 1)
var node2 = node1  # Both reference the same object
node2.value = 42  # node1.value is also 42

# Swap values
var a = 5
var b = 10
(a, b) = (b, a)  # a = 10, b = 5

when isMainModule:
  echo "Count: ", count
  echo "Pi: ", Pi
  echo "Name: ", name
  echo "Point: ", px, ", ", py
  echo "Quotient: ", quotient, ", Remainder: ", remainder
  echo "First number: ", first
  echo "Person: ", person.name, ", ", person.age
  echo "Node value: ", node1.value
  echo "Swapped: a = ", a, ", b = ", b

