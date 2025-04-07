# File: math.nim
# Public procedures are exported with *
proc add*(a, b: int): int =
  a + b

proc subtract*(a, b: int): int =
  a - b

# Private procedure (not exported)
proc square(x: int): int =
  x * x

# Alternatively, use explicit export statement
proc multiply(a, b: int): int =
  a * b

export multiply

# File: main.nim
import math

proc main() =
  let result = math.add(5, 3)  # 8
  # math.square(4)  # Error: square is private
  let product = math.multiply(4, 5)  # 20

when isMainModule:
  main()

