package main

import (
    "fmt"
    "strings"
)

func main() {
    // Basic for loop with initialization, condition, and post statement
    fmt.Println("Standard for loop:")
    for i := 0; i < 5; i++ {
        fmt.Printf("%d ", i)
    }
    fmt.Println()

    // For loop as a while loop (condition only)
    fmt.Println("\nWhile-style loop:")
    count := 0
    for count < 5 {
        fmt.Printf("%d ", count)
        count++
    }
    fmt.Println()

    // Infinite loop with break
    fmt.Println("\nInfinite loop with break:")
    i := 0
    for {
        if i >= 5 {
            break
        }
        fmt.Printf("%d ", i)
        i++
    }
    fmt.Println()

    // For loop with continue
    fmt.Println("\nLoop with continue (skip even numbers):")
    for i := 0; i < 10; i++ {
        if i%2 == 0 {
            continue
        }
        fmt.Printf("%d ", i)
    }
    fmt.Println()

    // For-range loop over slice
    fmt.Println("\nIterating over a slice:")
    fruits := []string{"apple", "banana", "cherry", "date", "elderberry"}
    for index, fruit := range fruits {
        fmt.Printf("%d: %s\n", index, fruit)
    }

    // For-range with only values (ignoring index)
    fmt.Println("\nIterating over slice values:")
    for _, fruit := range fruits {
        fmt.Println(fruit)
    }

    // For-range with only indices (ignoring values)
    fmt.Println("\nIterating over slice indices:")
    for i := range fruits {
        fmt.Printf("Index %d\n", i)
    }

    // For-range over map
    fmt.Println("\nIterating over a map:")
    ages := map[string]int{
        "Alice": 25,
        "Bob":   30,
        "Carol": 27,
    }
    for name, age := range ages {
        fmt.Printf("%s is %d years old\n", name, age)
    }

    // For-range over string (iterates over runes)
    fmt.Println("\nIterating over a string (runes):")
    for i, char := range "Hello, 世界" {
        fmt.Printf("Character %c at position %d\n", char, i)
    }

    // Nested loops
    fmt.Println("\nNested loops:")
    for i := 1; i <= 3; i++ {
        for j := 1; j <= 3; j++ {
            fmt.Printf("(%d,%d) ", i, j)
        }
        fmt.Println()
    }

    // Labeled break
    fmt.Println("\nLabeled break:")
    outer:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if i == 1 && j == 1 {
                fmt.Println("Breaking outer loop")
                break outer
            }
            fmt.Printf("(%d,%d) ", i, j)
        }
        fmt.Println()
    }

    // Labeled continue
    fmt.Println("\nLabeled continue:")
    outer2:
    for i := 0; i < 3; i++ {
        for j := 0; j < 3; j++ {
            if j > i {
                fmt.Println("Continuing outer loop")
                continue outer2
            }
            fmt.Printf("(%d,%d) ", i, j)
        }
        fmt.Println()
    }
}

