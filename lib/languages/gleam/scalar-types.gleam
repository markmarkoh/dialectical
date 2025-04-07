// Integers
let age = 30
let sum = age + 5  // 35

// Floats
let height = 1.75
let area = height *. 2.0  // 3.5
// Note: Gleam uses *. for float multiplication

// Booleans
let is_active = True
let is_valid = is_active && age > 18

// Strings
let name = "Alice"
let greeting = "Hello, " <> name  // String concatenation with <>

// String interpolation (using string.concat)
import string
let message = string.concat([
  "Name: ", 
  name, 
  ", Age: ", 
  int.to_string(age)
])

// Atoms (named constants)
let status = :ok
let result = tuple(:ok, "Success")

