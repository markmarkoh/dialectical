// Using the Result type for error handling
fn divide(a, b) -> Result(Float, String) {
  case b {
    0.0 -> Error("Division by zero")
    _ -> Ok(a /. b)
  }
}

// Pattern matching on Result
fn calculate(a, b) {
  case divide(a, b) {
    Ok(result) -> "Result: " <> float.to_string(result)
    Error(message) -> "Error: " <> message
  }
}

// Using the try operator for error propagation
fn complex_calculation(a, b) -> Result(Float, String) {
  let result = try divide(a, b)
  let doubled = try double(result)
  Ok(doubled)
}

fn double(x) -> Result(Float, String) {
  if x > 1000000.0 {
    Error("Value too large")
  } else {
    Ok(x *. 2.0)
  }
}

// Using the Result.map function
fn calculate_area(radius) -> Result(Float, String) {
  case radius {
    r if r <= 0.0 -> Error("Radius must be positive")
    r -> Ok(3.14159 *. r *. r)
  }
}

fn calculate_circumference(radius) -> Result(Float, String) {
  calculate_area(radius)
  |> Result.map(fn(area) { 2.0 *. 3.14159 *. radius })
}

// Using the Result.then function for chaining operations
fn validate_and_process(input) -> Result(String, String) {
  validate(input)
  |> Result.then(process)
}

fn validate(input) -> Result(String, String) {
  if input == "" {
    Error("Input cannot be empty")
  } else {
    Ok(input)
  }
}

fn process(input) -> Result(String, String) {
  Ok("Processed: " <> input)
}

