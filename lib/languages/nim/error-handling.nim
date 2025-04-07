# Exception handling with try-except
proc divide(a, b: int): int =
  if b == 0:
    raise newException(DivByZeroDefect, "Division by zero")
  result = a div b

proc calculateQuotient(a, b: int): int =
  try:
    result = divide(a, b)
  except DivByZeroDefect:
    echo "Error: Cannot divide by zero"
    result = 0

# Multiple exception types
proc parseData(data: string): int =
  try:
    result = parseInt(data)
  except ValueError:
    echo "Error: Invalid number format"
    result = 0
  except Exception as e:
    echo "Unexpected error: ", e.msg
    result = -1

# Try-except-finally
proc readFile(path: string): string =
  var file: File
  try:
    if not open(file, path):
      raise newException(IOError, "Could not open file")
    result = file.readAll()
  except IOError as e:
    echo "Error reading file: ", e.msg
    result = ""
  finally:
    if file != nil:
      file.close()

# Custom exception types
type
  ValidationError = object of CatchableError
  NotFoundError = object of CatchableError

# Using custom exceptions
proc findUser(id: int): string =
  case id
  of 1: "Alice"
  of 2: "Bob"
  else: raise newException(NotFoundError, "User not found")

# Defer statement for cleanup
proc processFile(path: string): string =
  var file = open(path)
  defer: file.close()  # Will be called when the procedure exits
  
  result = file.readAll()

# Option type for nullable values
import options

proc safeDivide(a, b: int): Option[int] =
  if b == 0:
    none(int)
  else:
    some(a div b)

# Result type for error handling
type
  Result[T, E] = object
    case isOk: bool
    of true:
      value: T
    of false:
      error: E

proc ok[T, E](value: T): Result[T, E] =
  Result[T, E](isOk: true, value: value)

proc err[T, E](error: E): Result[T, E] =
  Result[T, E](isOk: false, error: error)

# Using Result type
proc divideResult(a, b: int): Result[int, string] =
  if b == 0:
    err[int, string]("Division by zero")
  else:
    ok[int, string](a div b)

# Chaining Results
proc doubleResult(x: int): Result[int, string] =
  ok[int, string](x * 2)

proc complexCalculation(a, b: int): Result[int, string] =
  let divResult = divideResult(a, b)
  if not divResult.isOk:
    return divResult
  
  let value = divResult.value
  return doubleResult(value)

when isMainModule:
  echo "calculateQuotient(10, 2): ", calculateQuotient(10, 2)
  echo "calculateQuotient(10, 0): ", calculateQuotient(10, 0)
  
  echo "parseData(\"42\"): ", parseData("42")
  echo "parseData(\"abc\"): ", parseData("abc")
  
  try:
    let user = findUser(3)
    echo "User: ", user
  except NotFoundError as e:
    echo "Error: ", e.msg
  
  let result1 = safeDivide(10, 2)
  if result1.isSome:
    echo "Result: ", result1.get()
  else:
    echo "Error: Division by zero"
  
  let result2 = safeDivide(10, 0)
  if result2.isSome:
    echo "Result: ", result2.get()
  else:
    echo "Error: Division by zero"
  
  let divResult = divideResult(10, 2)
  if divResult.isOk:
    echo "Result: ", divResult.value
  else:
    echo "Error: ", divResult.error
  
  let complexResult = complexCalculation(10, 2)
  if complexResult.isOk:
    echo "Complex result: ", complexResult.value
  else:
    echo "Complex error: ", complexResult.error

