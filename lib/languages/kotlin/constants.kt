// Top-level constants
const val PI = 3.14159
const val APP_NAME = "MyApp"
const val MAX_RETRIES = 3

// Constants in a companion object (similar to static fields)
class MathConstants {
   companion object {
       const val E = 2.71828
       const val GOLDEN_RATIO = 1.61803
   }
}

// Using constants
fun circleArea(radius: Double): Double {
   return PI * radius * radius
}

fun exponential(x: Double): Double {
   return kotlin.math.pow(MathConstants.E, x)
}

// Enum constants
enum class Direction {
   NORTH, EAST, SOUTH, WEST
}

// Enum with properties and methods
enum class HttpStatus(val code: Int) {
   OK(200),
   NOT_FOUND(404),
   SERVER_ERROR(500);

   fun isSuccess(): Boolean = code in 200..299
}

// Sealed class (limited hierarchy)
sealed class Result {
   object Success : Result()
   data class Error(val message: String) : Result()
   object Loading : Result()
}

// Object declaration (singleton)
object DatabaseConfig {
   const val URL = "jdbc:mysql://localhost:3306/mydb"
   const val USERNAME = "user"
   const val PASSWORD = "password"
}

