fn match_example(value: Option<i32>) -> String {
   match value {
       // Match a specific value
       Some(0) => String::from("Zero"),
       
       // Match and bind a variable with guard
       Some(x) if x > 0 => format!("Positive: {}", x),
       
       // Match and bind a variable
       Some(x) => format!("Negative: {}", x),
       
       // Match a variant
       None => String::from("No value"),
   }
}

// Pattern matching with tuples
fn analyze_point(point: (i32, i32)) -> String {
   match point {
       (0, 0) => String::from("Origin"),
       (0, y) => format!("Y-axis at y={}", y),
       (x, 0) => format!("X-axis at x={}", x),
       (x, y) if x == y => format!("Diagonal at x=y={}", x),
       (x, y) => format!("Point at x={}, y={}", x, y),
   }
}

// Pattern matching with structs
struct Point { x: i32, y: i32 }

fn describe_point(point: Point) -> String {
   match point {
       Point { x: 0, y: 0 } => String::from("Origin"),
       Point { x: 0, y } => format!("Y-axis at y={}", y),
       Point { x, y: 0 } => format!("X-axis at x={}", x),
       Point { x, y } if x == y => format!("Diagonal at x=y={}", x),
       Point { x, y } => format!("Point at x={}, y={}", x, y),
   }
}

// Pattern matching with enums
enum Message {
   Quit,
   Move { x: i32, y: i32 },
   Write(String),
   ChangeColor(i32, i32, i32),
}

fn process_message(msg: Message) -> String {
   match msg {
       Message::Quit => String::from("Quit"),
       Message::Move { x, y } => format!("Move to x={}, y={}", x, y),
       Message::Write(text) => format!("Write: {}", text),
       Message::ChangeColor(r, g, b) => format!("Change color to RGB({},{},{})", r, g, b),
   }
}

// If-let for single pattern matching
fn check_value(value: Option<i32>) -> String {
   if let Some(x) = value {
       format!("Has value: {}", x)
   } else {
       String::from("No value")
   }
}

