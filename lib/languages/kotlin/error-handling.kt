// Basic try-catch
fun divide(a: Int, b: Int): Int {
   try {
       return a / b
   } catch (e: ArithmeticException) {
       println("Cannot divide by zero")
       return 0
   }
}

// Multiple catch blocks
fun parseData(data: String): Int {
   try {
       val number = data.toInt()
       return number
   } catch (e: NumberFormatException) {
       println("Invalid number format: ${e.message}")
       return 0
   } catch (e: Exception) {
       println("Unknown error: ${e.message}")
       return -1
   }
}

// Try-catch-finally
fun readFile(path: String): String {
   val reader = java.io.BufferedReader(java.io.FileReader(path))
   try {
       return reader.readLine()
   } catch (e: java.io.IOException) {
       println("Error reading file: ${e.message}")
       return ""
   } finally {
       try {
           reader.close()
       } catch (e: java.io.IOException) {
           println("Error closing reader: ${e.message}")
       }
   }
}

// Try as an expression
fun parseNumber(str: String): Int {
   val parsedNumber = try {
       str.toInt()
   } catch (e: NumberFormatException) {
       0
   }
   return parsedNumber
}

// Throwing exceptions
fun validateAge(age: Int) {
   if (age < 0) {
       throw IllegalArgumentException("Age cannot be negative")
   }
   if (age > 150) {
       throw IllegalArgumentException("Age is unrealistically high")
   }
}

// Custom exception
class UserNotFoundException(message: String) : Exception(message)

// Simple User class for example
class User(val id: String, val name: String)

fun findUser(id: String): User {
   // Example user lookup
   if (id == "1") {
       return User("1", "Alice")
   } else {
       throw UserNotFoundException("User with ID $id not found")
   }
}

// Using runCatching for functional error handling
fun divideWithRunCatching(a: Int, b: Int): Int {
   val divisionResult = runCatching {
       a / b
   }.getOrDefault(0)
   return divisionResult
}

// Mapping Result
fun processStringToInt(input: String): Int {
   val processedResult = runCatching {
       input.toInt()
   }.map { number ->
       number * 2
   }.getOrElse { ex ->
       when (ex) {
           is NumberFormatException -> 0
           else -> -1
       }
   }
   return processedResult
}

// Using Result for functional error handling
fun computeValue(input: String): kotlin.Result<Int> {
   return runCatching {
       val number = input.toInt()
       number * 2
   }
}

// Using require, check, and assert
fun processValue(num: Int): Int {
   require(num > 0) { "Value must be positive" }
   check(num != 42) { "Value cannot be 42" }
   assert(num < 1000) { "Value should be less than 1000" }
   return num * 2
}

