// Constants (immutable bindings)
const PI = 3.14159
const APP_NAME = "MyApp"
const MAX_RETRIES = 3

// Using constants
function circleArea(radius: number): number {
  return PI * radius * radius
}

// Constants can be complex expressions
const currentDate = new Date()
const complexObject = {
  id: 1,
  name: "Example",
  created: currentDate,
}

// Computed constants
const DOUBLE_PI = PI * 2

// Enum constants
enum Direction {
  North = "NORTH",
  South = "SOUTH",
  East = "EAST",
  West = "WEST",
}

// Const assertions
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
} as const // Makes all properties readonly

