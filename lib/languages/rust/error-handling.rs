// Result type for error handling
enum Result<T, E> {
   Ok(T),
   Err(E),
}

// Function that returns a Result
fn divide(a: f64, b: f64) -> Result<f64, String> {
   if b == 0.0 {
       Err(String::from("Division by zero"))
   } else {
       Ok(a / b)
   }
}

// Using the Result with match
fn calculate(a: f64, b: f64) {
   match divide(a, b) {
       Ok(result) => println!("Result: {}", result),
       Err(message) => println!("Error: {}", message),
   }
}

// Using the ? operator for error propagation
fn complex_calculation(a: f64, b: f64) -> Result<f64, String> {
   let result = divide(a, b)?;
   let doubled = double(result)?;
   Ok(doubled)
}

fn double(x: f64) -> Result<f64, String> {
   Ok(x * 2.0)
}

// Using if let for simple error handling
fn display_result(result: Result<f64, String>) {
   if let Ok(value) = result {
       println!("Success: {}", value);
   } else if let Err(error) = result {
       println!("Error: {}", error);
   }
}

// Panic for unrecoverable errors
fn process_positive(x: i32) {
   if x <= 0 {
       panic!("Expected positive number, got {}", x);
   }
   println!("Processing {}", x);
}

// Using unwrap and expect (shortcuts that panic on error)
fn get_value(result: Result<i32, String>) -> i32 {
   // Unwrap returns the value or panics with a default message
   result.unwrap()
   
   // Expect returns the value or panics with a custom message
   // result.expect("Failed to get value")
}

// Custom error types
#[derive(Debug)]
enum AppError {
   IoError(std::io::Error),
   ParseError(std::num::ParseIntError),
   Custom(String),
}

impl From<std::io::Error> for AppError {
   fn from(error: std::io::Error) -> Self {
       AppError::IoError(error)
   }
}

impl From<std::num::ParseIntError> for AppError {
   fn from(error: std::num::ParseIntError) -> Self {
       AppError::ParseError(error)
   }
}

// Using the custom error type
fn read_and_parse() -> Result<i32, AppError> {
   let mut input = String::new();
   std::io::stdin().read_line(&mut input)?; // IoError converted to AppError
   let number: i32 = input.trim().parse()?; // ParseIntError converted to AppError
   if number < 0 {
       return Err(AppError::Custom(String::from("Negative numbers not allowed")));
   }
   Ok(number)
}

