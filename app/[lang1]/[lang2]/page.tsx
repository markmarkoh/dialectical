"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams, useParams } from "next/navigation"
import {
  FolderTree,
  Moon,
  Sun,
  Info,
  ActivityIcon as Function,
  Workflow,
  ShieldAlert,
  Brackets,
  Circle,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import CodeComparison from "@/components/code-comparison"
import { programmingConcepts, languages, type Language } from "@/lib/programming-concepts"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { LucideIcon } from "lucide-react"

// Add a hook to detect mobile screens
import { useIsMobile } from "@/hooks/use-mobile"

// Map categories to appropriate icons
const categoryIcons: Record<string, LucideIcon> = {
  BASICS: Brackets,
  FUNCTIONS: Function,
  "FLOW CONTROL": Workflow,
  "ERROR HANDLING": ShieldAlert,
}

// Add the hook to the component
export default function LanguageComparisonPage() {
  const router = useRouter()
  const params = useParams<{ lang1: string; lang2: string }>()
  const searchParams = useSearchParams()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const isMobile = useIsMobile()

  // Find languages from URL params
  const lang1 = languages.find((lang) => lang.id === params.lang1) || languages[4] // Default to Zig
  const lang2 = languages.find((lang) => lang.id === params.lang2) || languages[1] // Default to TypeScript

  // Find concept from URL query param
  const sectionParam = searchParams.get("section")
  const initialConcept = sectionParam
    ? programmingConcepts.find((concept) => concept.id === sectionParam)
    : programmingConcepts[0]

  const [selectedConcept, setSelectedConcept] = useState(initialConcept || programmingConcepts[0])
  const [selectedLanguages, setSelectedLanguages] = useState<[Language, Language]>([lang1, lang2])

  // Ensure theme is only accessed after mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Update URL when selections change
  useEffect(() => {
    const [lang1, lang2] = selectedLanguages
    const url = `/${lang1.id}/${lang2.id}${selectedConcept ? `?section=${selectedConcept.id}` : ""}`
    router.push(url)
  }, [selectedLanguages, selectedConcept, router])

  // Add this new useEffect to scroll to top when selectedConcept changes
  useEffect(() => {
    // Scroll to the top of the page when the selected concept changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [selectedConcept])

  // Group concepts by category
  const conceptsByCategory = programmingConcepts.reduce(
    (acc, concept) => {
      if (!acc[concept.category]) {
        acc[concept.category] = []
      }
      acc[concept.category].push(concept)
      return acc
    },
    {} as Record<string, typeof programmingConcepts>,
  )

  // Get all categories in order
  const categories = ["BASICS", "FUNCTIONS", "FLOW CONTROL", "ADVANCED"]

  // Handle language selection
  const handleLanguageChange = (index: number, languageId: string) => {
    const newLanguage = languages.find((lang) => lang.id === languageId)
    if (!newLanguage) return

    setSelectedLanguages((prev) => {
      const newLanguages = [...prev] as [Language, Language]
      newLanguages[index] = newLanguage
      return newLanguages
    })
  }

  // Get category icon for the selected concept
  const getSelectedConceptCategoryIcon = (): LucideIcon => {
    return categoryIcons[selectedConcept.category] || FolderTree
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-background">
        {/* Make the sidebar responsive with appropriate classes */}
        <Sidebar className="w-64 border-r">
          <SidebarHeader>
            <div className="p-2 space-y-2">
              <div className="flex items-center justify-between mb-2">
                <h1 className="font-bold w-full text-center">
                <span className="rounded-sm bg-black text-white p-[.25rem]">{'{}'}</span> dialectical.dev</h1>              
              </div>
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-medium">Select Languages</h2>
                {mounted && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <div className="space-y-2">
                {selectedLanguages.map((language, index) => (
                  <Select key={index} value={language.id} onValueChange={(value) => handleLanguageChange(index, value)}>
                    <SelectTrigger className="w-full">
                      <div className="flex items-center gap-2 w-full">
                        <div
                          className="h-3 w-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: language.color }}
                        />
                        <span className="truncate">{language.name}</span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem
                          key={lang.id}
                          value={lang.id}
                          disabled={selectedLanguages.findIndex((l) => l.id === lang.id && l !== language) !== -1}
                        >
                          <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: lang.color }} />
                            {lang.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ))}
              </div>
            </div>
            </SidebarHeader>
            <SidebarContent>
            {categories.map((category) => {
              const CategoryIcon = categoryIcons[category] || FolderTree
              return (
                <SidebarGroup key={category}>
                  <SidebarGroupLabel className="flex items-center gap-2 text-[13px]">
                    <CategoryIcon className="h-4 w-4" />
                    {category}
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {conceptsByCategory[category]?.map((concept) => {
                        const isActive = selectedConcept.id === concept.id
                        return (
                          <SidebarMenuItem key={concept.id}>
                            <SidebarMenuButton
                              isActive={isActive}
                              onClick={() => setSelectedConcept(concept)}
                              className="text-[13px]"
                            >
                              <div className="relative flex items-center justify-center w-4 h-4">
                                <Circle className={`h-1.5 w-1.5 ${isActive ? "fill-current" : ""}`} />
                              </div>
                              <span>{concept.name}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              )
            })}
          </SidebarContent>

        </Sidebar>

        <SidebarInset className="flex-1 overflow-auto">
          {/* Add mobile menu button in the header */}
          <header className="flex items-center h-14 px-4 border-b lg:hidden">
            <SidebarTrigger className="mr-2" />
            <h1 className="text-lg font-semibold">Language Comparison</h1>
          </header>

          <main className="flex-1 overflow-auto p-6">
            <div className="mx-auto max-w-6xl">
              <div className="mb-4 flex items-center">
                <div className="flex items-center gap-2">
                  {(() => {
                    const CategoryIcon = getSelectedConceptCategoryIcon()
                    return <CategoryIcon className="h-5 w-5 text-muted-foreground" />
                  })()}
                  <h1 className="text-2xl font-bold tracking-tight">{selectedConcept.name}</h1>
                </div>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="ml-2 h-8 w-8">
                        <Info className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Concept description</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="max-w-md">
                      <p className="text-sm">{selectedConcept.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <CodeComparison concept={selectedConcept} languages={selectedLanguages} />
            </div>
            <div className="w-full mt-2 text-center">
            <a
              href="https://github.com/markmarkoh/dialectical"
              className="text-xs"
            >
                Source & Suggestions: https://github.com/markmarkoh/dialectical
            </a>
          </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

