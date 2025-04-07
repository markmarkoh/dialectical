// Anonymous function assigned to a variable
let add = fn(a, b) { a + b }
let result = add(5, 3)  // 8

// Anonymous function with type annotations
let multiply: fn(Int, Int) -> Int = fn(a, b) { a * b }
let product = multiply(4, 2)  // 8

// Anonymous function with a single parameter
let double = fn(x) { x * 2 }

// Using anonymous functions with higher-order functions
let numbers = [1, 2, 3, 4, 5]
let doubled = list.map(numbers, fn(x) { x * 2 })  // [2, 4, 6, 8, 10]
let sum = list.fold(numbers, 0, fn(acc, x) { acc + x })  // 15

// Capturing variables from outer scope (closures)
fn make_adder(amount) {
  fn(x) { x + amount }
}

let add_five = make_adder(5)
let fifteen = add_five(10)  // 15

// Passing anonymous functions as arguments
fn apply(f: fn(Int) -> Int, x: Int) -> Int {
  f(x)
}

let doubled = apply(fn(x) { x * 2 }, 5)  // 10

