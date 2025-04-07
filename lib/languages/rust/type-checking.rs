// Type checking examples
let name: String = String::from("Alice");
// let name: String = 42;  // Compile error

// Function with type annotations
fn process(value: i32) -> String {
   value.to_string()
}

// Calling with wrong type
// process("hello");  // Compile error

// Type inference
let inferred = 42; // i32 is inferred
let vector = vec![1, 2, 3]; // Vec<i32> is inferred

// Type coercion is limited
let x: f64 = 42.0;
// let y: i32 = x;  // Error: no implicit conversion

// Explicit conversion
let z: i32 = x as i32;

