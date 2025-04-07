// Basic type annotations
const name = "Alice"
const age = 30
const height = 1.75
const isActive = true

// Function type annotations
function greet(name: string): string {
  return `Hello, ${name}`
}

// Type aliases
type UserId = number
type UserName = string

// Interface definitions
interface User {
  id: UserId
  name: UserName
  age: number
}

// Generic type annotations
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }

// Using generic types
const success: Result<number, string> = { ok: true, value: 42 }
const failure: Result<number, string> = { ok: false, error: "Something went wrong" }

// Complex type operations
type Partial<T> = { [P in keyof T]?: T[P] }
type ReadOnly<T> = { readonly [P in keyof T]: T[P] }

// Type assertions
const element = document.getElementById("root") as HTMLDivElement

