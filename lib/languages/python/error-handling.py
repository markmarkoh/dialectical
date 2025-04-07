# Try-except for catching exceptions
def divide(a, b):
   try:
       return a / b
   except ZeroDivisionError:
       return "Cannot divide by zero"

# Catching multiple exceptions
def process_data(data):
   try:
       value = int(data)
       result = 100 / value
       return result
   except ValueError:
       return "Invalid data format"
   except ZeroDivisionError:
       return "Value cannot be zero"
   except Exception as e:
       return f"Unexpected error: {str(e)}"

# Try-except-else-finally
def read_file(filename):
   try:
       file = open(filename, 'r')
   except FileNotFoundError:
       print(f"File {filename} not found")
       return None
   else:
       # Only executed if no exception was raised
       content = file.read()
       return content
   finally:
       # Always executed, regardless of exceptions
       if 'file' in locals() and not file.closed:
           file.close()

# Raising exceptions
def validate_age(age):
   if not isinstance(age, int):
       raise TypeError("Age must be an integer")
   if age < 0:
       raise ValueError("Age cannot be negative")
   if age > 150:
       raise ValueError("Age is unrealistically high")
   return age

# Creating custom exceptions
class ValidationError(Exception):
   """Exception raised for validation errors."""
   pass

class NotFoundError(Exception):
   """Exception raised when a resource is not found."""
   pass

# Using custom exceptions
def get_user(user_id):
   if not isinstance(user_id, int):
       raise ValidationError("User ID must be an integer")
   
   user = find_user_in_database(user_id)
   if not user:
       raise NotFoundError(f"User with ID {user_id} not found")
   
   return user

# Context managers for resource management
def process_file(filename):
   with open(filename, 'r') as file:
       # File is automatically closed when the block exits
       return file.read()

def find_user_in_database(user_id):
   # Placeholder function
   return None if user_id < 0 else {"id": user_id, "name": "User"}

