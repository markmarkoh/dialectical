# Lambda function (anonymous)
double = lambda x: x * 2

# Using lambda in higher-order functions
numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

# Lambda with multiple arguments
add = lambda a, b: a + b
result = add(5, 3)  # 8

# Lambda in sorting
people = [
   {"name": "Alice", "age": 30},
   {"name": "Bob", "age": 25},
   {"name": "Charlie", "age": 35}
]
sorted_by_age = sorted(people, key=lambda person: person["age"])

# Lambda with conditional expression
classify = lambda x: "even" if x % 2 == 0 else "odd"

# Immediately invoked function expression (IIFE)
result = (lambda x: x * x)(4)  # 16

# Capturing variables from outer scope (closures)
def make_multiplier(n):
   return lambda x: x * n

double = make_multiplier(2)
triple = make_multiplier(3)
result = double(5)  # 10

# Alternative to lambda: function objects
from functools import partial

def multiply(a, b):
   return a * b

double = partial(multiply, 2)
result = double(5)  # 10

