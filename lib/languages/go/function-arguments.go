package main

import "fmt"

// Basic function with parameters
func greet(name string, age int) {
    fmt.Printf("Hello, %s! You are %d years old.\n", name, age)
}

// Function with same-type parameters
func add(a, b int) int {
    return a + b
}

// Function with variadic parameter (variable number of arguments)
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

// Function with pointer parameter
func increment(value *int) {
    *value++
}

// Function with slice parameter (reference type)
func modifySlice(slice []int) {
    if len(slice) > 0 {
        slice[0] = 999 // This will affect the original slice
    }
}

// Function with map parameter (reference type)
func addToMap(m map[string]int, key string, value int) {
    m[key] = value // This will affect the original map
}

// Function with struct parameter
type Person struct {
    Name string
    Age  int
}

// Pass by value (copy)
func celebrateBirthday(p Person) Person {
    p.Age++
    return p // Return modified copy
}

// Pass by pointer (reference)
func celebrateBirthdayPtr(p *Person) {
    p.Age++ // Modifies the original
}

// Function with function parameter (higher-order function)
func applyAndPrint(value int, fn func(int) int) {
    result := fn(value)
    fmt.Println("Result:", result)
}

func main() {
    // Basic parameter passing
    greet("Gopher", 10)

    // Passing arguments by position
    sum := add(5, 3)
    fmt.Println("Sum:", sum)

    // Passing to variadic function
    total := sum(1, 2, 3, 4, 5)
    fmt.Println("Total:", total)

    // Passing a slice to a variadic function
    numbers := []int{1, 2, 3, 4, 5}
    total = sum(numbers...) // Spread operator
    fmt.Println("Total from slice:", total)

    // Passing a pointer
    value := 10
    increment(&value) // Pass address
    fmt.Println("Incremented value:", value)

    // Passing a slice (reference type)
    slice := []int{1, 2, 3}
    fmt.Println("Before:", slice)
    modifySlice(slice)
    fmt.Println("After:", slice) // [999 2 3]

    // Passing a map (reference type)
    scores := map[string]int{"Alice": 95}
    fmt.Println("Before:", scores)
    addToMap(scores, "Bob", 87)
    fmt.Println("After:", scores) // map[Alice:95 Bob:87]

    // Passing a struct by value
    person := Person{Name: "Alice", Age: 30}
    fmt.Println("Before:", person)
    updatedPerson := celebrateBirthday(person)
    fmt.Println("Original after call:", person)        // Age is still 30
    fmt.Println("Returned value:", updatedPerson)      // Age is 31

    // Passing a struct by pointer
    fmt.Println("Before:", person)
    celebrateBirthdayPtr(&person)
    fmt.Println("After:", person) // Age is now 31

    // Passing a function as argument
    applyAndPrint(5, func(x int) int {
        return x * x
    })
}

