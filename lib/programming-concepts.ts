import { ProgrammingConcept, languages, Language } from "@/lib/types"
import { comparisons } from "@/lib/comparisons"

// Base concepts without comparisons
const gleamConcepts: Omit<ProgrammingConcept, "implementations">[] = [
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
    description: "How to create a basic HTTP server and handle HTTP requests using only built-in libraries.",
  },
]

// Combine the concepts without implementations
export const programmingConcepts: ProgrammingConcept[] = gleamConcepts.map((concept) => {
  return {
    ...concept,
    implementations: {}, // Empty implementations - will be loaded via API
  }
})

// Re-export types and languages
export { ProgrammingConcept, languages, Language }

// Helper function to get a comparison between two languages
export function getComparison(concept: ProgrammingConcept, lang1: string, lang2: string): string {
  // Try to get a specific comparison if available
  if (comparisons[concept.id]?.[lang1]?.[lang2]) {
    return comparisons[concept.id][lang1][lang2]
  }

  // Try the reverse order
  if (comparisons[concept.id]?.[lang2]?.[lang1]) {
    return comparisons[concept.id][lang2][lang1]
  }

  // Generate a generic comparison if no specific one exists
  return `Comparison of ${concept.name} between ${lang1} and ${lang2}.`
}

