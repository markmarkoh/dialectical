package main

import (
    "fmt"
    "strings"
)

// Basic function definition
func greet(name string) string {
    return "Hello, " + name
}

// Function with multiple parameters
func add(a, b int) int {
    return a + b
}

// Function with multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Function with named return values
func calculateStats(values []int) (min, max, sum int) {
    if len(values) == 0 {
        return 0, 0, 0
    }

    min = values[0]
    max = values[0]
    sum = 0

    for _, v := range values {
        if v < min {
            min = v
        }
        if v > max {
            max = v
        }
        sum += v
    }

    return // "naked" return - returns the named values
}

// Variadic function (variable number of arguments)
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

// Method definition (function with a receiver)
type Person struct {
    FirstName string
    LastName  string
}

// Value receiver
func (p Person) FullName() string {
    return p.FirstName + " " + p.LastName
}

// Pointer receiver
func (p *Person) SetName(firstName, lastName string) {
    p.FirstName = firstName
    p.LastName = lastName
}

func main() {
    // Calling basic functions
    message := greet("Gopher")
    fmt.Println(message)

    result := add(5, 3)
    fmt.Println("Sum:", result)

    // Handling multiple return values
    quotient, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Quotient:", quotient)
    }

    // Using named return values
    numbers := []int{7, 2, 9, 3, 5}
    min, max, total := calculateStats(numbers)
    fmt.Println("Min:", min, "Max:", max, "Sum:", total)

    // Calling variadic function
    fmt.Println("Sum:", sum(1, 2, 3, 4, 5))

    // Spreading a slice to a variadic function
    nums := []int{1, 2, 3, 4, 5}
    fmt.Println("Sum from slice:", sum(nums...))

    // Using methods
    person := Person{FirstName: "John", LastName: "Doe"}
    fmt.Println("Full name:", person.FullName())

    person.SetName("Jane", "Smith")
    fmt.Println("New full name:", person.FullName())
}

