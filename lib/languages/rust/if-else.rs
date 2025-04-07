// Basic if/else
fn check_number(x: i32) -> &'static str {
   if x > 0 {
       "Positive"
   } else if x < 0 {
       "Negative"
   } else {
       "Zero"
   }
}

// If/else as an expression
let message = if is_admin {
   "Welcome, admin!"
} else {
   "Welcome, user!"
};

// If without else
fn maybe_log(message: &str, verbose: bool) {
   if verbose {
       println!("{}", message);
   }
}

// Nested conditions
fn process_data(data: Option<&str>) -> &'static str {
   if let Some(value) = data {
       if !value.is_empty() {
           "Valid data"
       } else {
           "Empty data"
       }
   } else {
       "No data"
   }
}

// Using match for multi-way conditionals (often preferred over nested if/else)
fn check_number_match(x: i32) -> &'static str {
   match x {
       n if n > 0 => "Positive",
       n if n < 0 => "Negative",
       _ => "Zero",
   }
}

// Conditional compilation
#[cfg(target_os = "linux")]
fn platform_specific() {
   println!("Running on Linux");
}

#[cfg(target_os = "windows")]
fn platform_specific() {
   println!("Running on Windows");
}

