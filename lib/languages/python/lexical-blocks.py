# Function block
def calculate(x):
   # This is a block of code
   y = x * 2
   z = y + 1
   return z  # Explicit return required

# Conditional blocks
def check(value):
   # Each block contains statements
   if value > 0:
       return "Positive"  # Explicit return
   else:
       return "Non-positive"  # Explicit return

# Loop blocks
def process_items(items):
   results = []
   for item in items:
       # This is a loop block
       processed = item * 2
       results.append(processed)
   return results

# With blocks (context managers)
def read_file(filename):
   with open(filename, 'r') as file:
       # This block is executed with the file open
       content = file.read()
   # File is automatically closed here
   return content

# Try-except blocks
def safe_divide(a, b):
   try:
       result = a / b
   except ZeroDivisionError:
       return None
   else:
       return result
   finally:
       # This always executes
       print("Division attempted")

