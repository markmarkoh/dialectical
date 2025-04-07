# Simple recursion (factorial)
def factorial(n):
   if n == 0:
       return 1
   else:
       return n * factorial(n - 1)

# Tail recursion (not optimized in Python)
def factorial_tail(n, acc=1):
   if n == 0:
       return acc
   else:
       return factorial_tail(n - 1, n * acc)

# Recursive list processing
def sum_list(numbers):
   if not numbers:
       return 0
   else:
       return numbers[0] + sum_list(numbers[1:])

# Avoiding stack overflow with iteration
def factorial_iter(n):
   result = 1
   for i in range(1, n + 1):
       result *= i
   return result

# Recursive tree traversal
class Node:
   def __init__(self, value, left=None, right=None):
       self.value = value
       self.left = left
       self.right = right

def inorder_traversal(node):
   if node is None:
       return []
   return inorder_traversal(node.left) + [node.value] + inorder_traversal(node.right)

# Memoization to optimize recursive functions
def fibonacci(n, memo={}):
   if n in memo:
       return memo[n]
   if n <= 1:
       return n
   memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
   return memo[n]

# Using functools.lru_cache for memoization
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci_cached(n):
   if n <= 1:
       return n
   return fibonacci_cached(n-1) + fibonacci_cached(n-2)

