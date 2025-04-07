# Variable assignment
name = "Alice"
age = 30

# Multiple assignment
x, y = 1, 2
# Or from sequences
first, second = [1, 2]
first, *rest = [1, 2, 3, 4]  # first=1, rest=[2, 3, 4]

# Augmented assignment
count = 0
count += 1  # count = count + 1

# Unpacking dictionaries
person = {"name": "Alice", "age": 30}
name = person["name"]
# Or with get (provides default)
age = person.get("age", 0)

# Assignment expressions (Python 3.8+)
if (n := len(data)) > 10:
   print(f"Processing {n} items")

# Variables are references
a = [1, 2, 3]
b = a  # b references the same list as a
b.append(4)  # a is now [1, 2, 3, 4] too

# Creating a copy
c = a.copy()  # or c = a[:]
c.append(5)  # a is still [1, 2, 3, 4]

