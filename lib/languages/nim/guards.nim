# Nim doesn't have dedicated guard clauses like some languages,
# but it achieves similar functionality through early returns,
# assertions, and custom pragmas.

# Early returns as guards
proc processPositive(x: int): int =
  # Guard clause for invalid input
  if x <= 0:
    return 0  # Early return for invalid input
  
  # Main logic (only executed if guard passes)
  result = x * 2

# Multiple guard clauses
proc validateUser(username, password: string): string =
  # Guard: Check if username is empty
  if username == "":
    return "Username cannot be empty"
  
  # Guard: Check if username is too short
  if username.len < 3:
    return "Username must be at least 3 characters"
  
  # Guard: Check if password is empty
  if password == "":
    return "Password cannot be empty"
  
  # Guard: Check if password is too short
  if password.len < 8:
    return "Password must be at least 8 characters"
  
  # If all guards pass, the user is valid
  return "User is valid"

# Using assertions as guards
proc divide(a, b: int): int =
  assert b != 0, "Division by zero"
  result = a div b

# Custom pragma for preconditions
template requires(cond: bool, message = "") =
  when not defined(release):
    if not cond:
      raise newException(AssertionDefect, message)

# Using the custom pragma
proc sqrt(x: float): float =
  requires(x >= 0, "Cannot take square root of negative number")
  result = sqrt(x)

# Compile-time guards with when
proc factorial(n: int): int =
  when compiles(n < 0):
    if n < 0:
      raise newException(ValueError, "Factorial not defined for negative numbers")
  
  if n <= 1:
    return 1
  else:
    return n * factorial(n - 1)

# Option type for nullable values
import options

proc findUser(id: int): Option[string] =
  case id
  of 1: some("Alice")
  of 2: some("Bob")
  else: none(string)

# Using Option as a guard
proc greetUser(id: int): string =
  let userOpt = findUser(id)
  if userOpt.isNone:
    return "User not found"
  
  let user = userOpt.get()
  return "Hello, " & user

when isMainModule:
  echo "processPositive(5): ", processPositive(5)
  echo "processPositive(-5): ", processPositive(-5)
  
  echo "validateUser(\"\", \"password\"): ", validateUser("", "password")
  echo "validateUser(\"ab\", \"password\"): ", validateUser("ab", "password")
  echo "validateUser(\"alice\", \"\"): ", validateUser("alice", "")
  echo "validateUser(\"alice\", \"pass\"): ", validateUser("alice", "pass")
  echo "validateUser(\"alice\", \"password123\"): ", validateUser("alice", "password123")
  
  echo "divide(10, 2): ", divide(10, 2)
  # echo "divide(10, 0): ", divide(10, 0)  # This would raise an assertion error
  
  echo "factorial(5): ", factorial(5)
  
  echo "greetUser(1): ", greetUser(1)
  echo "greetUser(3): ", greetUser(3)

