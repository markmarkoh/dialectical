// Basic function arguments
fn add(a: i32, b: i32) -> i32 {
   a + b
}

// Passing by reference
fn increment(x: &mut i32) {
   *x += 1;
}

// Slices for variable-length arrays
fn sum(numbers: &[i32]) -> i32 {
   numbers.iter().sum()
}

// Default function arguments (via Option)
fn greet(name: &str, greeting: Option<&str>) -> String {
   let greeting = greeting.unwrap_or("Hello");
   format!("{}, {}!", greeting, name)
}

// Calling with default arguments
let message = greet("Alice", None);  // "Hello, Alice!"
let custom = greet("Bob", Some("Hi"));  // "Hi, Bob!"

// Named arguments (via structs)
struct Config {
   name: String,
   age: Option<u32>,
   email: Option<String>,
}

fn create_user(config: Config) -> User {
   User {
       id: generate_id(),
       name: config.name,
       age: config.age.unwrap_or(0),
       email: config.email.unwrap_or_else(|| String::from("")),
   }
}

// Calling with named arguments
let user = create_user(Config {
   name: String::from("Alice"),
   age: Some(30),
   email: Some(String::from("alice@example.com")),
});

// Variadic arguments (via macros)
macro_rules! sum_all {
   ($($x:expr),*) => {
       {
           let mut total = 0;
           $(total += $x;)*
           total
       }
   };
}

let total = sum_all!(1, 2, 3, 4);  // 10

// Helper types for the examples
struct User {
   id: String,
   name: String,
   age: u32,
   email: String,
}

fn generate_id() -> String {
   String::from("user123")
}

