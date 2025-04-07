package main

import (
    "fmt"
    "sort"
    "strings"
)

func main() {
    // Basic anonymous function
    func() {
        fmt.Println("Hello from anonymous function!")
    }() // Immediately invoked

    // Anonymous function with parameters
    func(name string) {
        fmt.Println("Hello,", name)
    }("Gopher")

    // Anonymous function with return value
    result := func(a, b int) int {
        return a + b
    }(5, 3)
    fmt.Println("Result:", result)

    // Assigning anonymous function to variable
    greeter := func(name string) string {
        return "Hello, " + name
    }

    // Calling the function through the variable
    message := greeter("Go")
    fmt.Println(message)

    // Anonymous function capturing variables (closure)
    counter := 0
    increment := func() int {
        counter++
        return counter
    }

    fmt.Println(increment()) // 1
    fmt.Println(increment()) // 2
    fmt.Println(increment()) // 3

    // Using anonymous functions with higher-order functions
    numbers := []int{4, 2, 7, 1, 9, 3}

    // Sort with custom comparator
    sort.Slice(numbers, func(i, j int) bool {
        return numbers[i] < numbers[j]
    })
    fmt.Println("Sorted numbers:", numbers)

    // Map-like operation with anonymous function
    doubled := mapSlice(numbers, func(n int) int {
        return n * 2
    })
    fmt.Println("Doubled:", doubled)

    // Filter-like operation with anonymous function
    evens := filterSlice(numbers, func(n int) bool {
        return n%2 == 0
    })
    fmt.Println("Even numbers:", evens)

    // Reduce-like operation with anonymous function
    sum := reduceSlice(numbers, 0, func(acc, n int) int {
        return acc + n
    })
    fmt.Println("Sum:", sum)
}

// Higher-order function that takes a function as parameter
func mapSlice(slice []int, fn func(int) int) []int {
    result := make([]int, len(slice))
    for i, v := range slice {
        result[i] = fn(v)
    }
    return result
}

func filterSlice(slice []int, fn func(int) bool) []int {
    var result []int
    for _, v := range slice {
        if fn(v) {
            result = append(result, v)
        }
    }
    return result
}

func reduceSlice(slice []int, initial int, fn func(int, int) int) int {
    result := initial
    for _, v := range slice {
        result = fn(result, v)
    }
    return result
}

