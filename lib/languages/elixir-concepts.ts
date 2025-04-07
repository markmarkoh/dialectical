import { gleamConcepts } from "./gleam-concepts"

// Create implementations for all concepts
const elixirImplementations: Record<string, { code: string; notes: string }> = {}

// Modules
elixirImplementations["modules"] = {
  code: `# File: math.ex
defmodule Math do
 # Public functions
 def add(a, b) do
   a + b
 end

 def subtract(a, b) do
   a - b
 end

 # Private function
 defp square(x) do
   x * x
 end
end

# File: main.ex
defmodule Main do
 def run do
   result = Math.add(5, 3)  # 8
   # Math.square(4)  # Error: square is private
 end
end`,
  notes:
    "Elixir organizes code into modules with explicit 'defmodule' blocks. Public functions are defined with 'def' and private functions with 'defp'. This clear distinction makes it easy to understand the public API of a module.",
}

// Add more implementations for other concepts...

// For concepts without specific implementations, create default ones
for (const concept of gleamConcepts) {
  if (!elixirImplementations[concept.id]) {
    elixirImplementations[concept.id] = {
      code: `# Example of ${concept.id} in Elixir (placeholder)`,
      notes: `Example of ${concept.id} in Elixir.`,
    }
  }
}

// Export the implementations
export { elixirImplementations }

