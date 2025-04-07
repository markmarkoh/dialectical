# Basic procedure arguments
proc add(a, b: int): int =
  a + b

# Multiple parameters of the same type
proc multiply(a, b: int): int =
  a * b

# Named arguments
proc createPerson(name: string, age: int): tuple[name: string, age: int] =
  (name: name, age: age)

# Default parameters
proc greet(name: string, greeting = "Hello"): string =
  greeting & ", " & name & "!"

# Var parameters (pass by reference)
proc increment(x: var int) =
  x += 1

# Varargs (variable number of arguments)
proc sum(numbers: varargs[int]): int =
  result = 0
  for n in numbers:
    result += n

# Open arrays (array of unspecified length)
proc average(numbers: openArray[int]): float =
  var total = 0
  for n in numbers:
    total += n
  result = total / numbers.len

# Procedure parameters
proc apply(f: proc(x: int): int, x: int): int =
  f(x)

proc double(x: int): int =
  x * 2

# Generic parameters
proc first[T](arr: openArray[T]): T =
  arr[0]

# Parameter unpacking with tuples
proc processPoint(point: tuple[x, y: int]): int =
  point.x + point.y

# Parameter unpacking with objects
type
  Person = object
    name: string
    age: int

proc describe(p: Person): string =
  p.name & " is " & $p.age & " years old"

# Static parameters (compile-time)
proc factorial(n: static int): int =
  when n <= 1:
    1
  else:
    n * factorial(n-1)

when isMainModule:
  echo "add(5, 3): ", add(5, 3)
  echo "multiply(4, 7): ", multiply(4, 7)
  
  let person = createPerson(name = "Alice", age = 30)
  echo "Person: ", person
  
  echo "greet(\"Bob\"): ", greet("Bob")
  echo "greet(\"Charlie\", \"Hi\"): ", greet("Charlie", "Hi")
  
  var x = 10
  increment(x)
  echo "After increment: ", x
  
  echo "sum(1, 2, 3, 4, 5): ", sum(1, 2, 3, 4, 5)
  
  let numbers = @[1, 2, 3, 4, 5]
  echo "average(numbers): ", average(numbers)
  
  echo "apply(double, 5): ", apply(double, 5)
  
  let mixed = @[10, 20, 30, 40]
  echo "first(mixed): ", first(mixed)
  
  let point = (x: 10, y: 20)
  echo "processPoint(point): ", processPoint(point)
  
  let p = Person(name: "Dave", age: 35)
  echo "describe(p): ", describe(p)
  
  const fact5 = factorial(5)  # Computed at compile time
  echo "factorial(5): ", fact5

