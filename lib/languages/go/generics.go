package main

import "fmt"

// Generic function with type parameter
func Print[T any](value T) {
    fmt.Println(value)
}

// Generic function with multiple type parameters
func Swap[T any](a, b T) (T, T) {
    return b, a
}

// Generic function with type constraint
func Min[T comparable](a, b T) T {
    if a < b {
        return a
    }
    return b
}

// Generic function with custom type constraint
type Number interface {
    int | int8 | int16 | int32 | int64 | float32 | float64
}

func Sum[T Number](values []T) T {
    var sum T
    for _, v := range values {
        sum += v
    }
    return sum
}

// Generic data structure
type Stack[T any] struct {
    items []T
}

func NewStack[T any]() *Stack[T] {
    return &Stack[T]{items: make([]T, 0)}
}

func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}

func (s *Stack[T]) Pop() (T, bool) {
    var zero T
    if len(s.items) == 0 {
        return zero, false
    }

    lastIndex := len(s.items) - 1
    item := s.items[lastIndex]
    s.items = s.items[:lastIndex]
    return item, true
}

func (s *Stack[T]) Peek() (T, bool) {
    var zero T
    if len(s.items) == 0 {
        return zero, false
    }

    return s.items[len(s.items)-1], true
}

func (s *Stack[T]) IsEmpty() bool {
    return len(s.items) == 0
}

// Generic map function
func Map[T, U any](slice []T, f func(T) U) []U {
    result := make([]U, len(slice))
    for i, v := range slice {
        result[i] = f(v)
    }
    return result
}

func main() {
    // Using generic functions
    Print("Hello, Generics!")
    Print(42)

    a, b := 5, 10
    fmt.Println("Before swap:", a, b)
    a, b = Swap(a, b)
    fmt.Println("After swap:", a, b)

    // Using constrained generic function
    fmt.Println("Min of 5 and 10:", Min(5, 10))
    fmt.Println("Min of 'apple' and 'banana':", Min("apple", "banana"))

    // Using Number constrained function
    intSlice := []int{1, 2, 3, 4, 5}
    fmt.Println("Sum of integers:", Sum(intSlice))

    floatSlice := []float64{1.1, 2.2, 3.3, 4.4, 5.5}
    fmt.Println("Sum of floats:", Sum(floatSlice))

    // Using generic data structure
    stack := NewStack[string]()
    stack.Push("Go")
    stack.Push("is")
    stack.Push("awesome")

    for !stack.IsEmpty() {
        item, _ := stack.Pop()
        fmt.Println(item)
    }

    // Using generic Map function
    numbers := []int{1, 2, 3, 4, 5}
    squares := Map(numbers, func(x int) int {
        return x * x
    })
    fmt.Println("Squares:", squares)

    // Convert numbers to strings
    numberStrings := Map(numbers, func(x int) string {
        return fmt.Sprintf("Number: %d", x)
    })
    fmt.Println("Number strings:", numberStrings)
}

