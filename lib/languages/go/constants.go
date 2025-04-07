package main

import (
    "fmt"
    "math"
)

// Package-level constants
const Pi = 3.14159
const (
    StatusOK       = 200
    StatusNotFound = 404
)

// Multiple constants with implicit type
const (
    Monday    = "Mon"
    Tuesday   = "Tue"
    Wednesday = "Wed"
)

// Typed constants
const (
    Minute int64 = 60
    Hour         = 60 * Minute  // Type inferred from Minute
    Day          = 24 * Hour
)

// iota for enumeration
const (
    North = iota  // 0
    East          // 1
    South         // 2
    West          // 3
)

// iota with expressions
const (
    _           = iota             // 0 (ignored)
    KB          = 1 << (10 * iota) // 1 << 10 = 1024
    MB                             // 1 << 20
    GB                             // 1 << 30
)

// Untyped constants
const (
    UniversalAnswer = 42        // Untyped integer
    MaxFloat        = 1.797e+308 // Untyped floating-point
    Message         = "Hello"   // Untyped string
)

func main() {
    fmt.Println("Pi:", Pi)
    fmt.Println("HTTP Status:", StatusOK, StatusNotFound)
    fmt.Println("Days:", Monday, Tuesday, Wednesday)
    fmt.Println("Time units:", Minute, Hour, Day)
    fmt.Println("Directions:", North, East, South, West)
    fmt.Println("Data sizes:", KB, MB, GB)

    // Constants in expressions
    radius := 5.0
    circumference := 2 * Pi * radius
    fmt.Println("Circumference:", circumference)

    // Untyped constants can be used with compatible types
    var x int = UniversalAnswer
    var y float64 = UniversalAnswer
    var z complex128 = UniversalAnswer
    fmt.Println(x, y, z)

    // This would cause a compile-time error:
    // var s string = UniversalAnswer
}

