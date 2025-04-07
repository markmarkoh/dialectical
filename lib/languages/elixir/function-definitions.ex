# Named function with multiple clauses
def add(a, b) do
  a + b  # Implicit return
end

# One-line function syntax
def double(x), do: x * 2

# Function with pattern matching clauses
def process({:ok, value}), do: value * 2
def process({:error, _}), do: 0

# Private function (module-private)
defp helper(x), do: x + 1

# Using the pipe operator
def transform(numbers) do
  numbers
  |> Enum.map(fn x -> x * 2 end)
  |> Enum.filter(fn x -> x > 10 end)
  |> Enum.sort()
end

# Anonymous functions
multiply = fn a, b -> a * b end
result = multiply.(3, 4)  # 12

# Shorthand anonymous functions (capture syntax)
double = &(&1 * 2)
map_fn = &Enum.map/2  # Reference to Enum.map with arity 2

