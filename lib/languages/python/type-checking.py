# Python is dynamically typed
name = "Alice"
name = 42  # No error, types can change

# Type hints (Python 3.5+)
def process(value: int) -> str:
   return str(value)

# Type hints are not enforced at runtime
def greet(name: str) -> str:
   return f"Hello, {name}"

greet(42)  # Works at runtime: "Hello, 42"

# Using mypy for static type checking
# $ mypy script.py
# Error: Argument 1 to "greet" has incompatible type "int"; expected "str"

# Type checking with isinstance
def safe_process(value):
   if not isinstance(value, int):
       raise TypeError("Expected an integer")
   return str(value)

# Type checking with duck typing
def process_sequence(items):
   try:
       return [x * 2 for x in items]
   except TypeError:
       raise TypeError("Expected an iterable of numbers")

