// Type checking examples
val name: String = "Alice"
// val name: String = 42  // Compile error

// Function with type annotations
fun process(value: Int): String {
   return value.toString()
}

// Calling with wrong type
// process("hello")  // Compile error

// Smart casting
fun checkValue(value: Any) {
   if (value is String) {
       // value is automatically cast to String in this scope
       println("String length: ${value.length}")
   } else if (value is Int) {
       // value is automatically cast to Int in this scope
       println("Integer value: ${value + 1}")
   }
}

// Safe casting
val obj: Any = "Hello"
val str: String? = obj as? String  // Safe cast, returns null if cast fails

// Type checking with when
fun describe(value: Any): String {
   return when (value) {
       is String -> "It's a string of length ${value.length}"
       is Int -> "It's an integer: $value"
       is Boolean -> "It's a boolean: $value"
       else -> "Unknown type"
   }
}

