# Constants by convention (uppercase)
PI = 3.14159
APP_NAME = "MyApp"
MAX_RETRIES = 3

# Using constants
def circle_area(radius):
   return PI * radius * radius

# Module-level constants
# In constants.py
DATABASE_URL = "postgresql://user:pass@localhost/db"
API_KEYS = {
   "service1": "key1",
   "service2": "key2"
}

# Importing constants
# In another file
from constants import DATABASE_URL, API_KEYS

# Enum constants (Python 3.4+)
from enum import Enum, auto

class Color(Enum):
   RED = 1
   GREEN = 2
   BLUE = 3
   YELLOW = auto()  # Auto-assigns 4

# Using enums
def process_color(color):
   if color == Color.RED:
       return "Processing red"
   return "Processing other color"

# "Real" constants with descriptors
class Constant:
   def __init__(self, value):
       self.value = value
   
   def __get__(self, instance, owner):
       return self.value
   
   def __set__(self, instance, value):
       raise AttributeError("Cannot change a constant")

class Constants:
   PI = Constant(3.14159)

# Using the "real" constant
c = Constants()
area = c.PI * radius * radius
# c.PI = 3  # Raises AttributeError

