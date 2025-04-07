package main

import "fmt"

// Type declarations
type Age int
type Status string

// Struct type
type Person struct {
    Name string
    Age  int
}

// Interface type
type Speaker interface {
    Speak() string
}

// Implementing an interface
func (p Person) Speak() string {
    return fmt.Sprintf("Hi, I'm %s", p.Name)
}

func main() {
    // Type inference
    name := "Gopher" // string type inferred

    // Explicit type
    var age int = 25

    // Type conversion (must be explicit)
    var x float64 = 23.5
    var y int = int(x) // explicit conversion required

    // Using custom types
    var status Status = "Active"

    // Type assertion
    var speaker Speaker = Person{Name: "Alice", Age: 30}
    person, ok := speaker.(Person)
    if ok {
        fmt.Println("Age:", person.Age)
    }

    fmt.Println(name, age, y, status)
}

