// Basic function arguments
function add(a: number, b: number): number {
  return a + b
}

// Default parameters
function greet(name: string, greeting = "Hello"): string {
  return `${greeting}, ${name}!`
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0)
}

// Named parameters using object destructuring
function createUser({
  name,
  age,
  email,
}: {
  name: string
  age: number
  email: string
}): User {
  return { id: generateId(), name, age, email }
}

// Optional parameters
function fetchData(url: string, options?: RequestOptions): Promise<Response> {
  // Implementation
  return fetch(url, options)
}

// Function overloads
function process(value: number): number
function process(value: string): string
function process(value: number | string): number | string {
  if (typeof value === "number") {
    return value * 2
  } else {
    return value.toUpperCase()
  }
}

// Types for examples
interface User {
  id: string
  name: string
  age: number
  email: string
}

interface RequestOptions {
  method?: string
  headers?: Record<string, string>
}

function generateId(): string {
  return Math.random().toString(36).substring(2)
}

