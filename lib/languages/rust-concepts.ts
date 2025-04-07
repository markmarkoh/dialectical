import { gleamConcepts } from "./gleam-concepts"

// Default empty implementations
const defaultImplementations: Record<string, { code: string; notes: string }> = {}

// Create default implementations for all concepts
for (const concept of gleamConcepts) {
  defaultImplementations[concept.id] = {
    code: `// Example of ${concept.id} in Rust (placeholder)`,
    notes: `Example of ${concept.id} in Rust.`,
  }
}

// Try to import the generated implementations
let rustImplementations: Record<string, { code: string; notes: string }>

// Use dynamic import() for the browser
if (typeof window !== "undefined") {
  // We're in the browser, use the default implementations for now
  rustImplementations = defaultImplementations

  // Try to dynamically load the generated file
  import("../generated/rust-examples")
    .then((module) => {
      // If successful, update the implementations
      if (module && module.rustImplementations) {
        rustImplementations = module.rustImplementations
      }
    })
    .catch((error) => {
      console.warn("Could not import generated rust examples, using default implementations")
    })
} else {
  // We're on the server, try to require the generated file
  try {
    const generated = require("../generated/rust-examples")
    rustImplementations = generated.rustImplementations || defaultImplementations
  } catch (error) {
    console.warn("Could not import generated rust examples, using default implementations")
    rustImplementations = defaultImplementations
  }
}

// Export the implementations
export { rustImplementations }

