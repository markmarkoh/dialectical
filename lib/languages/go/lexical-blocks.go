package main

import "fmt"

func main() {
    // Outer block
    x := 10

    {
        // Inner block
        y := 20
        fmt.Println(x, y) // Can access both x and y
    }

    // fmt.Println(y) // Error: y is not defined here

    // If statement block
    if z := 30; z > 20 {
        // z is only accessible within this if block
        fmt.Println("z is greater than 20:", z)
    }
    // fmt.Println(z) // Error: z is not defined here

    // For loop block
    for i := 0; i < 3; i++ {
        // i is only accessible within the for loop
        fmt.Println("Loop iteration:", i)
    }
    // fmt.Println(i) // Error: i is not defined here

    // Switch block
    switch value := getValue(); value {
    case 1:
        // value is accessible in all case blocks
        fmt.Println("Value is 1:", value)
    case 2:
        fmt.Println("Value is 2:", value)
    default:
        fmt.Println("Value is something else:", value)
    }
    // fmt.Println(value) // Error: value is not defined here
}

func getValue() int {
    return 2
}

// Function block
func anotherFunction() {
    // Variables from main() are not accessible here
    // fmt.Println(x) // Error: x is not defined here

    // This function has its own lexical scope
    localVar := "I'm local to anotherFunction"
    fmt.Println(localVar)
}

