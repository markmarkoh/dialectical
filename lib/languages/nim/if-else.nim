# Basic if/else
proc checkNumber(x: int): string =
  if x > 0:
    "Positive"
  elif x < 0:
    "Negative"
  else:
    "Zero"

# If/else as an expression
let isAdmin = true  # Example variable
let message = if isAdmin: "Welcome, admin!" else: "Welcome, user!"

# If with multiple statements in blocks
let x = 5  # Example variable
let result = if x > 0:
  echo "Positive number"
  "Positive"
else:
  echo "Non-positive number"
  "Non-positive"

# If without else
proc maybeLog(message: string, verbose: bool) =
  if verbose:
    echo message

# Nested conditions
proc processData(data: string): string =
  if data != "":
    if data.len > 0:
      "Valid data: " & data
    else:
      "Empty data"
  else:
    "No data"

# Using when for compile-time conditionals
const Debug = true

when Debug:
  proc log(msg: string) =
    echo "DEBUG: " & msg
else:
  proc log(msg: string) =
    discard  # Do nothing in release mode

# If with variable declaration
proc findPositive(numbers: seq[int]): int =
  if let index = numbers.find(proc(x: int): bool = x > 0):
    index  # Return the index if found
  else:
    -1  # Return -1 if not found

# If with exception handling
proc safeDivide(a, b: int): int =
  if b == 0:
    0  # Return 0 instead of raising an exception
  else:
    a div b

import sequtils

when isMainModule:
  echo "checkNumber(10): ", checkNumber(10)
  echo "checkNumber(-5): ", checkNumber(-5)
  echo "checkNumber(0): ", checkNumber(0)
  
  echo "message: ", message
  echo "result: ", result
  
  maybeLog("This is a verbose message", true)
  maybeLog("This won't be printed", false)
  
  echo "processData(\"hello\"): ", processData("hello")
  echo "processData(\"\"): ", processData("")
  
  log("This is a debug message")
  
  let numbers = @[-2, -1, 0, 1, 2]
  echo "findPositive(numbers): ", findPositive(numbers)
  
  echo "safeDivide(10, 2): ", safeDivide(10, 2)
  echo "safeDivide(10, 0): ", safeDivide(10, 0)

