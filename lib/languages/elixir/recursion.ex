# Simple recursion (factorial)
def factorial(0), do: 1
def factorial(n) when n > 0, do: n * factorial(n - 1)

# Tail recursion (more efficient)
def factorial_tail(n), do: factorial_helper(n, 1)

defp factorial_helper(0, acc), do: acc
defp factorial_helper(n, acc) when n > 0, do: factorial_helper(n - 1, n * acc)

# Recursive list processing
def sum([]), do: 0
def sum([first | rest]), do: first + sum(rest)

# Tail recursive list processing
def sum_tail(numbers), do: sum_helper(numbers, 0)

defp sum_helper([], acc), do: acc
defp sum_helper([first | rest], acc), do: sum_helper(rest, acc + first)

# Using Enum functions (which are recursive internally)
def sum_enum(numbers), do: Enum.sum(numbers)
def map_double(numbers), do: Enum.map(numbers, &(&1 * 2))
def filter_positive(numbers), do: Enum.filter(numbers, &(&1 > 0))

# Recursive tree traversal
def traverse(%{left: left, value: value, right: right}) do
  traverse(left) ++ [value] ++ traverse(right)
end
def traverse(nil), do: []

