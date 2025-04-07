// Basic type annotations
let name: String = "Alice"
let age: Int = 30
let height: Float = 1.75
let is_active: Bool = True

// Function type annotations
fn greet(name: String) -> String {
  "Hello, " <> name
}

// Type aliases
type UserId = Int
type UserName = String

// Custom types
type User {
  User(id: UserId, name: UserName, age: Int)
}

// Generic type annotations
type Result(a, e) {
  Ok(a)
  Error(e)
}

// Using generic types
let success: Result(Int, String) = Ok(42)
let failure: Result(Int, String) = Error("Something went wrong")

// Function with generic type parameters
fn identity(x: a) -> a {
  x
}

// Using the generic function
let int_value = identity(42)
let string_value = identity("hello")

