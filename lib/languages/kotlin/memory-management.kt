// Memory management in Kotlin is handled by the JVM's garbage collector

// Basic memory allocation
fun basicAllocation() {
    // Memory is automatically allocated
    val list = ArrayList<Int>(1000000) // Allocates memory for a list with initial capacity
    
    // Initialize the list
    for (i in 0 until 1000000) {
        list.add(i)
    }
    
    // Memory will be automatically freed by the garbage collector
    // when it's no longer referenced
}

// Stack vs Heap allocation
fun stackVsHeap() {
    // Primitive types are often optimized by the JVM
    val stackInt = 42 // May be allocated on the stack
    
    // Objects are allocated on the heap
    val heapObject = Object() // Allocated on the heap
    
    // The JVM uses escape analysis to optimize allocations,
    // but generally all objects go on the heap initially
}

// Memory leaks can still happen
class MemoryLeakExample {
    // Static references can cause memory leaks
    companion object {
        // This list will never be garbage collected as long as the class is loaded
        private val leakyList = mutableListOf<String>()
        
        fun addToList(item: String) {
            leakyList.add(item)
        }
    }
    
    // Inner classes hold implicit references to their outer class
    inner class Leaky {
        fun doSomething() {
            // This inner class holds a reference to the outer class,
            // preventing it from being garbage collected
        }
    }
    
    // Solution: Use static nested classes instead of inner classes
    class NotLeaky {
        fun doSomething() {
            // This class doesn't hold a reference to the outer class
        }
    }
}

// Weak references to prevent memory leaks
fun weakReferences() {
    // Strong reference - prevents garbage collection
    var strongRef = Object()
    
    // Weak reference - doesn't prevent garbage collection
    val weakRef = WeakReference(strongRef)
    
    // When strongRef is set to null, the object can be garbage collected
    // even though weakRef still points to it
    strongRef = null
    
    // weakRef.get() may return null if the object has been collected
    println("Weak reference is null: ${weakRef.get() == null}")
}

// Soft references for memory-sensitive caching
fun softReferences() {
    // Soft references are cleared at the discretion of the garbage collector,
    // typically in response to memory pressure
    val cache = mutableMapOf<String, SoftReference<ByteArray>>()
    
    // Add a large object to the cache
    val data = ByteArray(1024 * 1024) // 1MB
    cache["key"] = SoftReference(data)
    
    // The garbage collector may clear this reference if memory is needed
    val cachedData = cache["key"]?.get()
}

// Value classes to reduce memory overhead
@JvmInline
value class UserId(val value: Int)

fun valueClasses() {
    // Without value classes, this would create a new object on the heap
    val regularId = UserId(123)
    
    // With @JvmInline, the UserId is compiled to just the underlying Int
    // in most cases, avoiding object allocation
    processUser(regularId)
}

fun processUser(id: UserId) {
    println("Processing user: ${id.value}")
}

// Object pools to reduce GC pressure
object StringPool {
    private val pool = mutableMapOf<String, String>()
    
    fun intern(s: String): String {
        return pool.getOrPut(s) { s }
    }
}

fun objectPooling() {
    // Without pooling, these create two different objects
    val str1 = "Hello, World!"
    val str2 = "Hello, " + "World!"
    
    // With pooling, we can reuse the same object
    val pooled1 = StringPool.intern(str1)
    val pooled2 = StringPool.intern(str2)
    
    println("Same reference: ${pooled1 === pooled2}")
}

// Using arrays for performance-critical code
fun arrays() {
    // ArrayList is more convenient but has more overhead
    val list = ArrayList<Int>(1000)
    
    // IntArray is more efficient for primitive types
    val array = IntArray(1000)
    
    // Fill both
    for (i in 0 until 1000) {
        list.add(i)
        array[i] = i
    }
    
    // IntArray avoids boxing/unboxing overhead
}

// String concatenation efficiency
fun stringEfficiency() {
    // Inefficient: creates multiple intermediate String objects
    var result = ""
    for (i in 1..100) {
        result += i.toString()
    }
    
    // More efficient: StringBuilder
    val builder = StringBuilder()
    for (i in 1..100) {
        builder.append(i)
    }
    val efficientResult = builder.toString()
    
    println("Length: ${efficientResult.length}")
}

// Sequence operations to avoid intermediate collections
fun sequences() {
    val numbers = (1..1000000).toList()
    
    // This creates multiple intermediate collections
    val result1 = numbers
        .filter { it % 2 == 0 }
        .map { it * 2 }
        .take(10)
    
    // This uses sequences to avoid intermediate collections
    val result2 = numbers.asSequence()
        .filter { it % 2 == 0 }
        .map { it * 2 }
        .take(10)
        .toList()
    
    println("Results equal: ${result1 == result2}")
}

// Main function to demonstrate memory management
fun main() {
    basicAllocation()
    stackVsHeap()
    weakReferences()
    softReferences()
    valueClasses()
    objectPooling()
    arrays()
    stringEfficiency()
    sequences()
}

