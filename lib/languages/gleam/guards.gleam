// Guards in case expressions
fn describe(x) {
  case x {
    0 -> "Zero"
    x if x > 0 && x < 10 -> "Small positive"
    x if x >= 10 && x < 100 -> "Medium positive"
    x if x >= 100 -> "Large positive"
    x if x < 0 && x > -10 -> "Small negative"
    x if x <= -10 && x > -100 -> "Medium negative"
    _ -> "Large negative"
  }
}

// Guards with pattern matching
fn process_pair(pair) {
  case pair {
    tuple(a, b) if a == b -> "Equal"
    tuple(a, b) if a > b -> "First is larger"
    tuple(a, b) if a < b -> "Second is larger"
    _ -> "Impossible case"  // (for completeness)
  }
}

// Guards with lists
fn describe_list(list) {
  case list {
    [] -> "Empty list"
    [x] if x > 0 -> "Single positive item"
    [x] if x < 0 -> "Single negative item"
    [x] -> "Single zero item"
    [x, y, ..rest] if x > y -> "Decreasing list"
    [x, y, ..rest] if x < y -> "Increasing list"
    _ -> "Other list"
  }
}

// Guards with custom types
type User {
  User(name: String, age: Int, is_admin: Bool)
}

fn describe_user(user) {
  case user {
    User(name, age, is_admin) if is_admin -> "Admin: " <> name
    User(name, age, _) if age < 18 -> "Minor: " <> name
    User(name, age, _) if age >= 65 -> "Senior: " <> name
    User(name, _, _) -> "Regular user: " <> name
  }
}

