// File: math/calculator.go
package math

// Add adds two numbers and returns the result
func Add(a, b int) int {
    return a + b
}

// Subtract subtracts b from a and returns the result
func Subtract(a, b int) int {
    return a - b
}

// Private function, not exported
func multiply(a, b int) int {
    return a * b
}

// File: main.go
package main

import (
    "fmt"
    "myapp/math"
)

func main() {
    sum := math.Add(5, 3)
    fmt.Println("Sum:", sum) // Output: Sum: 8
}

