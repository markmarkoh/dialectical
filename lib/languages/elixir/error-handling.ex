# Pattern matching with tuples for success/error
def divide(_, 0), do: {:error, "Division by zero"}
def divide(a, b), do: {:ok, a / b}

# Using pattern matching to handle results
def calculate(a, b) do
  case divide(a, b) do
    {:ok, result} ->
      IO.puts("Result: #{result}")
    {:error, message} ->
      IO.puts("Error: #{message}")
  end
end

# Using the with special form for chaining operations
def complex_calculation(a, b) do
  with {:ok, result} <- divide(a, b),
       {:ok, doubled} <- double(result) do
    {:ok, doubled}
  else
    {:error, message} -> {:error, message}
  end
end

def double(x), do: {:ok, x * 2}

# Exceptions for exceptional cases
def divide_bang(a, b) do
  if b == 0 do
    raise ArgumentError, message: "Division by zero"
  else
    a / b
  end
end

# Try/rescue for handling exceptions
def calculate_bang(a, b) do
  try do
    result = divide_bang(a, b)
    IO.puts("Result: #{result}")
  rescue
    e in ArgumentError -> IO.puts("Error: #{e.message}")
  end
end

# Using the OK library (similar to Gleam's Result)
# defmodule Example do
#   use OK
#
#   def complex_calculation(a, b) do
#     ok a / b
#     ~> double()
#   end
#
#   defp double(x), do: {:ok, x * 2}
# end

