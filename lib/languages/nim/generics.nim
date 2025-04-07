# Generic procedure
proc identity[T](x: T): T =
  x

# Using a generic procedure
let intValue = identity(42)
let stringValue = identity("hello")

# Generic type
type
  Box[T] = object
    value: T

# Using a generic type
let intBox = Box[int](value: 42)
let stringBox = Box[string](value: "hello")

# Generic procedure with multiple type parameters
proc pair[A, B](first: A, second: B): tuple[first: A, second: B] =
  (first: first, second: second)

# Generic data structure (linked list)
type
  Node[T] = ref object
    value: T
    next: Node[T]

  LinkedList[T] = object
    head: Node[T]
    len: int

# Procedures for the generic data structure
proc newLinkedList[T](): LinkedList[T] =
  LinkedList[T](head: nil, len: 0)

proc add[T](list: var LinkedList[T], value: T) =
  let node = Node[T](value: value, next: list.head)
  list.head = node
  inc(list.len)

proc len[T](list: LinkedList[T]): int =
  list.len

iterator items[T](list: LinkedList[T]): T =
  var current = list.head
  while current != nil:
    yield current.value
    current = current.next

# Generic procedure with type constraint
proc min[T: SomeNumber](a, b: T): T =
  if a < b: a else b

# Concept-based constraints (Nim 1.4+)
type
  Comparable = concept x, y
    (x < y) is bool

proc maximum[T: Comparable](a, b: T): T =
  if a > b: a else b

# Generic procedure with varargs
proc join[T](values: varargs[T], separator = ", "): string =
  result = ""
  for i, value in values:
    if i > 0:
      result.add(separator)
    result.add($value)

when isMainModule:
  echo "identity(42): ", intValue
  echo "identity(\"hello\"): ", stringValue
  
  echo "intBox: ", intBox
  echo "stringBox: ", stringBox
  
  let p = pair(42, "answer")
  echo "pair: ", p
  
  var list = newLinkedList[int]()
  list.add(1)
  list.add(2)
  list.add(3)
  
  echo "List length: ", list.len
  echo "List items: "
  for item in list:
    echo item
  
  echo "min(5, 10): ", min(5, 10)
  echo "min(3.14, 2.71): ", min(3.14, 2.71)
  
  echo "maximum(\"apple\", \"banana\"): ", maximum("apple", "banana")
  
  echo "join(1, 2, 3): ", join(1, 2, 3)
  echo "join(\"a\", \"b\", \"c\", separator=\"-\"): ", join(["a", "b", "c"], separator="-")

