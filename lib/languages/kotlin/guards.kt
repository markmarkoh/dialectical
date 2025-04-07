// Early returns as guards
fun processPositiveNumber(num: Int): String {
   // Guard clause for invalid input
   if (num <= 0) {
       return "Number must be positive"
   }
   
   // Main logic (only executed if guard passes)
   return "Processed number: $num"
}

// Multiple guard clauses
fun validateUser(username: String, password: String): String {
   // Guard: Check if username is empty
   if (username.isEmpty()) {
       return "Username cannot be empty"
   }
   
   // Guard: Check if username is too short
   if (username.length < 3) {
       return "Username must be at least 3 characters"
   }
   
   // Guard: Check if password is empty
   if (password.isEmpty()) {
       return "Password cannot be empty"
   }
   
   // Guard: Check if password is too short
   if (password.length < 8) {
       return "Password must be at least 8 characters"
   }
   
   // If all guards pass, the user is valid
   return "User is valid"
}

// Using require for preconditions
fun divide(a: Int, b: Int): Int {
   require(b != 0) { "Cannot divide by zero" }
   return a / b
}

// Using check for invariants
fun processArray(array: IntArray): Int {
   check(array.isNotEmpty()) { "Array cannot be empty" }
   return array.sum()
}

// Using assert for debugging
fun calculateArea(width: Int, height: Int): Int {
   assert(width > 0) { "Width must be positive" }
   assert(height > 0) { "Height must be positive" }
   return width * height
}

// Using Elvis operator as a guard
fun getLength(text: String?): Int {
   return text?.length ?: 0
}

// Using let with early return
fun processNonNullValue(value: String?): String {
   value ?: return "Value is null"
   
   // Process non-null value
   return "Processed: ${value.uppercase()}"
}

// Using when as a guard
fun describeNumber(num: Int?): String {
   return when {
       num == null -> "Number is null"
       num < 0 -> "Number is negative"
       num == 0 -> "Number is zero"
       num > 100 -> "Number is large"
       else -> "Number is $num"
   }
}

// Using takeIf as a guard
fun processIfPositive(num: Int): String {
   return num.takeIf { it > 0 }?.toString() ?: "Not positive"
}

