// Generic function
fn identity(x: a) -> a {
  x
}

// Using a generic function
let int_value = identity(42)
let string_value = identity("hello")

// Generic type
type Box(a) {
  Box(value: a)
}

// Using a generic type
let int_box = Box(value: 42)
let string_box = Box(value: "hello")

// Generic function with multiple type parameters
fn pair(first: a, second: b) -> tuple(a, b) {
  tuple(first, second)
}

// Generic data structure (linked list)
type List(a) {
  Empty
  Cons(head: a, tail: List(a))
}

// Functions for the generic data structure
fn empty() -> List(a) {
  Empty
}

fn cons(head: a, tail: List(a)) -> List(a) {
  Cons(head: head, tail: tail)
}

fn map(list: List(a), f: fn(a) -> b) -> List(b) {
  case list {
    Empty -> Empty
    Cons(head, tail) -> Cons(head: f(head), tail: map(tail, f))
  }
}

// Using the generic data structure
let numbers = Cons(head: 1, tail: Cons(head: 2, tail: Cons(head: 3, tail: Empty)))
let doubled = map(numbers, fn(x) { x * 2 })

