# For loop with range
def count_up(n):
   for i in range(1, n + 1):
       print(i)

# While loop
def count_down(from_num):
   current = from_num
   while current > 0:
       print(current)
       current -= 1

# For loop with list
def sum_array(numbers):
   total = 0
   for num in numbers:
       total += num
   return total

# For loop with enumerate
def print_indexed(items):
   for index, item in enumerate(items):
       print(f"{index}: {item}")

# For loop with zip (multiple iterables)
def pair_items(list1, list2):
   pairs = []
   for item1, item2 in zip(list1, list2):
       pairs.append((item1, item2))
   return pairs

# Break and continue
def find_first_even(numbers):
   for num in numbers:
       if num % 2 == 0:
           return num  # Early return (similar to break)
   return None

def sum_odd_numbers(numbers):
   total = 0
   for num in numbers:
       if num % 2 == 0:
           continue  # Skip even numbers
       total += num
   return total

# Else clause (executes when loop completes without break)
def check_all_positive(numbers):
   for num in numbers:
       if num <= 0:
           print("Found non-positive number")
           break
   else:
       print("All numbers are positive")

# Nested loops
def multiplication_table(n):
   table = []
   for i in range(1, n + 1):
       row = []
       for j in range(1, n + 1):
           row.append(i * j)
       table.append(row)
   return table

# List comprehensions (concise for loops)
def double_all(numbers):
   return [x * 2 for x in numbers]

def only_positive(numbers):
   return [x for x in numbers if x > 0]

# Dictionary comprehensions
def square_dict(numbers):
   return {x: x*x for x in numbers}

# Generator expressions (lazy evaluation)
def sum_of_squares(n):
   return sum(x*x for x in range(1, n+1))

# Infinite loop with break
def prompt_until_valid():
   while True:
       value = input("Enter a value: ")
       if value:
           return value

