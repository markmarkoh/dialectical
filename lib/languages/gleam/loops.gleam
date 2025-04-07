// Gleam doesn't have traditional loops like for/while
// Instead, it uses recursion and higher-order functions

// Using recursion for iteration
fn count_up(n) {
  count_up_helper(1, n)
}

fn count_up_helper(current, max) {
  case current <= max {
    True -> {
      io.println(int.to_string(current))
      count_up_helper(current + 1, max)
    }
    False -> Nil
  }
}

// Using list.map for transformation
fn double_all(numbers) {
  list.map(numbers, fn(x) { x * 2 })
}

// Using list.filter for filtering
fn only_positive(numbers) {
  list.filter(numbers, fn(x) { x > 0 })
}

// Using list.fold for accumulation
fn sum(numbers) {
  list.fold(numbers, 0, fn(acc, x) { acc + x })
}

// Using the pipe operator for chaining operations
fn process_numbers(numbers) {
  numbers
  |> list.map(fn(x) { x * 2 })
  |> list.filter(fn(x) { x > 10 })
  |> list.fold(0, fn(acc, x) { acc + x })
}

// Recursive implementation of map
fn my_map(list, f) {
  case list {
    [] -> []
    [head, ..tail] -> [f(head), ..my_map(tail, f)]
  }
}

// Recursive implementation of filter
fn my_filter(list, predicate) {
  case list {
    [] -> []
    [head, ..tail] if predicate(head) -> [head, ..my_filter(tail, predicate)]
    [_, ..tail] -> my_filter(tail, predicate)
  }
}

// Recursive implementation of fold
fn my_fold(list, initial, f) {
  case list {
    [] -> initial
    [head, ..tail] -> my_fold(tail, f(initial, head), f)
  }
}

