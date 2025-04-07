// Custom language definition for Kotlin
export const kotlinLanguage = {
  name: "kotlin",
  aliases: ["kotlin", "kt"],
  keywords: {
    keyword:
      "abstract as break by catch class companion const constructor continue crossinline data do dynamic else enum external final finally for fun get if import in infix init inline inner interface internal is lateinit noinline null object open operator out override package private protected public reified return sealed set super suspend tailrec this throw try typealias val var vararg when where while",
    literal: "true false null",
    built_in: "Array Boolean Byte Char Double Float Int Long Nothing Short String Unit",
  },
  contains: [
    {
      className: "string",
      begin: '"',
      end: '"',
      contains: [{ begin: "\\\\." }],
    },
    {
      className: "string",
      begin: "'''",
      end: "'''",
    },
    {
      className: "comment",
      begin: "//",
      end: "$",
      contains: [
        {
          begin:
            "\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b",
        },
      ],
    },
    {
      className: "comment",
      begin: "/\\*",
      end: "\\*/",
      contains: [
        {
          begin:
            "\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b",
        },
      ],
    },
    {
      className: "function",
      beginKeywords: "fun",
      end: "(\\(|$)",
      excludeEnd: true,
    },
    {
      className: "class",
      beginKeywords: "class interface",
      end: "(\\{|$)",
      excludeEnd: true,
    },
    {
      className: "variable",
      begin: "\\b[a-z_][a-zA-Z0-9_]*\\b",
    },
    {
      className: "number",
      begin: "\\b\\d+(\\.\\d+)?",
    },
    {
      className: "operator",
      begin: "\\+|\\-|\\*|\\/|\\%|\\=|\\&|\\||\\!|\\>|\\<|\\^",
    },
  ],
}

