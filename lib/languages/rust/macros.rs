// Declarative macros with macro_rules!
// Simple macro that prints a debug message
#[macro_export]
macro_rules! debug {
   ($expr:expr) => {
       let value = $expr;
       println!("Debug: {} = {:?}", stringify!($expr), value);
       value
   };
}

// Macro that creates a vector
#[macro_export]
macro_rules! vec_of {
   ($elem:expr; $n:expr) => {
       vec![$elem; $n]
   };
   ($($elem:expr),+ $(,)?) => {
       vec![$($elem),+]
   };
}

// Macro with different patterns
#[macro_export]
macro_rules! assert_eq_or_print {
   ($left:expr, $right:expr) => {
       if $left != $right {
           println!("Assertion failed: {} != {}", $left, $right);
       }
   };
   ($left:expr, $right:expr, $msg:expr) => {
       if $left != $right {
           println!("Assertion failed: {}", $msg);
       }
   };
}

// Procedural macros (defined in separate crates)
// Example of a derive macro
use proc_macro::TokenStream;

#[proc_macro_derive(HelloWorld)]
pub fn hello_world_derive(input: TokenStream) -> TokenStream {
   // Parse the input tokens into a syntax tree
   let input = syn::parse_macro_input!(input as syn::DeriveInput);
   
   // Build the output
   let name = input.ident;
   let expanded = quote::quote! {
       impl HelloWorld for #name {
           fn hello_world() {
               println!("Hello, World! My name is {}", stringify!(#name));
           }
       }
   };
   
   // Convert back to tokens
   TokenStream::from(expanded)
}

// Example of an attribute macro
#[proc_macro_attribute]
pub fn route(attr: TokenStream, item: TokenStream) -> TokenStream {
   // Parse the attribute and function
   let args = syn::parse_macro_input!(attr as syn::AttributeArgs);
   let func = syn::parse_macro_input!(item as syn::ItemFn);
   
   // Generate the implementation
   let name = &func.sig.ident;
   let expanded = quote::quote! {
       #[get(#(#args)*)]
       #func
       
       fn register_route() {
           register(stringify!(#name), #name);
       }
   };
   
   // Convert back to tokens
   TokenStream::from(expanded)
}

// Using the macros
fn main() {
   // Using debug! macro
   let x = 42;
   debug!(x * 2);  // Prints: Debug: x * 2 = 84
   
   // Using vec_of! macro
   let zeros = vec_of![0; 5];  // [0, 0, 0, 0, 0]
   let numbers = vec_of![1, 2, 3, 4];  // [1, 2, 3, 4]
   
   // Using assert_eq_or_print! macro
   assert_eq_or_print!(2 + 2, 4);  // No output
   assert_eq_or_print!(2 + 2, 5);  // Prints: Assertion failed: 4 != 5
   assert_eq_or_print!(2 + 2, 5, "Math is broken!");  // Prints: Assertion failed: Math is broken!
   
   // Using derive macro (in actual code)
   // #[derive(HelloWorld)]
   // struct MyStruct;
   // MyStruct::hello_world();  // Prints: Hello, World! My name is MyStruct
   
   // Using attribute macro (in actual code)
   // #[route("/users")]
   // fn get_users() { /* ... */ }
}

