# Basic if/else
def check_number(x) do
  if x > 0 do
    "Positive"
  else if x < 0 do
    "Negative"
  else
    "Zero"
  end
end

# If/else as an expression
message = if is_admin do
  "Welcome, admin!"
else
  "Welcome, user!"
end

# If without else
def maybe_log(message, verbose) do
  if verbose do
    IO.puts(message)
  end
end

# Unless (inverse of if)
def validate(value) do
  unless value == nil do
    "Valid: #{value}"
  else
    "Invalid: nil value"
  end
end

# Cond for multiple conditions
def grade(score) do
  cond do
    score >= 90 -> "A"
    score >= 80 -> "B"
    score >= 70 -> "C"
    score >= 60 -> "D"
    true -> "F"  # Default case (like else)
  end
end

# One-line if/else
result = if x > 10, do: "Greater", else: "Less or equal"

