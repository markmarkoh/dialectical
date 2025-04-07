package main

import (
    "fmt"
    "math/rand"
    "time"
)

func main() {
    // Basic if statement
    x := 10
    if x > 5 {
        fmt.Println("x is greater than 5")
    }

    // If with else
    y := 3
    if y > 5 {
        fmt.Println("y is greater than 5")
    } else {
        fmt.Println("y is not greater than 5")
    }

    // If-else if-else chain
    z := 5
    if z > 10 {
        fmt.Println("z is greater than 10")
    } else if z > 5 {
        fmt.Println("z is greater than 5 but not greater than 10")
    } else if z == 5 {
        fmt.Println("z is exactly 5")
    } else {
        fmt.Println("z is less than 5")
    }

    // If with initialization statement
    if value := rand.Intn(10); value < 5 {
        fmt.Println("Got a small value:", value)
    } else {
        fmt.Println("Got a big value:", value)
    }
    // value is not accessible here

    // If with error check (common pattern)
    if result, err := divide(10, 2); err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }

    // If with error check and initialization
    if file, err := openFile("example.txt"); err != nil {
        fmt.Println("Error opening file:", err)
    } else {
        fmt.Println("File opened successfully:", file)
        // Use file...
        file.Close()
    }

    // Nested if statements
    age := 25
    hasLicense := true

    if age >= 18 {
        if hasLicense {
            fmt.Println("You can drive")
        } else {
            fmt.Println("You need a license to drive")
        }
    } else {
        fmt.Println("You are too young to drive")
    }

    // Boolean operators in conditions
    isSunny := true
    isWarm := true

    if isSunny && isWarm {
        fmt.Println("It's a nice day")
    }

    isRaining := false
    if isSunny || isRaining {
        fmt.Println("Weather is doing something")
    }

    if !isRaining {
        fmt.Println("No need for an umbrella")
    }
}

// Helper function for error example
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// Helper function for file example
type File struct {
    Name string
}

func (f *File) Close() {
    fmt.Println("Closing file:", f.Name)
}

func openFile(name string) (*File, error) {
    // Simulate file opening
    if name == "" {
        return nil, fmt.Errorf("empty filename")
    }
    return &File{Name: name}, nil
}

