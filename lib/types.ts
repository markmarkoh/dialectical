// Define supported languages and their metadata
export interface Language {
  id: string
  name: string
  color: string
  fileExtension: string
}

export const languages: Language[] = [
  {
    id: "gleam",
    name: "Gleam",
    color: "#ffaff3",
    fileExtension: ".gleam",
  },
  {
    id: "typescript",
    name: "TypeScript",
    color: "#3178c6",
    fileExtension: ".ts",
  },
  {
    id: "elixir",
    name: "Elixir",
    color: "#9768d1",
    fileExtension: ".ex",
  },
  {
    id: "rust",
    name: "Rust",
    color: "#dea584",
    fileExtension: ".rs",
  },
  {
    id: "zig",
    name: "Zig",
    color: "#f7a41d",
    fileExtension: ".zig",
  },
  {
    id: "python",
    name: "Python",
    color: "#3572A5",
    fileExtension: ".py",
  },
  {
    id: "go",
    name: "Go",
    color: "#00ADD8",
    fileExtension: ".go",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    color: "#A97BFF",
    fileExtension: ".kt",
  },
  {
    id: "nim",
    name: "Nim",
    color: "#FFE953",
    fileExtension: ".nim",
  },
]

// Concept interface to support multiple languages
export interface ProgrammingConcept {
  id: string
  name: string
  category: string
  description: string
  implementations: Record<
    string,
    {
      code: string
      notes: string
    }
  >
}

