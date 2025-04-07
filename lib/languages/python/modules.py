# File: math.py
# Exported functions
def add(a, b):
   return a + b

def subtract(a, b):
   return a - b

# Private function (by convention, not enforced)
def _square(x):
   return x * x

# File: main.py
from math import add
# or import math

def main():
   result = add(5, 3)  # 8
   # math._square(4)  # Works, but not recommended (private by convention)

