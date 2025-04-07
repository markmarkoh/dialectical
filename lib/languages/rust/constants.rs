// Constants (compile-time)
const PI: f64 = 3.14159;
const APP_NAME: &str = "MyApp";
const MAX_RETRIES: u32 = 3;

// Static variables (similar to constants but with a fixed memory address)
static GLOBAL_COUNTER: u32 = 0;
static mut MUTABLE_COUNTER: u32 = 0; // Requires unsafe to modify

// Using constants
fn circle_area(radius: f64) -> f64 {
   PI * radius * radius
}

// Constants can use complex expressions if they're computable at compile time
const DOUBLE_PI: f64 = PI * 2.0;
const SECONDS_PER_DAY: u32 = 60 * 60 * 24;

// Constants in match patterns
fn describe_number(n: i32) -> &'static str {
   match n {
       0 => "Zero",
       MAX_RETRIES => "Maximum retries reached",
       _ => "Some other number",
   }
}

