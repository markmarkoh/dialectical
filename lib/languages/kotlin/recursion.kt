// Simple recursion (factorial)
fun factorial(n: Int): Int {
   // Base case
   if (n == 0 || n == 1) {
       return 1
   }
   // Recursive case
   return n * factorial(n - 1)
}

// Tail recursion (more efficient)
tailrec fun factorialTail(n: Int, acc: Int = 1): Int {
   // Base case
   if (n == 0 || n == 1) {
       return acc
   }
   // Tail-recursive case
   return factorialTail(n - 1, n * acc)
}

// Recursive Fibonacci
fun fibonacci(n: Int): Int {
   // Base cases
   if (n <= 1) {
       return n
   }
   // Recursive case
   return fibonacci(n - 1) + fibonacci(n - 2)
}

// Tail-recursive Fibonacci
tailrec fun fibonacciTail(n: Int, a: Int = 0, b: Int = 1): Int {
   if (n == 0) return a
   if (n == 1) return b
   return fibonacciTail(n - 1, b, a + b)
}

// Recursive list processing
fun sum(list: List<Int>): Int {
   if (list.isEmpty()) {
       return 0
   }
   return list.first() + sum(list.drop(1))
}

// Tail-recursive list processing
tailrec fun sumTail(list: List<Int>, acc: Int = 0): Int {
   if (list.isEmpty()) {
       return acc
   }
   return sumTail(list.drop(1), acc + list.first())
}

// Recursive binary search
fun binarySearch(array: IntArray, target: Int, left: Int = 0, right: Int = array.size - 1): Int {
   if (left > right) {
       return -1  // Not found
   }
   
   val mid = left + (right - left) / 2
   
   return when {
       array[mid] == target -> mid  // Found
       array[mid] > target -> binarySearch(array, target, left, mid - 1)  // Search left half
       else -> binarySearch(array, target, mid + 1, right)  // Search right half
   }
}

// Recursive tree traversal
class TreeNode(val value: Int, val left: TreeNode? = null, val right: TreeNode? = null)

fun inOrderTraversal(node: TreeNode?, result: MutableList<Int> = mutableListOf()): List<Int> {
   if (node == null) {
       return result
   }
   
   inOrderTraversal(node.left, result)
   result.add(node.value)
   inOrderTraversal(node.right, result)
   
   return result
}

