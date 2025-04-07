// Basic function arguments
fn add(a, b) {
  a + b
}

// Labeled arguments
fn create_user(name name: String, age age: Int) -> User {
  User(name: name, age: age)
}

// Calling with labeled arguments
// let user = create_user(name: "Alice", age: 30)

// Pattern matching in function parameters
fn process_pair(tuple(a, b)) {
  a + b
}

// Pattern matching with custom types
fn get_name(user: User) -> String {
  let User(name: name, ..) = user
  name
}

// Default arguments (via multiple function clauses)
fn greet(name) {
  greet(name, "Hello")
}

fn greet(name, greeting) {
  greeting <> ", " <> name <> "!"
}

// Helper type for the examples
type User {
  User(name: String, age: Int)
}

