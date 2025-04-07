# Guards in function clauses
def describe(0), do: "Zero"
def describe(n) when n > 0 and n < 10, do: "Small positive"
def describe(n) when n >= 10 and n < 100, do: "Medium positive"
def describe(n) when n >= 100, do: "Large positive"
def describe(n) when n < 0 and n > -10, do: "Small negative"
def describe(n) when n <= -10 and n > -100, do: "Medium negative"
def describe(_), do: "Large negative"

# Guards with destructuring
def process_pair({a, b}) when a == b, do: "Equal"
def process_pair({a, b}) when a > b, do: "First is larger"
def process_pair({a, b}) when a < b, do: "Second is larger"

# Guards in case expressions
def describe_list(items) do
  case items do
    [] -> "Empty list"
    [x] when x > 0 -> "Single positive item"
    [x] when x < 0 -> "Single negative item"
    [x] -> "Single zero item"
    [x, y | _] when x > y -> "Decreasing list"
    [x, y | _] when x < y -> "Increasing list"
    _ -> "Other list"
  end
end

# Guards with type checks
def process(value) when is_binary(value), do: "String: #{value}"
def process(value) when is_integer(value), do: "Integer: #{value}"
def process(value) when is_float(value), do: "Float: #{value}"
def process(value) when is_list(value), do: "List with #{length(value)} items"
def process(value) when is_map(value), do: "Map with #{map_size(value)} keys"
def process(_), do: "Other type"

# Guard limitations - only certain expressions are allowed
# Custom functions cannot be used in guards
# Only built-in functions marked as guard-safe can be used

