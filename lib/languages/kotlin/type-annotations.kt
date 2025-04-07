// Basic type annotations
val name: String = "Alice"
val age: Int = 30
val height: Double = 1.75
val isActive: Boolean = true

// Function type annotations
fun greet(name: String): String {
   return "Hello, $name!"
}

// Type aliases
typealias UserId = Int
typealias UserName = String

// Generic type aliases
typealias StringList = List<String>
typealias Predicate<T> = (T) -> Boolean

// Function types
val onClick: () -> Unit = { println("Clicked!") }
val transform: (Int) -> String = { it.toString() }
val biFunction: (String, Int) -> Boolean = { s, i -> s.length > i }

// Nullable types
val nullableString: String? = null
val nonNullString: String = "Cannot be null"

// Collection types
val numbers: List<Int> = listOf(1, 2, 3)
val mutableNumbers: MutableList<Int> = mutableListOf(1, 2, 3)
val nameToAge: Map<String, Int> = mapOf("Alice" to 30, "Bob" to 25)

// Array types
val intArray: IntArray = intArrayOf(1, 2, 3)
val stringArray: Array<String> = arrayOf("a", "b", "c")

// Type projections
fun copy(from: Array<out Any>, to: Array<Any>) {
   // 'out' makes 'from' covariant (read-only)
}

// Star projection
fun printAll(list: List<*>) {
   // '*' is like '?' in Java, represents an unknown type
   list.forEach { println(it) }
}

