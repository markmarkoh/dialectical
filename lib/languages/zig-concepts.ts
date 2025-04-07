import { gleamConcepts } from "./gleam-concepts"

// Default empty implementations
const defaultImplementations: Record<string, { code: string; notes: string }> = {}

// Create default implementations for all concepts
for (const concept of gleamConcepts) {
  defaultImplementations[concept.id] = {
    code: `// Example of ${concept.id} in Zig (placeholder)`,
    notes: `Example of ${concept.id} in Zig.`,
  }
}

// Try to import the generated implementations
let zigImplementations: Record<string, { code: string; notes: string }>

// Use dynamic import() for the browser
if (typeof window !== "undefined") {
  // We're in the browser, use the default implementations for now
  zigImplementations = defaultImplementations

  // Try to dynamically load the generated file
  import("../generated/zig-examples")
    .then((module) => {
      // If successful, update the implementations
      if (module && module.zigImplementations) {
        zigImplementations = module.zigImplementations
      }
    })
    .catch((error) => {
      console.warn("Could not import generated zig examples, using default implementations")
    })
} else {
  // We're on the server, try to require the generated file
  try {
    const generated = require("../generated/zig-examples")
    zigImplementations = generated.zigImplementations || defaultImplementations
  } catch (error) {
    console.warn("Could not import generated zig examples, using default implementations")
    zigImplementations = defaultImplementations
  }
}

// Export the implementations
export { zigImplementations }

