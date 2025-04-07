// Basic function arguments
fun add(a: Int, b: Int): Int {
   return a + b
}

// Default parameter values
fun greet(name: String, greeting: String = "Hello"): String {
   return "$greeting, $name!"
}

// Named arguments
fun createUser(name: String, age: Int, email: String) {
   println("Creating user: $name, $age, $email")
}
// Call with named arguments
// createUser(email = "alice@example.com", name = "Alice", age = 30)

// Variable number of arguments (varargs)
fun sum(vararg numbers: Int): Int {
   return numbers.sum()
}
// Call with individual arguments
// sum(1, 2, 3, 4, 5)
// Call with array using spread operator
// val array = intArrayOf(1, 2, 3)
// sum(*array)

// Nullable parameters
fun processNullable(text: String?): Int {
   return text?.length ?: 0
}

// Function type parameters
fun applyOperation(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
   return operation(a, b)
}
// Call with lambda
// applyOperation(5, 3, { x, y -> x + y })
// Call with trailing lambda syntax
// applyOperation(5, 3) { x, y -> x + y }

// Extension function parameters
fun <T> T.applyIf(condition: Boolean, block: T.() -> T): T {
   return if (condition) block() else this
}
// Usage
// val text = "hello".applyIf(true) { toUpperCase() }

// Destructuring parameters
fun processPoint(point: Pair<Int, Int>): Int {
   val (x, y) = point
   return x + y
}

// Inline class parameter (wrapper without runtime overhead)
@JvmInline
value class UserId(val value: Int)

fun processUser(userId: UserId) {
   println("Processing user: ${userId.value}")
}

// Reified type parameters (with inline)
inline fun <reified T> isType(value: Any): Boolean {
   return value is T
}

