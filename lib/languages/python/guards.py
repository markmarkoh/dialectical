# Early returns as guards
def process_positive(x):
   if x <= 0:
       return "Must be positive"
   
   # Only reached if x > 0
   return x * 2

# Multiple guard conditions
def validate_user(user):
   if not user:
       return "User is required"
   
   if not user.get("name"):
       return "Name is required"
   
   if not user.get("email"):
       return "Email is required"
   
   if user.get("age", 0) < 18:
       return "Must be 18 or older"
   
   # Only reached if all validations pass
   return "User is valid"

# Guards with exceptions
def divide(a, b):
   if b == 0:
       raise ValueError("Cannot divide by zero")
   
   return a / b

# Type checking guards
def process_string(value):
   if not isinstance(value, str):
       raise TypeError("Expected a string")
   
   return value.upper()

# Guards with assertions
def calculate_square_root(x):
   assert x >= 0, "Input must be non-negative"
   
   return x ** 0.5

# Decorators as guards
def require_positive(func):
   def wrapper(x, *args, **kwargs):
       if x <= 0:
           raise ValueError("Argument must be positive")
       return func(x, *args, **kwargs)
   return wrapper

@require_positive
def calculate_log(x):
   import math
   return math.log(x)

