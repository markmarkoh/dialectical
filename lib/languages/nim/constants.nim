# Constants (compile-time)
const
  Pi = 3.14159
  AppName = "MyApp"
  MaxRetries = 3

# Using constants
proc circleArea(radius: float): float =
  Pi * radius * radius

# Constants can use expressions if they're computable at compile time
const
  DoublePi = Pi * 2.0
  SecondsPerDay = 60 * 60 * 24

# Constants with compile-time function calls
const
  UpperName = AppName.toUpperAscii()  # "MYAPP"

# Compile-time loops and conditionals
const
  Factorial10 = block:
    var result = 1
    for i in 1..10:
      result *= i
    result  # 3628800

# Enum constants
type
  Color = enum
    Red, Green, Blue

const
  DefaultColor = Green

# Array constants
const
  Digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

# Tuple constants
const
  Origin = (0, 0)

# Set constants
const
  Vowels = {'a', 'e', 'i', 'o', 'u'}

# Compile-time evaluated procedure
proc factorial(n: int): int {.compileTime.} =
  if n <= 1: 1
  else: n * factorial(n - 1)

const
  Fact5 = factorial(5)  # 120

when isMainModule:
  echo "Pi: ", Pi
  echo "Circle area (radius 5): ", circleArea(5.0)
  echo "Double Pi: ", DoublePi
  echo "Seconds per day: ", SecondsPerDay
  echo "Upper app name: ", UpperName
  echo "Factorial of 10: ", Factorial10
  echo "Default color: ", DefaultColor
  echo "Digits: ", Digits
  echo "Origin: ", Origin
  echo "Vowels: ", Vowels
  echo "Factorial of 5: ", Fact5

