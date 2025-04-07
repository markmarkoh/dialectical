// File: math.gleam
// Public functions are exported
pub fn add(a, b) {
  a + b
}

pub fn subtract(a, b) {
  a - b
}

// Private function (not exported outside the module)
fn square(x) {
  x * x
}

// File: main.gleam
import math

fn main() {
  let result = math.add(5, 3)  // 8
  // math.square(4)  // Error: square is private
}

