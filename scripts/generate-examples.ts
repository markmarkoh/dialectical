import * as fs from "fs"
import * as path from "path"

// Languages to process
const languages = ["gleam", "typescript", "elixir", "rust", "zig", "python", "go", "kotlin", "nim"]

// Concepts to process
const concepts = [
  "modules",
  "imports",
  "type-checking",
  "scalar-types",
  "assignments",
  "type-annotations",
  "lexical-blocks",
  "constants",
  "function-definitions",
  "anonymous-functions",
  "function-arguments",
  "generics",
  "pattern-matching",
  "if-else",
  "recursion",
  "guards",
  "error-handling",
  "loops",
  "macros",
  "basic-networking",
]

// Create the output directory if it doesn't exist
const outputDir = path.join(process.cwd(), "public", "examples")
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
  console.log(`Created directory: ${outputDir}`)
}

// Process each language
for (const language of languages) {
  const languageDir = path.join(process.cwd(), "lib", "languages", language)

  // Default empty implementations for all concepts
  const defaultImplementations: Record<string, { code: string; notes: string }> = {}

  // Create default implementations for all concepts
  for (const concept of concepts) {
    defaultImplementations[concept] = {
      code: `// Example of ${concept} in ${language} (placeholder)`,
      notes: `Example of ${concept} in ${language}.`,
    }
  }

  // Skip if language directory doesn't exist
  if (!fs.existsSync(languageDir)) {
    console.log(`Skipping ${language} - directory not found: ${languageDir}`)

    // Create an implementation file with default empty implementations
    const outputPath = path.join(outputDir, `${language}.json`)
    const output = JSON.stringify(defaultImplementations, null, 2)
    fs.writeFileSync(outputPath, output)
    console.log(`Generated default file: ${outputPath}`)
    continue
  }

  const examples: Record<string, { code: string; notes: string }> = { ...defaultImplementations }

  // Read the notes file if it exists
  const notesPath = path.join(languageDir, `${language}-notes.json`)
  let notes: Record<string, string> = {}
  if (fs.existsSync(notesPath)) {
    try {
      notes = JSON.parse(fs.readFileSync(notesPath, "utf8"))
    } catch (error) {
      console.error(`Error parsing notes file ${notesPath}:`, error)
    }
  }

  // Process each concept
  for (const concept of concepts) {
    const filePath = path.join(languageDir, `${concept}.${getExtension(language)}`)
    if (fs.existsSync(filePath)) {
      try {
        const code = fs.readFileSync(filePath, "utf8")
        examples[concept] = {
          code,
          notes: notes[concept] || `Example of ${concept} in ${language}.`,
        }
      } catch (error) {
        console.error(`Error reading file ${filePath}:`, error)
      }
    } else {
      console.log(`Skipping ${language}/${concept} - file not found: ${filePath}`)
    }
  }

  // Generate the output file as JSON
  const outputPath = path.join(outputDir, `${language}.json`)
  const output = JSON.stringify(examples, null, 2)

  try {
    fs.writeFileSync(outputPath, output)
    console.log(`Generated ${outputPath}`)
  } catch (error) {
    console.error(`Error writing file ${outputPath}:`, error)
  }
}

function getExtension(language: string): string {
  const extensions: Record<string, string> = {
    gleam: "gleam",
    typescript: "ts",
    elixir: "ex",
    rust: "rs",
    zig: "zig",
    python: "py",
    go: "go",
    kotlin: "kt",
    nim: "nim",
  }
  return extensions[language] || language
}

console.log("All example files generated successfully!")

