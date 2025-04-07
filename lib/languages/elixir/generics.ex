# Elixir doesn't have explicit generics, but achieves
# similar results with dynamic typing and protocols

# "Generic" function that works with any type
def identity(x), do: x

# Using the function with different types
int_value = identity(42)
string_value = identity("hello")

# Protocols for polymorphic behavior
defprotocol Stringify do
  def to_string(value)
end

# Implementing the protocol for different types
defimpl Stringify, for: Integer do
  def to_string(value), do: Integer.to_string(value)
end

defimpl Stringify, for: List do
  def to_string(value), do: Enum.join(value, ", ")
end

# Type specifications can express generic-like concepts
@spec identity(a) :: a when a: var
def identity(x), do: x

@spec first(list(a)) :: a | nil when a: var
def first([head | _]), do: head
def first([]), do: nil

# Behaviours define interfaces that modules can implement
defmodule Repository do
  @callback get(id :: any) :: any
  @callback save(entity :: any) :: any
end

# Implementing a behaviour
defmodule UserRepository do
  @behaviour Repository
  
  @impl Repository
  def get(id), do: %{id: id, name: "User #{id}"}
  
  @impl Repository
  def save(user), do: {:ok, user}
end

