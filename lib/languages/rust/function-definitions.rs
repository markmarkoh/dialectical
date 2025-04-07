// Basic function with type annotations
fn add(a: i32, b: i32) -> i32 {
   a + b  // Implicit return (no semicolon)
}

// Function with explicit return
fn multiply(a: i32, b: i32) -> i32 {
   return a * b;  // Explicit return
}

// Function with multiple returns using Result
fn divide(a: f64, b: f64) -> Result<f64, String> {
   if b == 0.0 {
       Err(String::from("Division by zero"))
   } else {
       Ok(a / b)
   }
}

// Function with generic parameters
fn first<T>(list: &[T]) -> Option<&T> {
   if list.is_empty() {
       None
   } else {
       Some(&list[0])
   }
}

// Methods (functions associated with a type)
struct Rectangle {
   width: u32,
   height: u32,
}

impl Rectangle {
   // Constructor-like function (associated function)
   fn new(width: u32, height: u32) -> Rectangle {
       Rectangle { width, height }
   }
   
   // Method (takes &self)
   fn area(&self) -> u32 {
       self.width * self.height
   }
   
   // Method that modifies the instance (takes &mut self)
   fn resize(&mut self, width: u32, height: u32) {
       self.width = width;
       self.height = height;
   }
}

