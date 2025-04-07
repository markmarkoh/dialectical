// Basic import
import kotlin.math.sqrt

// Import with alias
import kotlin.collections.List as KtList

// Import specific functions
import kotlin.io.println
import kotlin.random.Random.nextInt

// Import all from a package
import kotlin.math.*

// Import extension functions
import kotlin.collections.forEach

// Using imports
fun example() {
   val root = sqrt(16.0)  // 4.0
   val numbers: KtList<Int> = listOf(1, 2, 3)
   println("Hello, Kotlin!")
   val randomNumber = nextInt(1, 100)
   
   // Using imported extension function
   numbers.forEach { println(it) }
}

