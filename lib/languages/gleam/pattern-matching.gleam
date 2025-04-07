// Pattern matching with case expression
fn match_example(value) {
  case value {
    // Match a specific value
    0 -> "Zero"
    
    // Match and bind a variable with guard
    x if x > 0 -> "Positive: " <> int.to_string(x)
    
    // Match and bind a variable
    x -> "Negative or zero: " <> int.to_string(x)
  }
}

// Pattern matching with tuples
fn analyze_point(point) {
  case point {
    tuple(0, 0) -> "Origin"
    tuple(0, y) -> "Y-axis at y=" <> int.to_string(y)
    tuple(x, 0) -> "X-axis at x=" <> int.to_string(x)
    tuple(x, y) if x == y -> "Diagonal at x=y=" <> int.to_string(x)
    tuple(x, y) -> "Point at x=" <> int.to_string(x) <> ", y=" <> int.to_string(y)
  }
}

// Pattern matching with lists
fn describe_list(list) {
  case list {
    [] -> "Empty list"
    [x] -> "Single element: " <> int.to_string(x)
    [x, y] -> "Two elements: " <> int.to_string(x) <> " and " <> int.to_string(y)
    [x, ..rest] -> "List starting with " <> int.to_string(x) <> " followed by " <> int.to_string(list.length(rest)) <> " more elements"
  }
}

// Pattern matching with custom types
type Shape {
  Circle(radius: Float)
  Rectangle(width: Float, height: Float)
  Triangle(base: Float, height: Float)
}

fn calculate_area(shape) {
  case shape {
    Circle(radius: r) -> pi *. r *. r
    Rectangle(width: w, height: h) -> w *. h
    Triangle(base: b, height: h) -> 0.5 *. b *. h
  }
}

const pi = 3.14159

