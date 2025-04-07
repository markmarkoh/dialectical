# Function block
def calculate(x) do
  # This entire block returns the value of the last expression
  y = x * 2
  z = y + 1
  z  # Implicit return of the last expression
end

# One-line function syntax
def double(x), do: x * 2

# Conditional blocks
def check(value) do
  # Each block is an expression
  if value > 0 do
    "Positive"  # This is returned if condition is true
  else
    "Non-positive"  # This is returned if condition is false
  end
end

# Case expression blocks
def describe(value) do
  case value do
    0 -> "Zero"  # Each branch is an expression
    v when v > 0 -> "Positive"
    _ -> "Negative"
  end
end

# Anonymous functions
add = fn a, b -> a + b end
result = add.(1, 2)  # 3

# Block expressions with do/end
result = if true, do: "Yes", else: "No"

# Multi-line blocks with do/end
result = if true do
  x = 1
  y = 2
  x + y  # Returns 3
else
  0
end

