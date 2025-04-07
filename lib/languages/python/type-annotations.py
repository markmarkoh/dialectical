# Basic type annotations (Python 3.5+)
name: str = "Alice"
age: int = 30
height: float = 1.75
is_active: bool = True

# Function type annotations
def greet(name: str) -> str:
   return f"Hello, {name}"

# Optional types
from typing import Optional
def find_user(user_id: int) -> Optional[dict]:
   if user_id == 0:
       return None
   return {"id": user_id, "name": "User"}

# Union types
from typing import Union
def process(value: Union[int, str]) -> str:
   return str(value)

# Type aliases
from typing import List, Dict
UserId = int
UserName = str
Users = Dict[UserId, UserName]

# Generic types
from typing import TypeVar, Generic, List
T = TypeVar('T')

class Stack(Generic[T]):
   def __init__(self) -> None:
       self.items: List[T] = []
   
   def push(self, item: T) -> None:
       self.items.append(item)
   
   def pop(self) -> T:
       return self.items.pop()

# Using the generic class
int_stack: Stack[int] = Stack()
str_stack: Stack[str] = Stack()

