// Type checking examples
let name = "Alice"
// let name: String = 42  // Compile error

// Function with type annotations
fn process(value: Int) -> String {
  int.to_string(value)
}

// Calling with wrong type
// process("hello")  // Compile error

// Type inference
let inferred = 42  // Int is inferred
let list = [1, 2, 3]  // List(Int) is inferred

// Custom types
type User {
  User(name: String, age: Int)
}

// Pattern matching with types
fn describe(user: User) -> String {
  case user {
    User(name: name, age: age) -> 
      "User " <> name <> " is " <> int.to_string(age) <> " years old"
  }
}

