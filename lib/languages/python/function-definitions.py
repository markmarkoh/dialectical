# Basic function definition
def add(a, b):
   return a + b  # Explicit return

# Function with default parameters
def greet(name, greeting="Hello"):
   return f"{greeting}, {name}!"

# Function with type hints
def multiply(a: int, b: int) -> int:
   return a * b

# Variable arguments
def sum_all(*args):
   return sum(args)

# Keyword arguments
def create_person(**kwargs):
   return kwargs

# Combining different argument types
def process(required, *args, option="default", **kwargs):
   print(f"Required: {required}")
   print(f"Args: {args}")
   print(f"Option: {option}")
   print(f"Kwargs: {kwargs}")

# Lambda functions (anonymous)
square = lambda x: x * x

# Function with docstring
def calculate_area(radius):
   """
   Calculate the area of a circle.
   
   Args:
       radius: The radius of the circle
       
   Returns:
       The area of the circle
   """
   return 3.14159 * radius * radius

# Nested functions
def outer(x):
   def inner(y):
       return x + y
   return inner

# Closures
def make_adder(n):
   def add(x):
       return x + n
   return add

add_five = make_adder(5)
result = add_five(10)  # 15

