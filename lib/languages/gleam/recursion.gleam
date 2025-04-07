// Simple recursion (factorial)
fn factorial(n) {
  case n {
    0 -> 1
    _ -> n * factorial(n - 1)
  }
}

// Tail recursion (more efficient)
fn factorial_tail(n) {
  factorial_helper(n, 1)
}

fn factorial_helper(n, acc) {
  case n {
    0 -> acc
    _ -> factorial_helper(n - 1, n * acc)
  }
}

// Recursive list processing
fn sum(numbers) {
  case numbers {
    [] -> 0
    [head, ..tail] -> head + sum(tail)
  }
}

// Tail recursive list processing
fn sum_tail(numbers) {
  sum_helper(numbers, 0)
}

fn sum_helper(numbers, acc) {
  case numbers {
    [] -> acc
    [head, ..tail] -> sum_helper(tail, acc + head)
  }
}

// Recursive data structure (binary tree)
type Tree(a) {
  Empty
  Node(value: a, left: Tree(a), right: Tree(a))
}

// Recursive tree traversal (in-order)
fn in_order(tree) {
  case tree {
    Empty -> []
    Node(value, left, right) -> 
      in_order(left) 
      |> list.append([value]) 
      |> list.append(in_order(right))
  }
}

