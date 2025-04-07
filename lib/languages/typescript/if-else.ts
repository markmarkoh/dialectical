// Basic if/else
function checkNumber(x: number): string {
  if (x > 0) {
    return "Positive"
  } else if (x < 0) {
    return "Negative"
  } else {
    return "Zero"
  }
}

// Ternary operator (expression form of if/else)
const isAdmin = true // Declared isAdmin
const message = isAdmin ? "Welcome, admin!" : "Welcome, user!"

// If without else
function maybeLog(message: string, verbose: boolean): void {
  if (verbose) {
    console.log(message)
  }
}

// Nested conditions
function processData(data: string | null): string {
  if (data !== null) {
    if (data.length > 0) {
      return `Valid data: ${data}`
    } else {
      return "Empty data"
    }
  } else {
    return "No data"
  }
}

interface User {
  isActive: boolean
  age: number
}

// Logical operators in conditions
function validateUser(user: User): boolean {
  if (user && user.isActive && user.age >= 18) {
    return true
  }
  return false
}

// Type narrowing with if
function process(value: string | number): string {
  if (typeof value === "string") {
    // TypeScript knows value is a string here
    return value.toUpperCase()
  } else {
    // TypeScript knows value is a number here
    return value.toString()
  }
}

