# Python's approach to generics (Python 3.5+)
from typing import TypeVar, Generic, List, Dict, Optional

# Define a type variable
T = TypeVar('T')
K = TypeVar('K')
V = TypeVar('V')

# Generic function
def first(items: List[T]) -> Optional[T]:
   return items[0] if items else None

# Using the generic function
names = ["Alice", "Bob", "Charlie"]
first_name = first(names)  # Type: Optional[str]

numbers = [1, 2, 3]
first_number = first(numbers)  # Type: Optional[int]

# Generic class
class Box(Generic[T]):
   def __init__(self, value: T) -> None:
       self.value = value
   
   def get(self) -> T:
       return self.value
   
   def set(self, value: T) -> None:
       self.value = value

# Using the generic class
int_box = Box[int](42)
str_box = Box[str]("Hello")

# Multiple type parameters
class Mapping(Generic[K, V]):
   def __init__(self) -> None:
       self.items: Dict[K, V] = {}
   
   def set(self, key: K, value: V) -> None:
       self.items[key] = value
   
   def get(self, key: K) -> Optional[V]:
       return self.items.get(key)

# Using the generic mapping
user_scores = Mapping[str, int]()
user_scores.set("Alice", 95)

# Bounded type variables
S = TypeVar('S', bound='Sized')

def get_length(obj: S) -> int:
   return len(obj)

# Constrained type variables
Number = TypeVar('Number', int, float)

def double(x: Number) -> Number:
   return x * 2

