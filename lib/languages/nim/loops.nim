# For loop with range
proc countUp(n: int) =
  for i in 1..n:
    echo i

# While loop
proc countDown(from: int) =
  var current = from
  while current > 0:
    echo current
    current -= 1

# For loop with sequence
proc sumArray(numbers: seq[int]): int =
  result = 0
  for num in numbers:
    result += num

# For loop with index
proc printIndexed(items: seq[string]) =
  for i, item in items:
    echo i, ": ", item

# For loop with tuple unpacking
proc processPairs(pairs: seq[tuple[key: string, value: int]]) =
  for (key, value) in pairs:
    echo key, ": ", value

# Break and continue
proc findFirstEven(numbers: seq[int]): int =
  for num in numbers:
    if num mod 2 == 0:
      return num  # Early return (similar to break)
  return -1  # Not found

proc sumOddNumbers(numbers: seq[int]): int =
  result = 0
  for num in numbers:
    if num mod 2 == 0:
      continue  # Skip even numbers
    result += num

# Labeled blocks for breaking out of nested loops
proc findInMatrix(matrix: seq[seq[int]], target: int): tuple[found: bool, row, col: int] =
  block outer:
    for i, row in matrix:
      for j, value in row:
        if value == target:
          return (true, i, j)
    return (false, -1, -1)

# Iterator
iterator countTo(n: int): int =
  for i in 1..n:
    yield i

# Custom iterator
iterator fibonacci(n: int): int =
  var a, b = 0, 1
  for _ in 0..<n:
    yield a
    (a, b) = (b, a + b)

# Inline iterator
proc processWithInlineIterator() =
  for i in countTo(5):
    echo "Count: ", i

# Closure iterator
proc fibonacciClosure(n: int): iterator(): int =
  return iterator(): int =
    var a, b = 0, 1
    for _ in 0..<n:
      yield a
      (a, b) = (b, a + b)

# Using the closure iterator
proc processWithClosureIterator() =
  let fibIter = fibonacciClosure(10)
  for f in fibIter():
    echo "Fibonacci: ", f

# Functional approaches
import sequtils, sugar

proc doubleAll(numbers: seq[int]): seq[int] =
  numbers.map(x => x * 2)

proc onlyPositive(numbers: seq[int]): seq[int] =
  numbers.filter(x => x > 0)

when isMainModule:
  echo "countUp(5):"
  countUp(5)
  
  echo "countDown(5):"
  countDown(5)
  
  let numbers = @[1, 2, 3, 4, 5]
  echo "sumArray(numbers): ", sumArray(numbers)
  
  let fruits = @["apple", "banana", "cherry"]
  echo "printIndexed(fruits):"
  printIndexed(fruits)
  
  let pairs = @[("a", 1), ("b", 2), ("c", 3)]
  echo "processPairs(pairs):"
  processPairs(pairs)
  
  echo "findFirstEven(numbers): ", findFirstEven(numbers)
  echo "sumOddNumbers(numbers): ", sumOddNumbers(numbers)
  
  let matrix = @[
    @[1, 2, 3],
    @[4, 5, 6],
    @[7, 8, 9]
  ]
  let (found, row, col) = findInMatrix(matrix, 5)
  echo "findInMatrix(matrix, 5): found=", found, ", row=", row, ", col=", col
  
  echo "Iterator countTo(5):"
  for i in countTo(5):
    echo i
  
  echo "Iterator fibonacci(10):"
  for f in fibonacci(10):
    echo f
  
  echo "processWithInlineIterator():"
  processWithInlineIterator()
  
  echo "processWithClosureIterator():"
  processWithClosureIterator()
  
  echo "doubleAll(numbers): ", doubleAll(numbers)
  echo "onlyPositive(@[-2, -1, 0, 1, 2]): ", onlyPositive(@[-2, -1, 0, 1, 2])

