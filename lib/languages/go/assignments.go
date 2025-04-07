package main

import "fmt"

func main() {
    // Variable declaration with initialization
    var name string = "Gopher"

    // Type inference
    var age = 5 // Type inferred as int

    // Short variable declaration (only inside functions)
    city := "Go City" // Shorthand for var city = "Go City"

    // Multiple variable declaration
    var x, y, z int = 1, 2, 3

    // Multiple variable declaration with type inference
    var a, b, c = 1, true, "hello"

    // Multiple short variable declarations
    i, j := 10, "value"

    // Reassignment
    i = 20 // Changing value

    // Multiple assignment
    i, j = 30, "new value"

    // Swap values
    i, j = j, i // j is now 30, i is now "new value"

    // Blank identifier for unused values
    _, value := returnTwoValues()

    fmt.Println(name, age, city, x, y, z, a, b, c, i, j, value)
}

func returnTwoValues() (int, string) {
    return 1, "value"
}

