// Simple recursion (factorial)
fn factorial(n: u64) -> u64 {
   if n == 0 {
       1
   } else {
       n * factorial(n - 1)
   }
}

// Tail recursion (more efficient)
fn factorial_tail(n: u64) -> u64 {
   factorial_helper(n, 1)
}

fn factorial_helper(n: u64, acc: u64) -> u64 {
   if n == 0 {
       acc
   } else {
       factorial_helper(n - 1, n * acc)
   }
}

// Recursive list processing
fn sum(numbers: &[i32]) -> i32 {
   if numbers.is_empty() {
       0
   } else {
       numbers[0] + sum(&numbers[1..])
   }
}

// Tail recursive list processing
fn sum_tail(numbers: &[i32]) -> i32 {
   sum_helper(numbers, 0)
}

fn sum_helper(numbers: &[i32], acc: i32) -> i32 {
   if numbers.is_empty() {
       acc
   } else {
       sum_helper(&numbers[1..], acc + numbers[0])
   }
}

// Iterative alternatives (often preferred in Rust)
fn factorial_iter(n: u64) -> u64 {
   (1..=n).product()
}

fn sum_iter(numbers: &[i32]) -> i32 {
   numbers.iter().sum()
}

// Recursive data structures
enum List<T> {
   Cons(T, Box<List<T>>),
   Nil,
}

impl<T> List<T> {
   fn new() -> List<T> {
       List::Nil
   }
   
   fn prepend(self, item: T) -> List<T> {
       List::Cons(item, Box::new(self))
   }
   
   fn len(&self) -> usize {
       match self {
           List::Cons(_, tail) => 1 + tail.len(),
           List::Nil => 0,
       }
   }
}

