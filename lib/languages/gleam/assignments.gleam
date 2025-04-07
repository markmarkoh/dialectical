// Variable declaration and assignment
let name = "Alice"  // Immutable binding
let age = 30

// Variables are immutable
// name = "Bob"  // Error: cannot reassign variables

// Shadowing (creating a new variable with the same name)
let value = 5
let value = value * 2  // value is now 10

// Pattern matching in assignment
let tuple(x, y) = tuple(1, 2)  // x = 1, y = 2

// Destructuring lists
let [head, ..tail] = [1, 2, 3]  // head = 1, tail = [2, 3]

// Destructuring custom types
type Point {
  Point(x: Int, y: Int)
}

let point = Point(x: 10, y: 20)
let Point(x: x_coord, y: y_coord) = point  // x_coord = 10, y_coord = 20

// Ignoring values with _
let tuple(value, _) = tuple(42, "ignored")  // value = 42, second value ignored

