# Basic import
import math

# Import with alias
import strutils as str

# Import specific symbols
from os import getCurrentDir, fileExists

# Import all symbols into current namespace
from sequtils import nil  # Don't import symbols
from algorithm import all  # Import all symbols

# Using imports
proc example() =
  let sum = math.sqrt(16.0)  # 4.0
  let upper = str.toUpperAscii("hello")  # "HELLO"
  let dir = getCurrentDir()  # Current directory
  let exists = fileExists("example.txt")  # Check if file exists
  
  # Using qualified access
  let doubled = sequtils.map(@[1, 2, 3], proc(x: int): int = x * 2)
  
  # Using unqualified access (from algorithm import all)
  let sorted = sorted(@[3, 1, 2])

when isMainModule:
  example()

