package main

import (
    "fmt"
    "reflect"
)

// Go doesn't have built-in pattern matching like some functional languages,
// but we can achieve similar functionality using type switches, interfaces,
// and conditional logic.

// Example 1: Type switch for basic pattern matching
func describe(i interface{}) {
    switch v := i.(type) {
    case nil:
        fmt.Println("nil value")
    case int:
        fmt.Printf("integer: %d\n", v)
    case float64:
        fmt.Printf("float: %f\n", v)
    case string:
        fmt.Printf("string: %q\n", v)
    case bool:
        fmt.Printf("boolean: %t\n", v)
    case []interface{}:
        fmt.Printf("slice with %d elements\n", len(v))
    case map[string]interface{}:
        fmt.Printf("map with %d key-value pairs\n", len(v))
    default:
        fmt.Printf("type: %T\n", v)
    }
}

// Example 2: Struct pattern matching with type assertions
type Person struct {
    Name string
    Age  int
}

type Employee struct {
    Person
    Title  string
    Salary float64
}

func handlePerson(i interface{}) {
    // Type assertion
    if p, ok := i.(Person); ok {
        if p.Age < 18 {
            fmt.Printf("%s is a minor\n", p.Name)
        } else {
            fmt.Printf("%s is an adult\n", p.Name)
        }
        return
    }

    // Type assertion for Employee
    if e, ok := i.(Employee); ok {
        fmt.Printf("%s is a %s earning $%.2f\n", e.Name, e.Title, e.Salary)
        return
    }

    fmt.Println("Not a person or employee")
}

// Example 3: Pattern matching on slices
func matchSlice(slice []interface{}) {
    switch {
    case len(slice) == 0:
        fmt.Println("Empty slice")
    case len(slice) == 1:
        fmt.Printf("Single element: %v\n", slice[0])
    case len(slice) == 2:
        fmt.Printf("Pair: %v and %v\n", slice[0], slice[1])
    case len(slice) > 10:
        fmt.Printf("Long slice with %d elements\n", len(slice))
    default:
        fmt.Printf("Slice with %d elements\n", len(slice))
    }
}

// Example 4: Custom pattern matcher using reflection
func match(value interface{}, patterns map[string]func(interface{}) bool, actions map[string]func(interface{})) bool {
    for pattern, predicate := range patterns {
        if predicate(value) {
            action := actions[pattern]
            if action != nil {
                action(value)
            }
            return true
        }
    }
    return false
}

func main() {
    // Example 1: Type switch
    fmt.Println("=== Type Switch Examples ===")
    describe(42)
    describe(3.14)
    describe("hello")
    describe(true)
    describe(nil)
    describe([]interface{}{1, 2, 3})
    describe(map[string]interface{}{"name": "Go", "year": 2009})

    // Example 2: Struct pattern matching
    fmt.Println("\n=== Struct Pattern Matching ===")
    handlePerson(Person{Name: "Alice", Age: 15})
    handlePerson(Person{Name: "Bob", Age: 25})
    handlePerson(Employee{
        Person: Person{Name: "Charlie", Age: 30},
        Title:  "Software Engineer",
        Salary: 85000,
    })
    handlePerson("not a person")

    // Example 3: Slice pattern matching
    fmt.Println("\n=== Slice Pattern Matching ===")
    matchSlice([]interface{}{})
    matchSlice([]interface{}{1})
    matchSlice([]interface{}{1, 2})
    matchSlice([]interface{}{1, 2, 3, 4, 5})
    matchSlice(make([]interface{}, 15))

    // Example 4: Custom pattern matcher
    fmt.Println("\n=== Custom Pattern Matcher ===")

    // Define patterns and actions
    patterns := map[string]func(interface{}) bool{
        "nil":      func(v interface{}) bool { return v == nil },
        "empty":    func(v interface{}) bool { return reflect.ValueOf(v).Len() == 0 },
        "positive": func(v interface{}) bool { 
            k := reflect.TypeOf(v).Kind()
            if k >= reflect.Int && k <= reflect.Float64 {
                return reflect.ValueOf(v).Float() > 0
            }
            return false
        },
        "person": func(v interface{}) bool {
            _, ok := v.(Person)
            return ok
        },
    }

    actions := map[string]func(interface{}){
        "nil":      func(_ interface{}) { fmt.Println("Matched nil value") },
        "empty":    func(v interface{}) { fmt.Printf("Matched empty %T\n", v) },
        "positive": func(v interface{}) { fmt.Printf("Matched positive number: %v\n", v) },
        "person":   func(v interface{}) { 
            p := v.(Person)
            fmt.Printf("Matched person: %s, age %d\n", p.Name, p.Age) 
        },
    }

    // Test the matcher
    match(nil, patterns, actions)
    match([]int{}, patterns, actions)
    match(42, patterns, actions)
    match(Person{Name: "Dave", Age: 35}, patterns, actions)

    // No match case
    if !match("hello", patterns, actions) {
        fmt.Println("No pattern matched for 'hello'")
    }
}

