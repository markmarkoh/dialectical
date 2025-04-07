# Variable assignment
name = "Alice"
age = 30

# Variables are immutable, but can be rebound
name = "Bob"  # This creates a new binding, not mutation

# Pattern matching assignment
{x, y} = {1, 2}
[head | tail] = [1, 2, 3]  # head = 1, tail = [2, 3]

# Multiple assignments
{a, b, c} = {1, 2, 3}

# Pin operator (^) to match against variable's value
x = 1
{^x, y} = {1, 2}  # Matches because x is 1
# {^x, y} = {2, 3}  # Would fail because x is 1, not 2

# Underscore to ignore values
{_, value} = {:ok, "Success"}

# Function clause matching
def process({:ok, value}), do: value
def process({:error, _}), do: nil

