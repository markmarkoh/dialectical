# Basic function arguments
def add(a, b) do
  a + b
end

# Default arguments
def greet(name, greeting \\ "Hello") do
  "#{greeting}, #{name}!"
end

# Pattern matching in function clauses
def process({:ok, value}), do: value
def process({:error, _}), do: 0

# Guards in function arguments
def abs(n) when n < 0, do: -n
def abs(n) when n >= 0, do: n

# Variable arguments with lists
def sum(numbers) do
  Enum.sum(numbers)
end

# Keyword arguments
def create_user(name, opts \\ []) do
  age = Keyword.get(opts, :age, 0)
  email = Keyword.get(opts, :email, "")
  %{id: generate_id(), name: name, age: age, email: email}
end

# Calling with keyword arguments
user = create_user("Alice", age: 30, email: "alice@example.com")

# Function arity matters
def duplicate(x), do: [x, x]
def duplicate(x, n), do: List.duplicate(x, n)

# Destructuring in arguments
def process_coords({x, y}), do: x + y

defp generate_id do
  :crypto.strong_rand_bytes(16) |> Base.encode16(case: :lower)
end

