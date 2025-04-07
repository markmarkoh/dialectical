// Basic if/else
fn check_number(x) {
  if x > 0 {
    "Positive"
  } else {
    "Non-positive"
  }
}

// If/else as an expression
let message = if is_admin {
  "Welcome, admin!"
} else {
  "Welcome, user!"
}

// If without else (returns Nil if condition is false)
fn maybe_log(message, verbose) {
  if verbose {
    io.println(message)
  }
}

// Nested conditions (better written with case)
fn process_data(data) {
  if data != Nil {
    if string.length(data) > 0 {
      "Valid data: " <> data
    } else {
      "Empty data"
    }
  } else {
    "No data"
  }
}

// Using case for multi-way conditionals (often preferred over nested if/else)
fn check_number_case(x) {
  case x {
    x if x > 0 -> "Positive"
    x if x < 0 -> "Negative"
    _ -> "Zero"
  }
}

// Boolean variable for the example
let is_admin = True

