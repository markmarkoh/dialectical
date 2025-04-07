# Memory management in Nim is handled by several mechanisms

# 1. Garbage Collection (default)
proc gcExample() =
  # Memory is automatically allocated and managed by the GC
  var list = @[1, 2, 3, 4, 5]
  var dict = {"key1": "value1", "key2": "value2"}.toTable()
  
  # When variables go out of scope, the GC will eventually reclaim the memory
  # No explicit deallocation needed

# 2. Manual memory management with new/delete
proc manualExample() =
  # Allocate memory manually
  var intPtr = new(int)
  intPtr[] = 42
  
  # For non-GC'd objects, we would need to free manually
  # (though new() actually uses the GC in Nim)
  # delete(intPtr)  # Not needed with GC

# 3. Custom allocators
import std/[memalloc, allocators]

proc allocatorExample() =
  # Create a region allocator
  var region = createSharedRegion()
  defer: region.deallocShared()
  
  # Allocate memory from the region
  let buffer = region.allocShared0(1024)
  
  # Use the memory
  var data = cast[ptr array[1024, byte]](buffer)
  data[0] = 65  # ASCII 'A'
  
  # Memory is freed when the region is deallocated (via defer)

# 4. Reference counting for specific types
import std/[rc, isolation]

proc refCountingExample() =
  # Ref counting with Rc
  var sharedData = Rc[string].new("Shared data")
  block:
    var ref2 = sharedData
    echo ref2[]  # Reference count is 2
  # ref2 is destroyed, reference count decreases to 1
  
  # Isolation for moving objects between threads
  var iso = isolate("Isolated data")
  # iso can be sent to another thread

# 5. Custom destructors with =destroy hook
type
  Resource = object
    handle: int

proc `=destroy`(r: var Resource) =
  # Custom destructor called automatically when object goes out of scope
  if r.handle != 0:
    echo "Cleaning up resource: ", r.handle
    r.handle = 0

proc destructorExample() =
  var res = Resource(handle: 42)
  # When res goes out of scope, =destroy is called automatically

# 6. Move semantics with sink operator
proc `=sink`(dest: var Resource, source: Resource) =
  # Clean up destination if needed
  `=destroy`(dest)
  # Move the resource
  dest.handle = source.handle

proc moveExample() =
  var res1 = Resource(handle: 42)
  var res2 = Resource(handle: 0)
  
  # Move res1 to res2
  res2 = res1  # Uses =sink
  # res1's handle is now 0, res2's handle is 42

# 7. Different GC strategies
proc configureGC() =
  # Nim supports different GC strategies:
  # - Deferred Reference Counting with cycle collection (default)
  # - Boehm GC
  # - Mark and Sweep
  # - Go-like GC
  # - No GC (manual memory management)
  
  # Set GC strategy at compile time with:
  # --gc:refc (default)
  # --gc:arc (Automatic Reference Counting)
  # --gc:orc (Cycle-detecting ARC)
  # --gc:markAndSweep
  # --gc:boehm
  # --gc:go
  # --gc:none

when isMainModule:
  gcExample()
  manualExample()
  allocatorExample()
  refCountingExample()
  destructorExample()
  moveExample()

