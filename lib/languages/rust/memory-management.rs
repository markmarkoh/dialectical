// Rust's memory management is primarily based on ownership, borrowing, and lifetimes.

// Ownership: Each value in Rust has an owner. When the owner goes out of scope, the value is dropped (memory is freed).
fn ownership_example() {
  let s = String::from("hello"); // s is the owner of the string data
  println!("{}", s);
  // s goes out of scope, and the memory is freed
}

// Borrowing: You can borrow a value without taking ownership.
// There can be multiple immutable borrows or one mutable borrow at a time.
fn borrowing_example() {
  let s = String::from("hello");
  let r1 = &s; // Immutable borrow
  let r2 = &s; // Another immutable borrow
  println!("{} and {}", r1, r2);
  // r1 and r2 go out of scope, but s is still valid

  let mut s = String::from("hello");
  let r3 = &mut s; // Mutable borrow
  r3.push_str(", world!");
  println!("{}", r3);
  // r3 goes out of scope, and s is still valid
}

// Lifetimes: Prevent dangling pointers by ensuring that borrows don't outlive the data they point to.
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
  if x.len() > y.len() {
    x
  } else {
    y
  }
}

fn lifetimes_example() {
  let string1 = String::from("long string is long");
  {
    let string2 = String::from("xyz");
    let result = longest(string1.as_str(), string2.as_str());
    println!("The longest string is {}", result);
  } // string2 goes out of scope
  // println!("The longest string is {}", result); // Error: result is no longer valid
}

// Smart Pointers: Provide additional functionality and manage memory.
// Box<T>: Allocates memory on the heap.
fn box_example() {
  let b = Box::new(5); // Allocate 5 on the heap
  println!("b = {}", b);
}

// Rc<T> and Arc<T>: Reference-counted pointers for shared ownership.
// Rc is for single-threaded code, Arc is for multi-threaded code.
use std::rc::Rc;

fn rc_example() {
  let a = Rc::new(String::from("hello"));
  let b = Rc::clone(&a);
  println!("a = {}, b = {}", a, b);
  // When the last Rc goes out of scope, the memory is freed.
}

// Memory safety is enforced at compile time, preventing common memory errors.
fn main() {
  ownership_example();
  borrowing_example();
  lifetimes_example();
  box_example();
  rc_example();
}

