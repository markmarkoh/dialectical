# Simple recursion (factorial)
proc factorial(n: int): int =
  if n <= 1:
    1
  else:
    n * factorial(n - 1)

# Tail recursion (more efficient)
proc factorialTail(n: int, acc = 1): int =
  if n <= 1:
    acc
  else:
    factorialTail(n - 1, n * acc)

# Recursive sequence processing
proc sum(numbers: seq[int]): int =
  if numbers.len == 0:
    0
  else:
    numbers[0] + sum(numbers[1..^1])

# Tail recursive sequence processing
proc sumTail(numbers: seq[int], acc = 0): int =
  if numbers.len == 0:
    acc
  else:
    sumTail(numbers[1..^1], acc + numbers[0])

# Recursive data structure (binary tree)
type
  Tree = ref object
    value: int
    left, right: Tree

# Recursive tree traversal (in-order)
proc inOrder(tree: Tree): seq[int] =
  if tree == nil:
    @[]
  else:
    result = inOrder(tree.left)
    result.add(tree.value)
    result = result & inOrder(tree.right)

# Recursive binary search
proc binarySearch(arr: seq[int], target: int, left = 0, right = -1): int =
  var r = if right == -1: arr.len - 1 else: right
  
  if left > r:
    return -1  # Not found
  
  let mid = (left + r) div 2
  
  if arr[mid] == target:
    return mid  # Found
  elif arr[mid] > target:
    return binarySearch(arr, target, left, mid - 1)  # Search left half
  else:
    return binarySearch(arr, target, mid + 1, r)  # Search right half

# Recursive string reversal
proc reverse(s: string): string =
  if s.len <= 1:
    s
  else:
    reverse(s[1..^1]) & s[0..0]

# Memoization for optimization
import tables

proc fibMemo(n: int, memo: var Table[int, int]): int =
  if n in memo:
    return memo[n]
  
  if n <= 1:
    result = n
  else:
    result = fibMemo(n-1, memo) + fibMemo(n-2, memo)
  
  memo[n] = result

proc fibonacci(n: int): int =
  var memo = initTable[int, int]()
  fibMemo(n, memo)

when isMainModule:
  echo "factorial(5): ", factorial(5)
  echo "factorialTail(5): ", factorialTail(5)
  
  let numbers = @[1, 2, 3, 4, 5]
  echo "sum(numbers): ", sum(numbers)
  echo "sumTail(numbers): ", sumTail(numbers)
  
  let tree = Tree(
    value: 4,
    left: Tree(
      value: 2,
      left: Tree(value: 1),
      right: Tree(value: 3)
    ),
    right: Tree(
      value: 6,
      left: Tree(value: 5),
      right: Tree(value: 7)
    )
  )
  
  echo "inOrder(tree): ", inOrder(tree)
  
  let sorted = @[1, 3, 5, 7, 9, 11, 13, 15]
  echo "binarySearch(sorted, 7): ", binarySearch(sorted, 7)
  echo "binarySearch(sorted, 6): ", binarySearch(sorted, 6)
  
  echo "reverse(\"hello\"): ", reverse("hello")
  
  echo "fibonacci(10): ", fibonacci(10)

