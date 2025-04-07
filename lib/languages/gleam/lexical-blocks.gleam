// Function block
fn calculate(x) {
  // This is a block that returns a value
  let y = x * 2
  let z = y + 1
  z  // Implicit return
}

// Conditional blocks
fn check(value) {
  if value > 0 {
    "Positive"  // This is returned if condition is true
  } else {
    "Non-positive"  // This is returned if condition is false
  }
}

// Case expression blocks
fn describe(value) {
  case value {
    0 -> "Zero"  // Each arm is an expression
    v if v > 0 -> "Positive"
    _ -> "Negative"
  }
}

// Block expressions can be used inline
let result = {
  let a = 1
  let b = 2
  a + b  // Returns 3
}

// Blocks create scope
{
  let x = 10  // x only exists in this block
}
// io.println(x)  // Error: x is not defined here

