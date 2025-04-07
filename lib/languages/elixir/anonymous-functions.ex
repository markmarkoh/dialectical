# Basic anonymous function
double = fn x -> x * 2 end

# Using anonymous functions as arguments
doubled_list = Enum.map([1, 2, 3], fn x -> x * 2 end)

# Multi-line anonymous function
process = fn data ->
  transformed = data * 10
  transformed + 5
end

# Shorthand syntax with capture operator
triple = &(&1 * 3)
doubled_list = Enum.map([1, 2, 3], &(&1 * 2))

# Capturing named functions
upcase = &String.upcase/1
result = upcase.("hello")  # "HELLO"

# Capturing variables from outer scope (closures)
def make_adder(amount) do
  fn x -> x + amount end
end

add_five = make_adder(5)
result = add_five.(10)  # 15

# Note the dot (.) when calling anonymous functions
result = double.(5)  # 10

