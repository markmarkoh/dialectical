// Pattern matching with 'when' expression
fun describe(obj: Any): String {
   return when (obj) {
       // Match against constants
       1 -> "One"
       "Hello" -> "Greeting"
       is Long -> "Long number: $obj"
       !is String -> "Not a string"
       // Match against ranges
       in 1..10 -> "Number between 1 and 10"
       in listOf("a", "b", "c") -> "Letter a, b, or c"
       // Match with conditions
       is String -> if (obj.startsWith("A")) "String starting with A" else "Some other string"
       // Default case
       else -> "Unknown"
   }
}

// Destructuring in when
fun processCoordinate(point: Pair<Int, Int>): String {
   return when {
       val point = point // Added to declare point
       point.first == 0 && point.second == 0 -> "Origin"
       point.first == 0 -> "On Y-axis"
       point.second == 0 -> "On X-axis"
       else -> "Point at ${point.first}, ${point.second}"
   }
}

// Smart casting with is
fun process(obj: Any) {
   when (obj) {
       is String -> println("Length is ${obj.length}")  // obj is smart cast to String
       is Int -> println("Value plus one is ${obj + 1}")  // obj is smart cast to Int
       is List<*> -> println("List size is ${obj.size}")  // obj is smart cast to List
   }
}

// Sealed class with when
sealed class Result {
   data class Success(val data: String) : Result()
   data class Error(val message: String) : Result()
   object Loading : Result()
}

fun handleResult(result: Result): String {
   return when (result) {
       is Result.Success -> "Success: ${result.data}"
       is Result.Error -> "Error: ${result.message}"
       Result.Loading -> "Loading..."
       // No else needed - compiler knows all cases are covered
   }
}

// Destructuring declarations
data class Person(val name: String, val age: Int)

fun processPerson(person: Person) {
   val name = person.name
   val age = person.age
   println("Name: $name, Age: $age")
}

// Using properties in for loops
val people = listOf(
   Person("Alice", 29),
   Person("Bob", 31)
)

for (person in people) {
   println("${person.name} is ${person.age} years old")
}

// Using properties in lambda parameters
people.forEach { person ->
   println("${person.name} is ${person.age} years old")
}

