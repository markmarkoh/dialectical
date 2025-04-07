def match_example(value) do
  case value do
    # Match a specific value
    0 -> "Zero"
    
    # Match and bind a variable with guard
    x when x > 0 -> "Positive: #{x}"
    
    # Match and destructure a tuple
    {a, b} -> "Tuple with #{a} and #{b}"
    
    # Match a list
    [head | tail] -> "List starting with #{head}"
    
    # Match a map
    %{name: name} -> "Map with name: #{name}"
    
    # Match a struct
    %User{name: name} -> "User with name: #{name}"
    
    # Catch-all pattern
    _ -> "Something else"
  end
end

# Pattern matching in function clauses
def process(0), do: "Zero"
def process(x) when x > 0, do: "Positive: #{x}"
def process({a, b}), do: "Tuple with #{a} and #{b}"
def process([head | _]), do: "List starting with #{head}"
def process(_), do: "Something else"

# Pattern matching in assignments
{a, b} = {1, 2}  # a = 1, b = 2
[head | tail] = [1, 2, 3]  # head = 1, tail = [2, 3]

# Pattern matching with pin operator
x = 1
case {1, 2} do
  {^x, y} -> "Matched #{y}"  # Matches because x is 1
  _ -> "No match"
end

