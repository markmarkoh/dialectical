package main

import "fmt"

// Function with parameter and return type annotations
func add(a int, b int) int {
    return a + b
}

// Function with multiple parameters of the same type
func multiply(a, b int) int {
    return a * b
}

// Function with multiple return values
func divideAndRemainder(a, b int) (int, int) {
    return a / b, a % b
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

    return // Returns named values: min, max, sum
}

// Struct type annotations
type Person struct {
    Name string
    Age  int
}

// Interface type annotation
type Greeter interface {
    Greet() string
}

// Method with receiver type annotation
func (p Person) Greet() string {
    return fmt.Sprintf("Hello, my name is %s", p.Name)
}

func main() {
    // Variable type annotations
    var count int = 10
    var name string = "Gopher"
    var isValid bool = true

    // Slice type annotation
    var numbers []int = []int{1, 2, 3, 4, 5}

    // Map type annotation
    var scores map[string]int = map[string]int{
        "Alice": 95,
        "Bob":   87,
        "Carol": 92,
    }

    // Using the functions
    sum := add(5, 3)
    product := multiply(4, 7)
    quotient, remainder := divideAndRemainder(10, 3)
    min, max, total := calculateStats(numbers)

    // Using the struct
    person := Person{Name: "Alice", Age: 30}

    // Interface type
    var greeter Greeter = person

    fmt.Println(count, name, isValid, numbers, scores)
    fmt.Println(sum, product, quotient, remainder)
    fmt.Println(min, max, total)
    fmt.Println(greeter.Greet())
}

