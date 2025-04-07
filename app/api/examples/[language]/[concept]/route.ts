import { type NextRequest, NextResponse } from "next/server"
import path from "path"
import fs from "fs"

export async function GET(request: NextRequest, { params }: { params: { language: string; concept: string } }) {
  const { language, concept } = params

  try {
    // Construct the file path
    const filePath = path.join(process.cwd(), "lib", "languages", language, `${concept}.${getExtension(language)}`)

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        {
          code: `// Example of ${concept} in ${language} not found`,
          notes: `Example not available.`,
        },
        { status: 404 },
      )
    }

    // Read the file
    const code = fs.readFileSync(filePath, "utf8")

    // Try to read notes if they exist
    let notes = `Example of ${concept} in ${language}.`
    const notesPath = path.join(process.cwd(), "lib", "languages", language, `${language}-notes.json`)

    if (fs.existsSync(notesPath)) {
      try {
        const notesJson = JSON.parse(fs.readFileSync(notesPath, "utf8"))
        if (notesJson[concept]) {
          notes = notesJson[concept]
        }
      } catch (error) {
        console.error(`Error reading notes for ${language}/${concept}:`, error)
      }
    }

    // Return the code and notes
    return NextResponse.json({ code, notes })
  } catch (error) {
    console.error(`Error reading example for ${language}/${concept}:`, error)
    return NextResponse.json(
      {
        code: `// Error loading example for ${concept} in ${language}`,
        notes: `Error loading example.`,
      },
      { status: 500 },
    )
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

