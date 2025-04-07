// Lambda expression (anonymous function)
val sum = { a: Int, b: Int -> a + b }
val result = sum(5, 3)  // 8

// Lambda with inferred parameter types
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }  // [2, 4, 6, 8, 10]

// Lambda with multiple statements
val process = { x: Int ->
   val squared = x * x
   squared + 1
}

// Anonymous function syntax
val subtract = fun(a: Int, b: Int): Int {
   return a - b
}

// Passing lambda as the last parameter
fun processItems(items: List<Int>, processor: (Int) -> Int): List<Int> {
   return items.map(processor)
}

val processed = processItems(numbers) { it * it }

// Capturing variables from outer scope (closure)
fun makeCounter(): () -> Int {
   var count = 0
   return { count++ }
}

val counter = makeCounter()
println(counter())  // 0
println(counter())  // 1

// Using 'it' for single parameter
val lengths = listOf("a", "ab", "abc").map { it.length }  // [1, 2, 3]

// Destructuring in lambdas
val pairs = listOf(Pair(1, "one"), Pair(2, "two"))
pairs.forEach { (number, name) ->
   println("$number = $name")
}

// Lambda with receiver
val html = buildString {
   append("<html>")
   append("<body>")
   append("</body>")
   append("</html>")
}

// Higher-order function with lambda
inline fun transaction(block: () -> Unit) {
   println("Beginning transaction")
   try {
       block()
       println("Committing transaction")
   } catch (e: Exception) {
       println("Rolling back transaction")
       throw e
   }
}

// Using the higher-order function
transaction {
   println("Doing database operations")
}

