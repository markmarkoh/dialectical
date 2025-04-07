# Type specifications with @spec
@spec greet(String.t()) :: String.t()
def greet(name) do
  "Hello, #{name}"
end

# Basic type specs
@spec add(integer(), integer()) :: integer()
def add(a, b), do: a + b

# Complex type specs
@spec process(String.t() | nil) :: {:ok, String.t()} | {:error, atom()}
def process(nil), do: {:error, :no_input}
def process(input), do: {:ok, String.upcase(input)}

# Type aliases with @type
@type user_id :: integer()
@type user_name :: String.t()

# Custom types
@type user :: %{
  id: user_id(),
  name: user_name(),
  age: non_neg_integer()
}

# Generic types
@type result(value, error) :: {:ok, value} | {:error, error}

# Using generic types
@spec divide(number(), number()) :: result(number(), atom())
def divide(_, 0), do: {:error, :division_by_zero}
def divide(a, b), do: {:ok, a / b}

