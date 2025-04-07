// Variable declaration with val (immutable)
val name = "Alice"  // Type inferred as String
val age: Int = 30   // Explicit type

// Variable declaration with var (mutable)
var counter = 0
counter++  // OK, counter is mutable

// Reassignment
// name = "Bob"  // Error: val cannot be reassigned
counter = 42      // OK, var can be reassigned

// Destructuring assignment
val (x, y) = Pair(1, 2)
val (key, value) = "key" to "value"

// Destructuring from data classes
data class Person(val name: String, val age: Int)
val person = Person("Alice", 30)
val (personName, personAge) = person

// Destructuring in lambda parameters
val map = mapOf("a" to 1, "b" to 2)
map.forEach { (k, v) -> println("$k -> $v") }

// Late initialization
lateinit var lateString: String
// Use lateString later after initialization

// Lazy initialization
val lazyValue: String by lazy {
   println("Computed!")
   "Hello"
}
// lazyValue is computed on first access

// Delegated properties
import kotlin.properties.Delegates
var observed: Int by Delegates.observable(0) { _, old, new ->
   println("Changed from $old to $new")
}

