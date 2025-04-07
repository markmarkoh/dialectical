// Function block
fun calculate(x: Int): Int {
   // This is a block that returns a value
   val y = x * 2
   val z = y + 1
   return z  // Explicit return required
}

// If expression blocks
fun check(value: Int): String {
   return if (value > 0) {
       "Positive"  // This is returned if condition is true
   } else {
       "Non-positive"  // This is returned if condition is false
   }
}

// When expression blocks
fun describe(value: Int): String {
   return when {
       value == 0 -> "Zero"  // Each branch is an expression
       value > 0 -> "Positive"
       else -> "Negative"
   }
}

// Try-catch as an expression
fun parseInteger(s: String): Int {
   return try {
       s.toInt()
   } catch (e: NumberFormatException) {
       0  // Default value if parsing fails
   }
}

// Lambda expression blocks
val sum = { a: Int, b: Int ->
   val result = a + b
   result  // Last expression is returned
}

// Run block (scope function)
val result = run {
   val a = 1
   val b = 2
   a + b  // Returns 3
}

// Let block (scope function with receiver)
val length = "Hello".let {
   println("Processing: $it")
   it.length  // Returns 5
}

// With block (scope function with receiver)
data class Person(val name: String, val age: Int)
val person = Person("Alice", 30)
val description = with(person) {
   "Name: $name, Age: $age"  // Uses receiver's properties directly
}

// Apply block (scope function that returns receiver)
val list = mutableListOf<String>().apply {
   add("a")
   add("b")
   add("c")
}  // Returns the list

// Also block (scope function that returns receiver)
val numbers = mutableListOf(1, 2, 3).also {
   println("List size: ${it.size}")
}  // Returns the list

