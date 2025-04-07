// Guards in match expressions
fn describe(x: i32) -> &'static str {
   match x {
       0 => "Zero",
       n if n > 0 && n < 10 => "Small positive",
       n if n >= 10 && n < 100 => "Medium positive",
       n if n >= 100 => "Large positive",
       n if n < 0 && n > -10 => "Small negative",
       n if n <= -10 && n > -100 => "Medium negative",
       _ => "Large negative",
   }
}

// Guards with destructuring
fn process_pair(pair: (i32, i32)) -> &'static str {
   match pair {
       (a, b) if a == b => "Equal",
       (a, b) if a > b => "First is larger",
       (a, b) if a < b => "Second is larger",
       _ => "Impossible case",  // (for completeness)
   }
}

// Guards in if-let expressions
fn check_positive(value: Option<i32>) -> &'static str {
   if let Some(x) = value {
       if x > 0 {
           "Positive"
       } else {
           "Zero or negative"
       }
   } else {
       "No value"
   }
}

// Guards with complex patterns
enum Message {
   Quit,
   Move { x: i32, y: i32 },
   Write(String),
   ChangeColor(i32, i32, i32),
}

fn process_message(msg: Message) -> &'static str {
   match msg {
       Message::Move { x, y } if x == 0 && y == 0 => "Stay in place",
       Message::Move { x, y } => "Move",
       Message::Write(text) if text.is_empty() => "Write nothing",
       Message::Write(_) => "Write something",
       Message::ChangeColor(r, g, b) if r == g && g == b => "Change to grayscale",
       Message::ChangeColor(_, _, _) => "Change to color",
       Message::Quit => "Quit",
   }
}

