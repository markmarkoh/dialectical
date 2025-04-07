# Traditional pattern matching with if/elif chains
def match_value_old(value):
   if value == 0:
       return "Zero"
   elif isinstance(value, int) and value > 0:
       return f"Positive: {value}"
   elif isinstance(value, tuple) and len(value) == 2:
       a, b = value
       return f"Tuple with {a} and {b}"
   elif isinstance(value, list) and value:
       head, *tail = value
       return f"List starting with {head}"
   else:
       return "Something else"

# Pattern matching with match/case (Python 3.10+)
def match_value(value):
   match value:
       case 0:
           return "Zero"
       case int(x) if x > 0:
           return f"Positive: {x}"
       case (a, b):
           return f"Tuple with {a} and {b}"
       case [head, *tail]:
           return f"List starting with {head}"
       case {"name": name, "age": age}:
           return f"Person named {name}, age {age}"
       case _:
           return "Something else"

# Class pattern matching
class Point:
   def __init__(self, x, y):
       self.x = x
       self.y = y

def analyze_point(point):
   match point:
       case Point(x=0, y=0):
           return "Origin"
       case Point(x=0, y=y):
           return f"On Y-axis at y={y}"
       case Point(x=x, y=0):
           return f"On X-axis at x={x}"
       case Point(x=x, y=y) if x == y:
           return f"On diagonal at x=y={x}"
       case Point():
           return "Some other point"
       case _:
           return "Not a point"

