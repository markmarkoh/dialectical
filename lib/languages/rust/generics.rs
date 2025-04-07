// Generic function
fn identity<T>(x: T) -> T {
   x
}

// Using a generic function
let int_value = identity(42);
let string_value = identity("hello");

// Generic struct
struct Box<T> {
   value: T,
}

// Using a generic struct
let int_box = Box { value: 42 };
let string_box = Box { value: String::from("hello") };

// Generic enum
enum Option<T> {
   Some(T),
   None,
}

// Generic function with multiple type parameters
fn pair<T, U>(first: T, second: U) -> (T, U) {
   (first, second)
}

// Generic function with trait bounds
fn print<T: std::fmt::Display>(value: T) {
   println!("{}", value);
}

// Multiple trait bounds
fn sort_and_print<T: Ord + std::fmt::Debug>(mut collection: Vec<T>) -> Vec<T> {
   collection.sort();
   println!("{:?}", collection);
   collection
}

// Where clauses for complex bounds
fn process<T, U>(t: T, u: U) -> bool
where
   T: std::fmt::Display + Clone,
   U: std::fmt::Debug + PartialEq,
{
   println!("{}", t);
   println!("{:?}", u);
   true
}

// Generic implementations
impl<T> Box<T> {
   fn new(value: T) -> Box<T> {
       Box { value }
   }
   
   fn get(&self) -> &T {
       &self.value
   }
}

