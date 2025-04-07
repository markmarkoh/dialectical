package main

import (
    "errors"
    "fmt"
    "io"
    "os"
    "strconv"
    "strings"
)

// Basic error handling with the error interface
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// Creating custom errors with fmt.Errorf
func validateAge(age int) error {
    if age < 0 {
        return fmt.Errorf("invalid age: %d (must be positive)", age)
    }
    if age > 150 {
        return fmt.Errorf("invalid age: %d (too high)", age)
    }
    return nil
}

// Custom error type
type ValidationError struct {
    Field string
    Value interface{}
    Msg   string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation error for %s: %v - %s", e.Field, e.Value, e.Msg)
}

// Function that returns custom error
func validateUsername(username string) error {
    if len(username) < 3 {
        return &ValidationError{
            Field: "username",
            Value: username,
            Msg:   "too short (min 3 characters)",
        }
    }
    if len(username) > 20 {
        return &ValidationError{
            Field: "username",
            Value: username,
            Msg:   "too long (max 20 characters)",
        }
    }
    return nil
}

// Sentinel errors (predefined errors for comparison)
var (
    ErrNotFound     = errors.New("not found")
    ErrUnauthorized = errors.New("unauthorized access")
    ErrInvalidInput = errors.New("invalid input")
)

func findUser(id string) (string, error) {
    // Simulate user lookup
    if id == "" {
        return "", ErrInvalidInput
    }
    if id == "admin" {
        return "Administrator", nil
    }
    return "", ErrNotFound
}

// Error wrapping (Go 1.13+)
func processFile(path string) error {
    file, err := os.Open(path)
    if err != nil {
        return fmt.Errorf("failed to open file: %w", err)
    }
    defer file.Close()

    // Process file...
    return nil
}

// Multiple error handling with a helper function
func parseConfig(configStr string) (map[string]string, error) {
    config := make(map[string]string)

    lines := strings.Split(configStr, "\n")
    for i, line := range lines {
        line = strings.TrimSpace(line)
        if line == "" || strings.HasPrefix(line, "#") {
            continue // Skip empty lines and comments
        }
        
        parts := strings.SplitN(line, "=", 2)
        if len(parts) != 2 {
            return nil, fmt.Errorf("invalid config format at line %d: %s", i+1, line)
        }
        
        key := strings.TrimSpace(parts[0])
        value := strings.TrimSpace(parts[1])
        config[key] = value
    }

    return config, nil
}

// Using panic and recover for exceptional cases
func mustParse(s string) int {
    n, err := strconv.Atoi(s)
    if err != nil {
        panic(fmt.Sprintf("failed to parse '%s' as integer: %v", s, err))
    }
    return n
}

func safeOperation() (result int, err error) {
    // Set up recovery
    defer func() {
        if r := recover(); r != nil {
            // Convert panic to error
            err = fmt.Errorf("recovered from panic: %v", r)
        }
    }()

    // This might panic
    return mustParse("not-a-number") * 2, nil
}

// Error handling with multiple return values
func readConfig(path string) ([]byte, error) {
    file, err := os.Open(path)
    if err != nil {
        return nil, err
    }
    defer file.Close()

    data, err := io.ReadAll(file)
    if err != nil {
        return nil, err
    }

    return data, nil
}

// Checking error types with type assertions
func handleError(err error) {
    if err == nil {
        return
    }

    // Check for sentinel errors
    if errors.Is(err, ErrNotFound) {
        fmt.Println("Resource not found error:", err)
        return
    }

    if errors.Is(err, ErrUnauthorized) {
        fmt.Println("Authorization error:", err)
        return
    }

    // Check for custom error types
    var validationErr *ValidationError
    if errors.As(err, &validationErr) {
        fmt.Printf("Validation error for field '%s': %s\n", 
            validationErr.Field, validationErr.Msg)
        return
    }

    // Default error handling
    fmt.Println("Unexpected error:", err)
}

func main() {
    // Basic error handling
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }

    result, err = divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Custom errors
    err = validateAge(25)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Age is valid")
    }

    err = validateAge(-5)
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Custom error types
    err = validateUsername("bob")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Username is valid")
    }

    err = validateUsername("a")
    if err != nil {
        fmt.Println("Error:", err)
    }

    // Sentinel errors
    user, err := findUser("admin")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Found user:", user)
    }

    user, err = findUser("unknown")
    if err != nil {
        if err == ErrNotFound {
            fmt.Println("User not found")
        } else {
            fmt.Println("Error:", err)
        }
    }

    // Error wrapping
    err = processFile("nonexistent.txt")
    if err != nil {
        fmt.Println("Error:", err)
        
        // Unwrap to check the underlying error
        if errors.Is(err, os.ErrNotExist) {
            fmt.Println("The file does not exist")
        }
    }

    // Panic and recover
    result, err = safeOperation()
    if err != nil {
        fmt.Println("Safe operation failed:", err)
    } else {
        fmt.Println("Result:", result)
    }

    // Error type checking
    fmt.Println("\nError type handling examples:")
    handleError(ErrNotFound)
    handleError(ErrUnauthorized)
    handleError(&ValidationError{Field: "email", Value: "test", Msg: "invalid format"})
    handleError(errors.New("some other error"))
}

