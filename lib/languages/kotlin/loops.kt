// For loop with range
for (i in 1..5) {
       println(i)  // Prints 1, 2, 3, 4, 5
   }

   // For loop with until (exclusive upper bound)
   for (i in 1 until 5) {
       println(i)  // Prints 1, 2, 3, 4
   }

   // For loop with step
   for (i in 1..10 step 2) {
       println(i)  // Prints 1, 3, 5, 7, 9
   }

   // For loop with downTo
   for (i in 5 downTo 1) {
       println(i)  // Prints 5, 4, 3, 2, 1
   }

   // For loop over collection
   val fruits = listOf("apple", "banana", "cherry")
   for (fruit in fruits) {
       println(fruit)
   }

   // For loop with index
   for (i in fruits.indices) {
       println("$i: ${fruits[i]}")
   }

   // For loop with index and value using withIndex
   for (indexedValue in fruits.withIndex()) {
       val i = indexedValue.index
       val fruit = indexedValue.value
       println("$i: $fruit")
   }

   // While loop
   var counter = 0
   while (counter < 5) {
       println(counter)
       counter++
   }

   // Do-while loop
   var number = 10
   do {
       println(number)
       number--
   } while (number > 0)

   // Break statement
   for (i in 1..10) {
       if (i == 5) break
       println(i)  // Prints 1, 2, 3, 4
   }

   // Continue statement
   for (i in 1..10) {
       if (i % 2 == 0) continue
       println(i)  // Prints 1, 3, 5, 7, 9
   }

   // Labeled break
   outer@ for (i in 1..3) {
       for (j in 1..3) {
           if (i == 2 && j == 2) break@outer
           println("$i, $j")
       }
   }

   // Labeled continue
   outer@ for (i in 1..3) {
       for (j in 1..3) {
           if (j == 2) continue@outer
           println("$i, $j")
       }
   }

   // Functional approaches (forEach)
   fruits.forEach { fruit ->
       println(fruit)
   }

   // Functional approaches (map)
   val lengths = fruits.map { it.length }

   // Functional approaches (filter)
   val longFruits = fruits.filter { it.length > 5 }

   // Functional approaches (fold/reduce)
   val totalLength = fruits.fold(0) { acc, fruit -> acc + fruit.length }

   // Sequence for lazy evaluation
   val sequence = (1..1000)
       .asSequence()
       .filter { it % 2 == 0 }
       .map { it * it }
       .take(5)
       .toList()

