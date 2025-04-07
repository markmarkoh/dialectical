# Elixir is dynamically typed
name = "Alice"
name = 42  # No error, types can change

# Pattern matching can provide some type checking
def process(value) when is_integer(value) do
  Integer.to_string(value)
end

# This will fail at runtime, not compile time
# process("hello")  # FunctionClauseError

# Type specifications (for documentation and dialyzer)
@spec calculate(integer(), integer()) :: integer()
def calculate(a, b) do
  a + b
end

# Using dialyzer to find type errors
# $ mix dialyzer
# The function call will fail because sum/1 requires a list of integers

