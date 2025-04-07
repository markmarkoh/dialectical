// Basic function
fun add(a: Int, b: Int): Int {
   return a + b
}

// Single-expression function
fun multiply(a: Int, b: Int): Int = a * b

// Function with default parameters
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

// Extension function
fun String.addExclamation(): String {
   return this + "!"
}

// Higher-order function (takes function as parameter)
fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
   return operation(a, b)
}

// Infix function
infix fun Int.plus(other: Int): Int {
   return this + other
}

// Operator overloading
data class Point(val x: Int, val y: Int)

operator fun Point.plus(other: Point): Point {
   return Point(x + other.x, y + other.y)
}

// Local function (function inside function)
fun processData(data: List<Int>): List<Int> {
   fun isValid(num: Int): Boolean {
       return num > 0
   }
   
   return data.filter { isValid(it) }
}

// Inline function
inline fun measureTime(block: () -> Unit): Long {
   val start = System.currentTimeMillis()
   block()
   return System.currentTimeMillis() - start
}

// Suspend function (for coroutines)
suspend fun fetchData(): String {
   // Simulates network request
   kotlinx.coroutines.delay(1000)
   return "Data"
}

