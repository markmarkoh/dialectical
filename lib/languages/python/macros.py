# Python doesn't have traditional macros, but offers several metaprogramming features

# Decorators - modify or enhance functions
def log_calls(func):
   def wrapper(*args, **kwargs):
       print(f"Calling {func.__name__} with {args}, {kwargs}")
       result = func(*args, **kwargs)
       print(f"{func.__name__} returned {result}")
       return result
   return wrapper

@log_calls
def add(a, b):
   return a + b

# Class decorators
def singleton(cls):
   instances = {}
   def get_instance(*args, **kwargs):
       if cls not in instances:
           instances[cls] = cls(*args, **kwargs)
       return instances[cls]
   return get_instance

@singleton
class Database:
   def __init__(self, url):
       self.url = url
       print(f"Connecting to {url}")

# Metaclasses - customize class creation
class Meta(type):
   def __new__(mcs, name, bases, attrs):
       # Add a method to the class
       attrs['describe'] = lambda self: f"I am a {name}"
       return super().__new__(mcs, name, bases, attrs)

class MyClass(metaclass=Meta):
   pass

# Dynamic attribute access
class DynamicAttrs:
   def __getattr__(self, name):
       return f"Dynamic attribute {name}"
   
   def __setattr__(self, name, value):
       print(f"Setting {name} to {value}")
       super().__setattr__(name, value)

# Code generation with exec and eval
def create_function(name, arg_names, body):
   args_str = ", ".join(arg_names)
   code = f"def {name}({args_str}):\n"
   for line in body.split("\n"):
       code += f"    {line}\n"
   
   # Create a local namespace
   namespace = {}
   
   # Execute the code in the namespace
   exec(code, globals(), namespace)
   
   # Return the created function
   return namespace[name]

# Create a function dynamically
multiply = create_function(
   "multiply", 
   ["a", "b"], 
   "return a * b"
)

# Monkey patching - modifying existing classes
def new_method(self):
   return "This is a new method"

# Add the method to an existing class
str.new_method = new_method

# Abstract Syntax Tree manipulation
import ast

def get_function_names(code):
   tree = ast.parse(code)
   return [node.name for node in ast.walk(tree) if isinstance(node, ast.FunctionDef)]

# Introspection
import inspect

def get_function_info(func):
   signature = inspect.signature(func)
   return {
       "name": func.__name__,
       "params": list(signature.parameters),
       "doc": func.__doc__
   }

