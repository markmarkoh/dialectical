"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { type ProgrammingConcept, type Language, getComparison } from "@/lib/programming-concepts"
import { useExamples } from "@/hooks/use-examples"

interface CodeComparisonProps {
  concept: ProgrammingConcept
  languages: [Language, Language]
}

export default function CodeComparison({ concept, languages }: CodeComparisonProps) {
  const [lang1, lang2] = languages

  const { example: lang1Example, loading: lang1Loading, error: lang1Error } = useExamples(lang1.id, concept.id)
  const { example: lang2Example, loading: lang2Loading, error: lang2Error } = useExamples(lang2.id, concept.id)

  // Default implementations to use while loading or if there's an error
  const defaultImpl = {
    code: `// Example not available`,
    notes: `Example not available.`,
  }

  // Get the implementations for the current concept
  const lang1Impl = lang1Example || defaultImpl
  const lang2Impl = lang2Example || defaultImpl

  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Notes and Explanations */}
      <div>
        <Tabs defaultValue="comparison">
          <TabsList>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value={lang1.id}>{lang1.name} Notes</TabsTrigger>
            <TabsTrigger value={lang2.id}>{lang2.name} Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="comparison" className="mt-4 rounded-md border p-4 text-[13px]">
            <h3 className="mb-2 text-lg font-medium">Key Differences</h3>
            <p>{getComparison(concept, lang1.id, lang2.id)}</p>
          </TabsContent>
          <TabsContent value={lang1.id} className="mt-4 rounded-md border p-4 text-[13px]">
            <h3 className="mb-2 text-lg font-medium">{lang1.name} Implementation</h3>
            <p>{lang1Impl.notes}</p>
          </TabsContent>
          <TabsContent value={lang2.id} className="mt-4 rounded-md border p-4 text-[13px]">
            <h3 className="mb-2 text-lg font-medium">{lang2.name} Implementation</h3>
            <p>{lang2Impl.notes}</p>
          </TabsContent>
        </Tabs>
      </div>

      <div className="border rounded-md overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x h-full">
          {/* First Language Implementation */}
          <div className="overflow-hidden flex flex-col h-full">
            <div style={{ backgroundColor: `${lang1.color}10` }} className="border-b px-4 py-2">
              <h3 className="flex items-center gap-2 text-sm font-medium">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: lang1.color }} />
                {lang1.name}
                {lang1Loading && <span className="text-xs text-muted-foreground ml-2">(Loading...)</span>}
                {lang1Error && <span className="text-xs text-red-500 ml-2">(Error loading example)</span>}
              </h3>
            </div>
            <div className="flex-1 flex flex-col h-full">
              <div className="h-full">
                <CodeBlock
                  key={`${lang1.id}-${concept.id}-${lang1Loading ? "loading" : "loaded"}`}
                  code={lang1Impl.code}
                  language={lang1.id}
                  showLineNumbers={false}
                  className="h-full"
                />
              </div>
            </div>
          </div>

          {/* Second Language Implementation */}
          <div className="overflow-hidden flex flex-col h-full">
            <div style={{ backgroundColor: `${lang2.color}10` }} className="border-b px-4 py-2">
              <h3 className="flex items-center gap-2 text-sm font-medium">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: lang2.color }} />
                {lang2.name}
                {lang2Loading && <span className="text-xs text-muted-foreground ml-2">(Loading...)</span>}
                {lang2Error && <span className="text-xs text-red-500 ml-2">(Error loading example)</span>}
              </h3>
            </div>
            <div className="flex-1 flex flex-col h-full">
              <div className="h-full">
                <CodeBlock
                  key={`${lang2.id}-${concept.id}-${lang2Loading ? "loading" : "loaded"}`}
                  code={lang2Impl.code}
                  language={lang2.id}
                  showLineNumbers={false}
                  className="h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

