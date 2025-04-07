# Enum.each for simple iteration
Enum.each(1..5, fn n ->
  IO.puts("Number: #{n}")
end)

# Enum.map for transforming collections
doubled = Enum.map([1, 2, 3], fn x -> x * 2 end)
# [2, 4, 6]

# Enum.filter for filtering collections
positives = Enum.filter([-2, -1, 0, 1, 2], fn x -> x > 0 end)
# [1, 2]

# Enum.reduce for accumulating values
sum = Enum.reduce([1, 2, 3, 4], 0, fn x, acc -> x + acc end)
# 10

# Comprehensions (similar to list comprehensions in Python)
squares = for n <- 1..5, do: n * n
# [1, 4, 9, 16, 25]

# Comprehensions with filters
even_squares = for n <- 1..10, rem(n, 2) == 0, do: n * n
# [4, 16, 36, 64, 100]

# Nested comprehensions
coordinates = for x <- 1..3, y <- 1..3, do: {x, y}
# [{1, 1}, {1, 2}, {1, 3}, {2, 1}, {2, 2}, {2, 3}, {3, 1}, {3, 2}, {3, 3}]

# Recursion for imperative-style loops
defmodule Counter do
  def count_down(0), do: IO.puts("Blast off!")
  def count_down(n) when n > 0 do
    IO.puts(n)
    count_down(n - 1)
  end
  
  # Early termination with recursion
  def find_first_even([]), do: nil
  def find_first_even([head | tail]) when rem(head, 2) == 0, do: head
  def find_first_even([_ | tail]), do: find_first_even(tail)
end

# Stream for lazy evaluation
1..1000
|> Stream.map(&(&1 * 3))
|> Stream.filter(&(rem(&1, 2) == 0))
|> Enum.take(5)
# [6, 12, 18, 24, 30]

