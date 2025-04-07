// Closures (anonymous functions)
let add = |a, b| a + b;
let result = add(5, 3);  // 8

// Closures with explicit type annotations
let multiply: fn(i32, i32) -> i32 = |a, b| a * b;
let product = multiply(4, 2);  // 8

// Multi-line closures
let process = |data| {
   let transformed = data * 10;
   transformed + 5
};

// Using closures with iterators
let numbers = vec![1, 2, 3, 4, 5];
let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();
let sum: i32 = numbers.iter().sum();

// Closures capturing environment
let factor = 2;
let scale = |x| x * factor;  // Captures 'factor' from environment
let scaled = scale(5);  // 10

// Closure that moves captured values
let s = String::from("hello");
let print_s = move || {
   println!("{}", s);
};
// println!("{}", s);  // Error: s has been moved

// Function pointers
fn apply(f: fn(i32) -> i32, x: i32) -> i32 {
   f(x)
}

fn double(x: i32) -> i32 { x * 2 }
let result = apply(double, 5);  // 10

