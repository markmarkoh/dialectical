# Python's memory management is based on reference counting with a cycle-detecting garbage collector

# 1. Basic memory allocation
def basic_allocation():
    # Python automatically allocates memory when objects are created
    numbers = [1, 2, 3, 4, 5]  # List allocation
    dictionary = {"key1": "value1", "key2": "value2"}  # Dictionary allocation
    
    # When objects are no longer referenced, they become eligible for garbage collection
    # No explicit deallocation needed

# 2. Reference counting
def reference_counting():
    import sys
    
    # Create an object and check its reference count
    x = []
    print(f"Reference count: {sys.getrefcount(x) - 1}")  # Subtract 1 for the getrefcount parameter
    
    # Create another reference to the same object
    y = x
    print(f"Reference count after assignment: {sys.getrefcount(x) - 1}")
    
    # Remove one reference
    del y
    print(f"Reference count after deletion: {sys.getrefcount(x) - 1}")
    
    # When reference count reaches zero, the object is deallocated

# 3. Cycle detection
def cycle_detection():
    import gc
    
    # Create a reference cycle
    class Node:
        def __init__(self, name):
            self.name = name
            self.next = None
    
    # Create a cycle
    node1 = Node("Node 1")
    node2 = Node("Node 2")
    node1.next = node2
    node2.next = node1
    
    # These objects won't be collected by reference counting alone
    # Python's cycle detector will find and collect them
    
    # Force garbage collection
    gc.collect()
    
    # Control garbage collection
    gc.disable()  # Disable automatic garbage collection
    gc.enable()   # Enable automatic garbage collection

# 4. Memory leaks in Python
def memory_leak_patterns():
    # Common memory leak patterns:
    
    # 1. Large objects in global variables
    global_cache = {}  # This will persist until program termination
    
    # 2. Forgotten closures
    def create_closure():
        large_data = [0] * 1000000  # 1 million integers
        
        def closure():
            # This function captures large_data
            return len(large_data)
        
        return closure
    
    # The returned closure keeps large_data alive
    fn = create_closure()
    
    # 3. Circular references with __del__ methods
    class CircularRef:
        def __init__(self):
            self.data = [0] * 100000
            self.other = None
        
        def __del__(self):
            # Objects with __del__ methods aren't collected by cycle detector in older Python versions
            print("Deleting CircularRef")
    
    c1 = CircularRef()
    c2 = CircularRef()
    c1.other = c2
    c2.other = c1

# 5. Weak references
def weak_references():
    import weakref
    
    class Resource:
        def __init__(self, name):
            self.name = name
        
        def __del__(self):
            print(f"Deleting {self.name}")
    
    # Create an object
    resource = Resource("important_resource")
    
    # Create a weak reference to it
    weak_ref = weakref.ref(resource)
    
    # Access the object through the weak reference
    if weak_ref() is not None:
        print(f"Resource name: {weak_ref().name}")
    
    # When the original reference is gone, the weak reference doesn't keep the object alive
    del resource
    
    # Now the weak reference returns None
    print(f"After deletion: {weak_ref()}")

# 6. Object pools
def object_pooling():
    # Object pools can reduce allocation/deallocation overhead
    class ObjectPool:
        def __init__(self, create_func):
            self.create_func = create_func
            self.pool = []
        
        def get(self):
            if self.pool:
                return self.pool.pop()
            return self.create_func()
        
        def put(self, obj):
            self.pool.append(obj)
    
    # Example usage with a database connection pool
    def create_connection():
        print("Creating new connection")
        return {"connection": "db_connection"}
    
    pool = ObjectPool(create_connection)
    
    # Get a connection
    conn1 = pool.get()  # Creates new connection
    
    # Return it to the pool
    pool.put(conn1)
    
    # Get a connection again (reuses the existing one)
    conn2 = pool.get()  # Reuses connection
    
    print("Is same connection:", conn1 is conn2)  # True

# 7. Memory-efficient data structures
def memory_efficient_structures():
    import array
    import sys
    
    # Regular list of integers
    regular_list = [1, 2, 3, 4, 5] * 1000
    
    # Array module for homogeneous data (more memory efficient)
    array_list = array.array('i', [1, 2, 3, 4, 5] * 1000)
    
    # Compare memory usage
    print(f"Regular list size: {sys.getsizeof(regular_list)} bytes")
    print(f"Array size: {sys.getsizeof(array_list)} bytes")
    
    # Other memory-efficient structures:
    # - collections.deque for efficient appends/pops from both ends
    # - bytearray for mutable byte sequences
    # - memoryview for zero-copy slices

# 8. String interning and memory reuse
def string_interning():
    import sys
    
    # Python interns some strings automatically
    a = "hello"
    b = "hello"
    
    # a and b reference the same string object
    print(f"Same object: {a is b}")
    
    # Force interning
    c = sys.intern("hello" + " world")
    d = sys.intern("hello world")
    
    # c and d reference the same string object
    print(f"Same interned object: {c is d}")

# 9. Memory profiling
def memory_profiling():
    # Using the tracemalloc module (Python 3.4+)
    import tracemalloc
    
    # Start tracking memory allocations
    tracemalloc.start()
    
    # Create some objects
    large_list = [0] * 1000000
    large_dict = {i: i for i in range(100000)}
    
    # Get current memory snapshot
    snapshot = tracemalloc.take_snapshot()
    
    # Get top 10 memory allocations
    top_stats = snapshot.statistics('lineno')
    for stat in top_stats[:10]:
        print(stat)

# 10. Generators for memory efficiency
def generators_example():
    # Using a generator instead of creating a full list
    def range_generator(n):
        i = 0
        while i < n:
            yield i
            i += 1
    
    # This doesn't create a list in memory
    for i in range_generator(1000000):
        # Process i without storing all values in memory
        if i == 500000:
            print("Halfway there!")
            break

if __name__ == "__main__":
    basic_allocation()
    reference_counting()
    cycle_detection()
    weak_references()
    object_pooling()
    memory_efficient_structures()
    string_interning()
    # Uncomment to run memory profiling
    # memory_profiling()
    generators_example()

