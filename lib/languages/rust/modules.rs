// File: math.rs
// Public functions are exported
pub fn add(a: i32, b: i32) -> i32 {
   a + b
}

pub fn subtract(a: i32, b: i32) -> i32 {
   a - b
}

// Private function (not exported outside the module)
fn square(x: i32) -> i32 {
   x * x
}

// File: main.rs
mod math; // Import the math module

fn main() {
   let result = math::add(5, 3);  // 8
   // math::square(4);  // Error: square is private
}

