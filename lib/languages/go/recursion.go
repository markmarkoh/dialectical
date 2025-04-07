package main

import (
    "fmt"
)

// Simple recursion: factorial
func factorial(n int) int {
    // Base case
    if n == 0 || n == 1 {
        return 1
    }
    // Recursive case
    return n * factorial(n-1)
}

// Tail-recursive factorial
func factorialTail(n int, acc int) int {
    // Base case
    if n == 0 || n == 1 {
        return acc
    }
    // Tail-recursive case
    return factorialTail(n-1, n*acc)
}

// Wrapper function for tail recursion
func factorialWrapper(n int) int {
    return factorialTail(n, 1)
}

// Recursive Fibonacci
func fibonacci(n int) int {
    // Base cases
    if n <= 1 {
        return n
    }
    // Recursive case
    return fibonacci(n-1) + fibonacci(n-2)
}

// Memoized Fibonacci to avoid redundant calculations
func fibonacciMemoized() func(int) int {
    memo := make(map[int]int)

    var fib func(int) int
    fib = func(n int) int {
        // Check if already computed
        if val, ok := memo[n]; ok {
            return val
        }
        
        // Base cases
        if n <= 1 {
            memo[n] = n
            return n
        }
        
        // Recursive case with memoization
        memo[n] = fib(n-1) + fib(n-2)
        return memo[n]
    }

    return fib
}

// Recursive function to calculate the sum of a slice
func sumSlice(slice []int) int {
    // Base case
    if len(slice) == 0 {
        return 0
    }
    // Recursive case
    return slice[0] + sumSlice(slice[1:])
}

// Recursive binary search
func binarySearch(arr []int, target, low, high int) int {
    // Base case: element not found
    if low > high {
        return -1
    }

    // Calculate middle index
    mid := (low + high) / 2

    // Check if middle element is the target
    if arr[mid] == target {
        return mid
    }

    // Recursive cases
    if arr[mid] > target {
        // Search in the left half
        return binarySearch(arr, target, low, mid-1)
    } else {
        // Search in the right half
        return binarySearch(arr, target, mid+1, high)
    }
}

// Recursive function to reverse a string
func reverseString(s string) string {
    // Base case
    if len(s) <= 1 {
        return s
    }
    // Recursive case
    return reverseString(s[1:]) + s[:1]
}

// Recursive function for tree traversal
type TreeNode struct {
    Value int
    Left  *TreeNode
    Right *TreeNode
}

// In-order traversal
func inOrderTraversal(node *TreeNode, visit func(int)) {
    if node == nil {
        return
    }

    inOrderTraversal(node.Left, visit)
    visit(node.Value)
    inOrderTraversal(node.Right, visit)
}

func main() {
    // Test factorial
    fmt.Println("Factorial of 5:", factorial(5))
    fmt.Println("Factorial of 5 (tail-recursive):", factorialWrapper(5))

    // Test Fibonacci
    fmt.Println("\nFibonacci of 10:", fibonacci(10))

    // Test memoized Fibonacci
    fib := fibonacciMemoized()
    fmt.Println("Fibonacci of 10 (memoized):", fib(10))
    fmt.Println("Fibonacci of 40 (memoized):", fib(40)) // Would be very slow without memoization

    // Test sum of slice
    numbers := []int{1, 2, 3, 4, 5}
    fmt.Println("\nSum of slice:", sumSlice(numbers))

    // Test binary search
    sortedNumbers := []int{1, 3, 5, 7, 9, 11, 13, 15}
    target := 7
    index := binarySearch(sortedNumbers, target, 0, len(sortedNumbers)-1)
    fmt.Printf("\nIndex of %d in sorted array: %d\n", target, index)

    // Test string reversal
    fmt.Println("\nReversed 'hello':", reverseString("hello"))

    // Test tree traversal
    tree := &TreeNode{
        Value: 4,
        Left: &TreeNode{
            Value: 2,
            Left:  &TreeNode{Value: 1},
            Right: &TreeNode{Value: 3},
        },
        Right: &TreeNode{
            Value: 6,
            Left:  &TreeNode{Value: 5},
            Right: &TreeNode{Value: 7},
        },
    }

    fmt.Println("\nIn-order traversal of binary tree:")
    inOrderTraversal(tree, func(val int) {
        fmt.Printf("%d ", val)
    })
    fmt.Println()
}

