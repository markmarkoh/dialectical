package main

import (
    "errors"
    "fmt"
    "strconv"
)

// Go doesn't have explicit guard clauses like some languages,
// but the pattern is commonly used for early returns and error handling.

// Example 1: Basic guard clause pattern
func processPositiveNumber(num int) (string, error) {
    // Guard clause for invalid input
    if num <= 0 {
        return "", errors.New("number must be positive")
    }

    // Main logic (only executed if guard passes)
    return fmt.Sprintf("Processed number: %d", num), nil
}

// Example 2: Multiple guard clauses
func validateUser(username, password string) error {
    // Guard: Check if username is empty
    if username == "" {
        return errors.New("username cannot be empty")
    }

    // Guard: Check if username is too short
    if len(username) < 3 {
        return errors.New("username must be at least 3 characters")
    }

    // Guard: Check if password is empty
    if password == "" {
        return errors.New("password cannot be empty")
    }

    // Guard: Check if password is too short
    if len(password) < 8 {
        return errors.New("password must be at least 8 characters")
    }

    // If all guards pass, the user is valid
    return nil
}

// Example 3: Guard clauses with type assertions
func processValue(value interface{}) string {
    // Guard: Check if value is nil
    if value == nil {
        return "Value is nil"
    }

    // Guard: Try to process as string
    if str, ok := value.(string); ok {
        return fmt.Sprintf("String value: %s", str)
    }

    // Guard: Try to process as int
    if num, ok := value.(int); ok {
        return fmt.Sprintf("Integer value: %d", num)
    }

    // Default case
    return fmt.Sprintf("Unknown type: %T", value)
}

// Example 4: Guard clauses in a parsing function
func parseConfig(config map[string]string) (int, string, error) {
    // Guard: Check if config is nil
    if config == nil {
        return 0, "", errors.New("config cannot be nil")
    }

    // Guard: Check if required fields exist
    port, exists := config["port"]
    if !exists {
        return 0, "", errors.New("port is required in config")
    }

    host, exists := config["host"]
    if !exists {
        return 0, "", errors.New("host is required in config")
    }

    // Guard: Validate port
    portNum, err := strconv.Atoi(port)
    if err != nil {
        return 0, "", fmt.Errorf("invalid port: %v", err)
    }

    if portNum < 1 || portNum > 65535 {
        return 0, "", errors.New("port must be between 1 and 65535")
    }

    // All guards passed, return the parsed values
    return portNum, host, nil
}

// Example 5: Guard clauses in recursive functions
func factorial(n int) (int, error) {
    // Guard: Check for negative input
    if n < 0 {
        return 0, errors.New("factorial not defined for negative numbers")
    }

    // Base case
    if n == 0 || n == 1 {
        return 1, nil
    }

    // Recursive case
    prev, err := factorial(n - 1)
    if err != nil {
        return 0, err
    }

    return n * prev, nil
}

func main() {
    // Example 1
    fmt.Println("=== Example 1 ===")
    result, err := processPositiveNumber(5)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }

    result, err = processPositiveNumber(-5)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }

    // Example 2
    fmt.Println("\n=== Example 2 ===")
    err = validateUser("bob", "password123")
    if err != nil {
        fmt.Println("Validation error:", err)
    } else {
        fmt.Println("User is valid")
    }

    err = validateUser("", "password123")
    if err != nil {
        fmt.Println("Validation error:", err)
    }

    // Example 3
    fmt.Println("\n=== Example 3 ===")
    fmt.Println(processValue("hello"))
    fmt.Println(processValue(42))
    fmt.Println(processValue(nil))
    fmt.Println(processValue(3.14))

    // Example 4
    fmt.Println("\n=== Example 4 ===")
    config := map[string]string{
        "port": "8080",
        "host": "localhost",
    }

    port, host, err := parseConfig(config)
    if err != nil {
        fmt.Println("Config error:", err)
    } else {
        fmt.Printf("Parsed config: port=%d, host=%s\n", port, host)
    }

    invalidConfig := map[string]string{
        "port": "invalid",
        "host": "localhost",
    }

    port, host, err = parseConfig(invalidConfig)
    if err != nil {
        fmt.Println("Config error:", err)
    }

    // Example 5
    fmt.Println("\n=== Example 5 ===")
    fact, err := factorial(5)
    if err != nil {
        fmt.Println("Factorial error:", err)
    } else {
        fmt.Println("5! =", fact)
    }

    fact, err = factorial(-1)
    if err != nil {
        fmt.Println("Factorial error:", err)
    }
}

