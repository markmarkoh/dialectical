// Variable declaration and assignment
let name = String::from("Alice");
let age = 30;

// Mutability must be explicit
let mut counter = 0;
counter += 1;

// Immutable by default
// name = String::from("Bob");  // Error: cannot assign twice to immutable variable

// Shadowing (creating a new variable with the same name)
let value = 5;
let value = value * 2;  // value is now 10

// Destructuring assignment
let (x, y) = (1, 2);
let [head, tail @ ..] = [1, 2, 3]; // head = 1, tail = [2, 3]

// Destructuring structs
struct Point { x: i32, y: i32 }
let point = Point { x: 10, y: 20 };
let Point { x, y } = point;  // x = 10, y = 20

// Ignoring values
let (_, only_y) = (1, 2);  // only_y = 2

