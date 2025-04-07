"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Clipboard, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

// Import highlight.js core
import hljs from "highlight.js/lib/core"

// Import standard languages that exist in highlight.js
import javascript from "highlight.js/lib/languages/javascript"
import typescript from "highlight.js/lib/languages/typescript"
import python from "highlight.js/lib/languages/python"
import go from "highlight.js/lib/languages/go"

// Import our custom language definitions
import { gleamLanguage } from "@/lib/gleam-highlight"
import { elixirLanguage } from "@/lib/elixir-highlight"
import { rustLanguage } from "@/lib/rust-highlight"
import { zigLanguage } from "@/lib/zig-highlight"
import { pythonLanguage } from "@/lib/python-highlight"
import { goLanguage } from "@/lib/go-highlight"
import { kotlinLanguage } from "@/lib/kotlin-highlight"
// Import the Nim language definition
import { nimLanguage } from "@/lib/nim-highlight"

// Register standard languages
hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("typescript", typescript)
hljs.registerLanguage("python", python)
hljs.registerLanguage("go", go)

// Register our custom language definitions
hljs.registerLanguage("gleam", () => gleamLanguage)
hljs.registerLanguage("elixir", () => elixirLanguage)
hljs.registerLanguage("rust", () => rustLanguage)
hljs.registerLanguage("zig", () => zigLanguage)
hljs.registerLanguage("python", () => pythonLanguage)
hljs.registerLanguage("go", () => goLanguage)
hljs.registerLanguage("kotlin", () => kotlinLanguage)
// Register the Nim language
hljs.registerLanguage("nim", () => nimLanguage)

interface CodeBlockProps {
  code: string
  language: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({ code, language, showLineNumbers = false, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)
  const codeRef = useRef<HTMLElement>(null)
  const preRef = useRef<HTMLPreElement>(null)
  const { resolvedTheme } = useTheme()

  // Determine if dark theme based on resolved theme
  const isDarkTheme = resolvedTheme === "dark"

  // Set mounted state after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  // This effect will run whenever the code, language, or theme changes
  useEffect(() => {
    if (codeRef.current && mounted) {
      // Clear any existing highlighting
      codeRef.current.textContent = code

      // Reset the highlighted state
      if (codeRef.current.dataset.highlighted) {
        delete codeRef.current.dataset.highlighted
      }

      // Apply new highlighting
      hljs.highlightElement(codeRef.current)

      // Apply theme-specific styles directly
      if (preRef.current) {
        if (isDarkTheme) {
          preRef.current.style.background = "#282c34"
          preRef.current.style.color = "#abb2bf"
        } else {
          preRef.current.style.background = "#fafafa"
          preRef.current.style.color = "#383a42"
        }
      }
    }
  }, [code, language, isDarkTheme, mounted])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
  }

  // If not mounted yet, return a placeholder to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className={cn("relative bg-gray-100 dark:bg-gray-800 h-full", className)}>
        <pre className="overflow-x-auto p-4 h-full">
          <code className="text-sm">Loading...</code>
        </pre>
      </div>
    )
  }

  return (
    <div className={cn("relative group h-full", className)}>
      <pre
        ref={preRef}
        className={cn("overflow-x-auto h-full", isDarkTheme ? "hljs-dark" : "hljs-light")}
        style={{
          background: isDarkTheme ? "#282c34" : "#fafafa",
          color: isDarkTheme ? "#abb2bf" : "#383a42",
          height: "100%",
        }}
      >
        {showLineNumbers && (
          <div
            className={cn(
              "absolute left-0 top-0 bottom-0 w-12 flex flex-col items-end pr-2 text-xs select-none",
              isDarkTheme ? "bg-[#21252b] text-gray-500" : "bg-[#f0f0f0] text-gray-400",
            )}
          >
            {code.split("\n").map((_, i) => (
              <div key={i} className="leading-6 h-6 py-0">
                {i + 1}
              </div>
            ))}
          </div>
        )}
        <code
          ref={codeRef}
          className={cn(
            `language-${language}`,
            showLineNumbers ? "pl-12" : "pl-4",
            "pr-4 py-4 block text-sm leading-6 h-full",
          )}
        >
          {code}
        </code>
      </pre>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="ghost"
          size="icon"
          className={cn("h-8 w-8", isDarkTheme ? "bg-gray-800/80" : "bg-white/80")}
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
          <span className="sr-only">Copy code</span>
        </Button>
      </div>
      <div className="absolute bottom-2 right-2 opacity-30 group-hover:opacity-60 transition-opacity">
        <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
          <Code2 className="h-3 w-3" />
          <span>{language}</span>
        </div>
      </div>
    </div>
  )
}

