# Procedure block
proc calculate(x: int): int =
  # This is a block that returns a value
  let y = x * 2
  let z = y + 1
  result = z  # Implicit return using result variable

# If statement block
proc check(value: int): string =
  if value > 0:
    return "Positive"  # Explicit return
  else:
    return "Non-positive"  # Explicit return

# Case statement block
proc describe(value: int): string =
  case value
  of 0:
    result = "Zero"  # Each branch sets the result
  of 1..10:
    result = "Small positive"
  of -10..-1:
    result = "Small negative"
  else:
    result = "Large number"

# Explicit block statement
proc findValue(values: seq[int], target: int): int =
  block search:  # Named block
    for i, value in values:
      if value == target:
        result = i
        break search  # Break out of the named block
    result = -1  # Not found

# While loop block
proc countDown(from: int) =
  var current = from
  while current > 0:
    echo current
    current -= 1

# For loop block
proc sumList(numbers: seq[int]): int =
  result = 0
  for num in numbers:
    result += num

# Try-except block
proc safeDivide(a, b: int): int =
  try:
    result = a div b
  except DivByZeroDefect:
    result = 0

# Multi-statement single line with semicolons
proc compact(x: int): int =
  let y = x * 2; let z = y + 1; result = z

# Block expression (using anonymous block)
proc getResult(): int =
  let result = block:
    let a = 1
    let b = 2
    a + b  # Returns 3
  return result

when isMainModule:
  echo "calculate(5): ", calculate(5)
  echo "check(10): ", check(10)
  echo "describe(5): ", describe(5)
  echo "findValue(@[1, 2, 3, 4], 3): ", findValue(@[1, 2, 3, 4], 3)
  countDown(3)
  echo "sumList(@[1, 2, 3, 4]): ", sumList(@[1, 2, 3, 4])
  echo "safeDivide(10, 2): ", safeDivide(10, 2)
  echo "safeDivide(10, 0): ", safeDivide(10, 0)
  echo "compact(5): ", compact(5)
  echo "getResult(): ", getResult()

