// Function block
fn calculate(x: i32) -> i32 {
   // This is a block that returns a value
   let y = x * 2;
   let z = y + 1;
   z  // Implicit return (no semicolon)
}

// Conditional blocks
fn check(value: i32) -> &'static str {
   if value > 0 {
       "Positive"  // Implicit return
   } else {
       "Non-positive"  // Implicit return
   }
}

// Match expression blocks
fn describe(value: i32) -> &'static str {
   match value {
       0 => "Zero",  // Each arm is an expression
       v if v > 0 => "Positive",
       _ => "Negative",
   }
}

// Block expressions can be used inline
let result = {
   let a = 1;
   let b = 2;
   a + b  // Returns 3
};

// Blocks create scope
{
   let x = 10;  // x only exists in this block
}
// println!("{}", x);  // Error: x is not defined here

