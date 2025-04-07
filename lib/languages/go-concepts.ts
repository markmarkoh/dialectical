import { gleamConcepts } from "./gleam-concepts"

// Default empty implementations
const defaultImplementations: Record<string, { code: string; notes: string }> = {}

// Create default implementations for all concepts
for (const concept of gleamConcepts) {
  defaultImplementations[concept.id] = {
    code: `// Example of ${concept.id} in Go (placeholder)`,
    notes: `Example of ${concept.id} in Go.`,
  }
}

// Try to import the generated implementations
let goImplementations: Record<string, { code: string; notes: string }>

// Use dynamic import() for the browser
if (typeof window !== "undefined") {
  // We're in the browser, use the default implementations for now
  goImplementations = defaultImplementations

  // Try to dynamically load the generated file
  import("../generated/go-examples")
    .then((module) => {
      // If successful, update the implementations
      if (module && module.goImplementations) {
        goImplementations = module.goImplementations
      }
    })
    .catch((error) => {
      console.warn("Could not import generated go examples, using default implementations")
    })
} else {
  // We're on the server, try to require the generated file
  try {
    const generated = require("../generated/go-examples")
    goImplementations = generated.goImplementations || defaultImplementations
  } catch (error) {
    console.warn("Could not import generated go examples, using default implementations")
    goImplementations = defaultImplementations
  }
}

// Export the implementations
export { goImplementations }

