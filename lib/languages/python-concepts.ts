import { gleamConcepts } from "./gleam-concepts"

// Default empty implementations
const defaultImplementations: Record<string, { code: string; notes: string }> = {}

// Create default implementations for all concepts
for (const concept of gleamConcepts) {
  defaultImplementations[concept.id] = {
    code: `# Example of ${concept.id} in Python (placeholder)`,
    notes: `Example of ${concept.id} in Python.`,
  }
}

// Try to import the generated implementations
let pythonImplementations: Record<string, { code: string; notes: string }>

// Use dynamic import() for the browser
if (typeof window !== "undefined") {
  // We're in the browser, use the default implementations for now
  pythonImplementations = defaultImplementations

  // Try to dynamically load the generated file
  import("../generated/python-examples")
    .then((module) => {
      // If successful, update the implementations
      if (module && module.pythonImplementations) {
        pythonImplementations = module.pythonImplementations
      }
    })
    .catch((error) => {
      console.warn("Could not import generated python examples, using default implementations")
    })
} else {
  // We're on the server, try to require the generated file
  try {
    const generated = require("../generated/python-examples")
    pythonImplementations = generated.pythonImplementations || defaultImplementations
  } catch (error) {
    console.warn("Could not import generated python examples, using default implementations")
    pythonImplementations = defaultImplementations
  }
}

// Export the implementations
export { pythonImplementations }

