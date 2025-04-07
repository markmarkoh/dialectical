// Generic function
fun <T> identity(value: T): T {
   return value
}

// Using a generic function
val stringResult: String = identity("hello")
val intResult: Int = identity(42)

// Generic class
class Box<T>(var value: T) {
   fun getValue(): T {
       return value
   }
   
   fun setValue(newValue: T) {
       value = newValue
   }
}

// Using a generic class
val stringBox = Box("hello")
val intBox = Box(42)

// Multiple type parameters
class Pair<A, B>(val first: A, val second: B)

// Type constraints
fun <T : Comparable<T>> findMax(list: List<T>): T? {
   if (list.isEmpty()) return null
   var max = list[0]
   for (item in list.drop(1)) {
       if (item > max) max = item
   }
   return max
}

// Multiple constraints with where clause
fun <T> copyWhenGreater(list: List<T>, threshold: T): List<String>
       where T : CharSequence,
             T : Comparable<T> {
   return list.filter { it > threshold }.map { it.toString() }
}

// Type projection (covariance)
fun copyStrings(from: Array<out String>, to: Array<in String>) {
   // 'out' makes 'from' covariant (producer)
   // 'in' makes 'to' contravariant (consumer)
}

// Star projection
fun printList(list: List<*>) {
   list.forEach { println(it) }
}

// Reified type parameters (with inline)
inline fun <reified T> isA(value: Any): Boolean {
   return value is T
}

// Generic extension function
fun <T> T.toBox(): Box<T> {
   return Box(this)
}

// Type erasure workaround with reified
inline fun <reified T> List<*>.filterIsInstance(): List<T> {
   val result = mutableListOf<T>()
   for (element in this) {
       if (element is T) {
           result.add(element)
       }
   }
   return result
}

