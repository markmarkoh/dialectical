// Gleam intentionally doesn't include macros
// This is a design choice to keep the language simple and predictable

// Instead of macros, Gleam focuses on making the core language
// expressive enough to solve problems without metaprogramming

// For example, instead of a debug macro, you might use a function:
fn debug(value) {
  io.println("Debug: " <> string.inspect(value))
  value
}

// Instead of a macro for creating a struct with default values,
// you might use a constructor function:
type User {
  User(name: String, age: Int, is_admin: Bool)
}

fn new_user(name, age) {
  User(name: name, age: age, is_admin: False)
}

// Instead of a macro for conditional compilation,
// you might use regular conditionals and constants:
const debug_mode = False

fn log(message) {
  case debug_mode {
    True -> io.println(message)
    False -> Nil
  }
}

// For more complex metaprogramming needs, Gleam can interoperate
// with Erlang and Elixir, which do have macro systems

