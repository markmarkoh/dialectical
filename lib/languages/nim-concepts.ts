import { gleamConcepts } from "./gleam-concepts"

// Create implementations for all concepts
const nimImplementations: Record<string, { code: string; notes: string }> = {}

// Modules
nimImplementations["modules"] = {
  code: `# File: math.nim
# Public procedures are exported with *
proc add*(a, b: int): int =
  a + b

proc subtract*(a, b: int): int =
  a - b

# Private procedure (not exported)
proc square(x: int): int =
  x * x

# Alternatively, use explicit export statement
proc multiply(a, b: int): int =
  a * b

export multiply

# File: main.nim
import math

proc main() =
  let result = math.add(5, 3)  # 8
  # math.square(4)  # Error: square is private
  let product = math.multiply(4, 5)  # 20

when isMainModule:
  main()`,
  notes:
    "Nim organizes code into modules with files. Public procedures are marked with an asterisk (*) or explicitly exported with the export statement. This provides clear visibility control while keeping the syntax clean.",
}

// Imports
nimImplementations["imports"] = {
  code: `# Basic import
import math

# Import with alias
import strutils as str

# Import specific symbols
from os import getCurrentDir, fileExists

# Import all symbols into current namespace
from sequtils import nil  # Don't import symbols
from algorithm import all  # Import all symbols

# Using imports
proc example() =
  let sum = math.sqrt(16.0)  # 4.0
  let upper = str.toUpperAscii("hello")  # "HELLO"
  let dir = getCurrentDir()  # Current directory
  let exists = fileExists("example.txt")  # Check if file exists
  
  # Using qualified access
  let doubled = sequtils.map(@[1, 2, 3], proc(x: int): int = x * 2)
  
  # Using unqualified access (from algorithm import all)
  let sorted = sorted(@[3, 1, 2])

when isMainModule:
  example()`,
  notes:
    "Nim offers a flexible import system with various styles including basic imports, aliased imports, selective imports, and qualified/unqualified access. This gives developers fine-grained control over how they use external code.",
}

// Memory Management
nimImplementations["memory-management"] = {
  code: `# Memory management in Nim

# Nim uses a garbage collector by default, but offers multiple memory management options

# 1. Default garbage collection
proc defaultGarbageCollection() =
  # Memory is automatically allocated and freed by the garbage collector
  var data = @[1, 2, 3, 4, 5]
  # When data goes out of scope, the garbage collector will eventually free it

# 2. Reference counting (--gc:arc or --gc:orc)
# ARC = Atomic Reference Counting
# ORC = Optimized Reference Counting with cycle detection
proc referenceCountingGC() =
  # With ARC/ORC, memory is freed immediately when the reference count reaches zero
  var data = @[1, 2, 3, 4, 5]
  # When data goes out of scope, memory is freed immediately

# 3. Manual memory management
proc manualMemoryManagement() =
  # Allocate memory manually
  var data = alloc(100 * sizeof(int))
  # Must free memory manually
  dealloc(data)

# 4. Custom allocators
type
  MyAllocator = object
    # Custom allocator fields

proc customAllocator() =
  var allocator: MyAllocator
  # Use custom allocator for memory management
  var data = allocator.alloc(100 * sizeof(int))
  # Must free memory using the same allocator
  allocator.dealloc(data)

# 5. Region-based memory management
proc regionBasedMemory() =
  # Create a memory region
  var region = createRegion()
  # Allocate memory in the region
  var data = region.alloc(100 * sizeof(int))
  # Free the entire region at once
  region.destroy()

# 6. Move semantics and ownership
proc moveSemantics() =
  var a = @[1, 2, 3]
  var b = move(a)  # Transfer ownership from a to b
  # a is now empty, b owns the data

# 7. Preventing memory leaks with destructors
type
  Resource = object
    data: pointer

proc \`=destroy\`(r: var Resource) =
  # Custom destructor called automatically when object goes out of scope
  if r.data != nil:
    dealloc(r.data)
    r.data = nil

proc destructors() =
  var resource = Resource(data: alloc(1000))
  # When resource goes out of scope, =destroy is called automatically

# 8. Weak references to prevent reference cycles
type
  Node = ref object
    next: Node
    weakRef: WeakRef[Node]  # Doesn't prevent garbage collection

proc weakReferences() =
  var node1 = new(Node)
  var node2 = new(Node)
  # Create a cycle with a weak reference
  node1.next = node2
  node2.weakRef = newWeakRef(node1)  # Doesn't prevent node1 from being collected

# 9. Controlling GC behavior
proc controlGC() =
  # Disable garbage collection temporarily
  GC_disable()
  # Perform memory-intensive operations
  # ...
  # Re-enable garbage collection
  GC_enable()
  # Force garbage collection
  GC_fullCollect()

when isMainModule:
  defaultGarbageCollection()
  referenceCountingGC()
  manualMemoryManagement()
  customAllocator()
  regionBasedMemory()
  moveSemantics()
  destructors()
  weakReferences()
  controlGC()`,
  notes:
    "Nim offers multiple memory management options. By default, it uses garbage collection, but it also supports reference counting (ARC/ORC), manual memory management, custom allocators, and region-based memory management. Nim provides fine-grained control over memory with features like destructors, move semantics, and weak references. This flexibility allows developers to choose the appropriate memory management strategy for their specific needs, from high-level garbage collection to low-level manual control.",
}

// Add more implementations for other concepts...

// For concepts without specific implementations, create default ones
for (const concept of gleamConcepts) {
  if (!nimImplementations[concept.id]) {
    nimImplementations[concept.id] = {
      code: `# Example of ${concept.id} in Nim (placeholder)`,
      notes: `Example of ${concept.id} in Nim.`,
    }
  }
}

// Export the implementations
export { nimImplementations }

