"use client"

import { useState, useEffect } from "react"

export function useExamples(language: string, concept: string) {
  const [example, setExample] = useState<{ code: string; notes: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchExample() {
      try {
        setLoading(true)
        const response = await fetch(`/api/examples/${language}/${concept}`)

        if (!response.ok) {
          // If the response is not OK, we still want to parse it as it may contain fallback content
          const data = await response.json()
          setExample(data)
        } else {
          const data = await response.json()
          setExample(data)
        }

        setLoading(false)
      } catch (err) {
        console.error(`Error fetching example for ${language}/${concept}:`, err)
        setError(err instanceof Error ? err : new Error(String(err)))
        setLoading(false)

        // Provide a fallback
        setExample({
          code: `// Error loading example for ${concept} in ${language}`,
          notes: `Error loading example.`,
        })
      }
    }

    fetchExample()
  }, [language, concept])

  return { example, loading, error }
}

