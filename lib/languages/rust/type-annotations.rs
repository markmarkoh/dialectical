// Basic type annotations
let name: String = String::from("Alice");
let age: u32 = 30;
let height: f64 = 1.75;
let is_active: bool = true;

// Function type annotations
fn greet(name: &str) -> String {
   format!("Hello, {}!", name)
}

// Type aliases
type UserId = u64;
type UserName = String;

// Struct definitions
struct User {
   id: UserId,
   name: UserName,
   age: u32,
}

// Enum definitions
enum Result<T, E> {
   Ok(T),
   Err(E),
}

// Using generic types
let success: Result<i32, String> = Result::Ok(42);
let failure: Result<i32, String> = Result::Err(String::from("Something went wrong"));

// Trait bounds
fn print_id<T: std::fmt::Display>(id: T) {
   println!("ID: {}", id);
}

