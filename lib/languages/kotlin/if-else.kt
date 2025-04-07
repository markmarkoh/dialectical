// Basic if/else
fun checkNumber(x: Int): String {
   if (x > 0) {
       return "Positive"
   } else if (x < 0) {
       return "Negative"
   } else {
       return "Zero"
   }
}

// Ternary operator (expression form of if/else)
val isAdmin = true // Example variable
val message = if (isAdmin) {
   "Welcome, admin!"
} else {
   "Welcome, user!"
}

// If with multiple statements in blocks
val x = 5 // Example variable
val result = if (x > 0) {
   println("Positive number")
   "Positive"
} else {
   println("Non-positive number")
   "Non-positive"
}

// If with no else (returns Unit implicitly)
fun maybeLog(message: String, verbose: Boolean) {
   if (verbose) {
       println(message)
   }
}

// Nested conditions
fun processData(data: String?): String {
   if (data != null) {
       if (data.length > 0) {
           return "Valid data: $data"
       } else {
           return "Empty data"
       }
   } else {
       return "No data"
   }
}

// Logical operators in conditions
fun validateUser(user: User?): Boolean {
   if (user != null && user.isActive && user.age >= 18) {
       return true
   }
   return false
}

// Using when as an alternative to if/else chains
fun classifyTemperature(temp: Int): String {
   return when {
       temp < 0 -> "Freezing"
       temp < 10 -> "Cold"
       temp < 20 -> "Cool"
       temp < 30 -> "Warm"
       else -> "Hot"
   }
}

// Elvis operator for null checks
fun getLength(text: String?): Int {
   return text?.length ?: 0
}

// Safe calls with let
fun processNonEmptyString(text: String?): String {
   return text?.let {
       if (it.isNotEmpty()) {
           "Processing: $it"
       } else {
           "Empty string"
       }
   } ?: "Null string"
}

// Example User class
class User(val name: String, val age: Int, val isActive: Boolean = true)

