# Basic if/else
def check_number(x):
   if x > 0:
       return "Positive"
   elif x < 0:
       return "Negative"
   else:
       return "Zero"

# Conditional expression (ternary operator)
is_admin = True  # Example variable
message = "Welcome, admin!" if is_admin else "Welcome, user!"

# If without else
def maybe_log(message, verbose):
   if verbose:
       print(message)

# Nested conditions
def process_data(data):
   if data is not None:
       if len(data) > 0:
           return f"Valid data: {data}"
       else:
           return "Empty data"
   else:
       return "No data"

# Logical operators in conditions
def validate_user(user):
   if user and hasattr(user, 'is_active') and user.is_active and user.age >= 18:
       return True
   return False

# Checking multiple conditions
def classify_temperature(temp):
   if temp < 0:
       return "Freezing"
   elif temp < 10:
       return "Cold"
   elif temp < 20:
       return "Cool"
   elif temp < 30:
       return "Warm"
   else:
       return "Hot"

# Truthy and falsy values
def process_value(value):
   if value:  # Checks if value is truthy
       return "Value is truthy"
   else:
       return "Value is falsy"

# Falsy values: None, False, 0, "", [], {}, set()
# Everything else is truthy

