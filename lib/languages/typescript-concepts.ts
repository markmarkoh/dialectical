import { gleamConcepts } from "./gleam-concepts"

// Create implementations for all concepts
const typescriptImplementations: Record<string, { code: string; notes: string }> = {}

// Modules
typescriptImplementations["modules"] = {
  code: `// File: math.ts
// Exported functions
export function add(a: number, b: number): number {
 return a + b
}

export function subtract(a: number, b: number): number {
 return a - b
}

// Private function (not exported)
function square(x: number): number {
 return x * x
}

// File: main.ts
import { add } from "./math"
// or import * as math from './math';

function main() {
 const result = add(5, 3) // 8
 // square(4);  // Error: square is not exported
}`,
  notes:
    "TypeScript uses files as modules with explicit exports using 'export' keywords. Functions and variables not exported are private to the module. TypeScript supports both named and default exports, giving flexibility in how modules are structured and consumed.",
}

// Imports
typescriptImplementations["imports"] = {
  code: `// Dynamic import (async)
async function loadModule() {
 const module = await import("./dynamicModule")
 module.doSomething()
}`,
  notes:
    "TypeScript offers various import styles including named, default, and namespace imports. It also supports dynamic imports for code splitting, allowing modules to be loaded on demand for better performance in large applications.",
}

// Add more implementations for other concepts...

// For concepts without specific implementations, create default ones
for (const concept of gleamConcepts) {
  if (!typescriptImplementations[concept.id]) {
    typescriptImplementations[concept.id] = {
      code: `// Example of ${concept.id} in TypeScript (placeholder)`,
      notes: `Example of ${concept.id} in TypeScript.`,
    }
  }
}

// Export the implementations
export { typescriptImplementations }

