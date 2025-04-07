// File: Math.kt
package com.example.math

// Public functions are exported
fun add(a: Int, b: Int): Int {
   return a + b
}

fun subtract(a: Int, b: Int): Int {
   return a - b
}

// Private function (not exported outside the file)
private fun square(x: Int): Int {
   return x * x
}

// File: Main.kt
package com.example.main

import com.example.math.add
// or import com.example.math.*

fun main() {
   val result = add(5, 3)  // 8
   // square(4)  // Error: square is private
}

