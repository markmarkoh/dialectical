# Integers
let age: int = 30  # Platform-dependent size (32 or 64 bit)
let small: int8 = 127  # 8-bit signed integer (-128 to 127)
let medium: int16 = 32767  # 16-bit signed integer
let large: int32 = 2147483647  # 32-bit signed integer
let huge: int64 = 9223372036854775807  # 64-bit signed integer

# Unsigned integers
let unsigned: uint = 42  # Platform-dependent size
let byte: uint8 = 255  # 8-bit unsigned integer (0 to 255)

# Floating-point numbers
let height: float = 1.75  # Default float (same as float64)
let precise: float64 = 3.14159265358979  # 64-bit float
let less_precise: float32 = 3.14159  # 32-bit float

# Booleans
let is_active: bool = true
let is_valid = is_active and age > 18

# Characters
let letter: char = 'A'
let emoji: string = "😊"  # Unicode characters are stored as strings

# Strings
let name: string = "Alice"
let greeting = "Hello, " & name  # String concatenation with &

# String interpolation
let message = "Name: $1, Age: $2" % [name, $age]
# Or with string interpolation using fmt module
import std/strformat
let formatted = fmt"Name: {name}, Age: {age}"

# Raw strings
let raw = r"C:\Program Files\Nim"  # Backslashes are not escaped

# Multi-line strings
let multi = """
This is a
multi-line string
"""

# Enums
type
  Color = enum
    Red, Green, Blue

let favorite: Color = Blue

# Sets
let vowels: set[char] = {'a', 'e', 'i', 'o', 'u'}
let has_a = 'a' in vowels  # true

when isMainModule:
  echo "Age: ", age
  echo "Height: ", height
  echo "Is active: ", is_active
  echo "Greeting: ", greeting
  echo "Message: ", message
  echo "Formatted: ", formatted
  echo "Favorite color: ", favorite
  echo "'a' is a vowel: ", has_a

