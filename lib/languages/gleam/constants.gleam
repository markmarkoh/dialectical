// Constants (compile-time)
const pi = 3.14159
const app_name = "MyApp"
const max_retries = 3

// Using constants
fn circle_area(radius) {
  pi *. radius *. radius
}

// Constants can use expressions if they're computable at compile time
const double_pi = pi *. 2.0
const seconds_per_day = 60 * 60 * 24

// Constants in pattern matching
fn describe_number(n) {
  case n {
    0 -> "Zero"
    ^max_retries -> "Maximum retries reached"
    _ -> "Some other number"
  }
}

