# Anonymous procedure assigned to a variable
let add = proc(a, b: int): int =
  a + b

let result = add(5, 3)  # 8

# Anonymous procedure with type annotations
let multiply: proc(a, b: int): int = proc(a, b: int): int =
  a * b

let product = multiply(4, 2)  # 8

# Arrow function syntax (Nim 1.4+)
let double = (x: int) => x * 2
let doubled = double(5)  # 10

# Using anonymous procedures with higher-order functions
import sequtils

let numbers = @[1, 2, 3, 4, 5]
let doubledNumbers = numbers.map(proc(x: int): int = x * 2)
let evenNumbers = numbers.filter(proc(x: int): bool = x mod 2 == 0)

# Using arrow syntax with higher-order functions
let squaredNumbers = numbers.map((x: int) => x * x)

# Capturing variables from outer scope (closures)
proc makeAdder(amount: int): proc(x: int): int =
  return proc(x: int): int =
    x + amount

let addFive = makeAdder(5)
let fifteen = addFive(10)  # 15

# Passing anonymous procedures as arguments
proc apply(f: proc(x: int): int, x: int): int =
  f(x)

let tripled = apply(proc(x: int): int = x * 3, 5)  # 15

# Immediately invoked procedure expression (IIPE)
let value = (proc(): int =
  let a = 5
  let b = 7
  return a + b
)()  # 12

# Anonymous iterator
let countTo5 = iterator(): int =
  for i in 1..5:
    yield i

# Using the anonymous iterator
var iter = countTo5
for i in iter():
  echo i

when isMainModule:
  echo "add(5, 3): ", result
  echo "multiply(4, 2): ", product
  echo "double(5): ", doubled
  echo "doubledNumbers: ", doubledNumbers
  echo "evenNumbers: ", evenNumbers
  echo "squaredNumbers: ", squaredNumbers
  echo "addFive(10): ", fifteen
  echo "tripled: ", tripled
  echo "value: ", value

