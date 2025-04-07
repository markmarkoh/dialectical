// Basic function with type annotations
fn add(a: Int, b: Int) -> Int {
  a + b  // Implicit return
}

// Function with explicit return
fn multiply(a, b) {
  let result = a * b
  result
}

// Function with multiple returns using Result
fn divide(a: Float, b: Float) -> Result(Float, String) {
  case b {
    0.0 -> Error("Division by zero")
    _ -> Ok(a /. b)
  }
}

// Function with labeled arguments
fn create_user(name name: String, age age: Int) -> User {
  User(name: name, age: age)
}

// Using the pipe operator
fn process_data(data) {
  data
  |> transform
  |> validate
  |> format
}

fn transform(data) {
  // Transform the data
  data
}

fn validate(data) {
  // Validate the data
  data
}

fn format(data) {
  // Format the data
  data
}

// Helper type for the example
type User {
  User(name: String, age: Int)
}

