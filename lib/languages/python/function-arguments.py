# Basic function arguments
def add(a, b):
   return a + b

# Default parameters
def greet(name, greeting="Hello"):
   return f"{greeting}, {name}!"

# Variable positional arguments
def sum_all(*numbers):
   return sum(numbers)

# Variable keyword arguments
def create_user(**user_data):
   return {
       "id": generate_id(),
       **user_data
   }

# Keyword-only arguments (Python 3+)
def configure(*, host="localhost", port=8080):
   return f"{host}:{port}"

# Positional-only arguments (Python 3.8+)
def divide(a, b, /):
   return a / b

# Combining argument types
def process(a, b, /, c, *, d, **kwargs):
   # a, b are positional-only
   # c is positional or keyword
   # d is keyword-only
   # kwargs captures other keyword arguments
   return a + b + c + d + sum(kwargs.values())

# Unpacking arguments
def point_distance(x1, y1, x2, y2):
   return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

point1 = (1, 2)
point2 = (4, 6)
distance = point_distance(*point1, *point2)

# Unpacking keyword arguments
config = {"host": "example.com", "port": 443}
server = configure(**config)

# Type hints for complex arguments
from typing import List, Dict, Any, Optional

def analyze(
   data: List[Dict[str, Any]],
   fields: Optional[List[str]] = None,
   *,
   sort_by: str = "id"
) -> Dict[str, Any]:
   # Implementation
   return {"result": "analysis"}

def generate_id():
   import random
   return random.randint(1000, 9999)

