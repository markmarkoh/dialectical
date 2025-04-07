import type { ProgrammingConcept } from "../types"

// Base concepts without comparisons
export const gleamConcepts: Omit<ProgrammingConcept, "implementations">[] = [
  // BASICS
  {
    id: "modules",
    name: "Modules",
    category: "BASICS",
    description: "How code is organized into modules and namespaces.",
  },
  {
    id: "imports",
    name: "Imports",
    category: "BASICS",
    description: "How code from other modules is imported and used.",
  },
  {
    id: "type-checking",
    name: "Type Checking",
    category: "BASICS",
    description: "How types are checked and enforced by the compiler.",
  },
  {
    id: "scalar-types",
    name: "Scalar Types",
    category: "BASICS",
    description: "Basic data types like numbers, strings, and booleans.",
  },
  {
    id: "assignments",
    name: "Assignments",
    category: "BASICS",
    description: "How variables are declared and assigned values.",
  },
  {
    id: "type-annotations",
    name: "Type Annotations",
    category: "BASICS",
    description: "How types are explicitly specified for variables, functions, and data structures.",
  },
  {
    id: "lexical-blocks",
    name: "Lexical Blocks",
    category: "BASICS",
    description: "How code is organized into blocks and scopes.",
  },
  {
    id: "constants",
    name: "Constants",
    category: "BASICS",
    description: "How constant values are defined and used.",
  },

  // FUNCTIONS
  {
    id: "function-definitions",
    name: "Function Definitions",
    category: "FUNCTIONS",
    description: "How functions are defined, including parameters, return types, and function expressions.",
  },
  {
    id: "anonymous-functions",
    name: "Anonymous Functions",
    category: "FUNCTIONS",
    description: "How to define functions without names, often used as callbacks or for functional programming.",
  },
  {
    id: "function-arguments",
    name: "Function Arguments",
    category: "FUNCTIONS",
    description: "How function arguments are defined, passed, and handled.",
  },
  {
    id: "generics",
    name: "Generics",
    category: "FUNCTIONS",
    description: "How to write functions and types that work with multiple types.",
  },

  // FLOW CONTROL
  {
    id: "pattern-matching",
    name: "Pattern Matching",
    category: "FLOW CONTROL",
    description:
      "Pattern matching is a mechanism for checking a value against a pattern. In Gleam, it's done with the 'case' expression, while TypeScript uses 'switch' statements or conditional checks.",
  },
  {
    id: "if-else",
    name: "If/Else Statements",
    category: "FLOW CONTROL",
    description: "How conditional logic is expressed using if/else constructs.",
  },
  {
    id: "recursion",
    name: "Recursion",
    category: "FLOW CONTROL",
    description: "How functions can call themselves to solve problems recursively.",
  },
  {
    id: "guards",
    name: "Guards",
    category: "FLOW CONTROL",
    description: "How additional conditions can be applied in pattern matching and function definitions.",
  },
  {
    id: "loops",
    name: "Loops",
    category: "FLOW CONTROL",
    description: "How to perform repeated operations using different loop constructs.",
  },
  {
    id: "error-handling",
    name: "Error Handling",
    category: "FLOW CONTROL",
    description: "How errors and exceptional cases are handled in each language.",
  },

  // ADVANCED
  {
    id: "macros",
    name: "Macros",
    category: "ADVANCED",
    description: "How code can be generated or transformed at compile time using macros.",
  },
  {
    id: "basic-networking",
    name: "Basic Networking",
    category: "ADVANCED",
    description: "How to create a basic HTTP server and handle HTTP requests using only built-in libraries.",
  },
  {
    id: "memory-management",
    name: "Memory Management",
    category: "ADVANCED",
    description: "How the language manages memory allocation, deallocation, and garbage collection.",
  },
]

// Create implementations for all concepts
const gleamImplementations: Record<string, { code: string; notes: string }> = {}

// Modules
gleamImplementations["modules"] = {
  code: `// File: math.gleam
// Public functions are exported
pub fn add(a, b) {
a + b
}

pub fn subtract(a, b) {
a - b
}

// Private function (not exported outside the module)
fn square(x) {
x * x
}

// File: main.gleam
import math

fn main() {
let result = math.add(5, 3)  // 8
// math.square(4)  // Error: square is private
}`,
  notes:
    "Gleam uses files as modules with explicit exports via 'pub'. Functions without 'pub' are private to the module.",
}

// Imports
gleamImplementations["imports"] = {
  code: `// Basic import
import math

// Import with alias
import http/response as resp

// Import specific functions
import list.{map, filter, fold}

// Unqualified imports with 'use'
import string
use string.{concat, inspect}

// Using imports
fn example() {
let sum = math.add(1, 2)
let response = resp.new(200)
let doubled = map([1, 2, 3], fn(x) { x * 2 })
let greeting = concat(["Hello, ", "Gleam!"])
}`,
  notes: "Gleam has a simple import system with optional aliasing and selective imports.",
}

// Add more implementations for other concepts...

// For concepts without specific implementations, create default ones
for (const concept of gleamConcepts) {
  if (!gleamImplementations[concept.id]) {
    gleamImplementations[concept.id] = {
      code: `// Example of ${concept.id} in Gleam (placeholder)`,
      notes: `Example of ${concept.id} in Gleam.`,
    }
  }
}

// Export the implementations
export { gleamImplementations }

