import { gleamConcepts } from "./gleam-concepts"

// Default empty implementations
const defaultImplementations: Record<string, { code: string; notes: string }> = {}

// Create default implementations for all concepts
for (const concept of gleamConcepts) {
  defaultImplementations[concept.id] = {
    code: `// Example of ${concept.id} in Kotlin (placeholder)`,
    notes: `Example of ${concept.id} in Kotlin.`,
  }
}

// Try to import the generated implementations
let kotlinImplementations: Record<string, { code: string; notes: string }>

// Use dynamic import() for the browser
if (typeof window !== "undefined") {
  // We're in the browser, use the default implementations for now
  kotlinImplementations = defaultImplementations

  // Try to dynamically load the generated file
  import("../generated/kotlin-examples")
    .then((module) => {
      // If successful, update the implementations
      if (module && module.kotlinImplementations) {
        kotlinImplementations = module.kotlinImplementations
      }
    })
    .catch((error) => {
      console.warn("Could not import generated kotlin examples, using default implementations")
    })
} else {
  // We're on the server, try to require the generated file
  try {
    const generated = require("../generated/kotlin-examples")
    kotlinImplementations = generated.kotlinImplementations || defaultImplementations
  } catch (error) {
    console.warn("Could not import generated kotlin examples, using default implementations")
    kotlinImplementations = defaultImplementations
  }
}

// Export the implementations
export { kotlinImplementations }

