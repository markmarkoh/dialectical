// Custom language definition for Python
export const pythonLanguage = {
  name: "python",
  aliases: ["python", "py"],
  keywords: {
    keyword:
      "and as assert break class continue def del elif else except exec finally for from global if import in is lambda nonlocal not or pass print raise return try while with yield",
    literal: "True False None NotImplemented Ellipsis __debug__",
    built_in:
      "abs all any bin bool bytearray bytes callable chr classmethod compile complex delattr dict dir divmod enumerate eval filter float format frozenset getattr globals hasattr hash help hex id input int isinstance issubclass iter len list locals map max memoryview min next object oct open ord pow property range repr reversed round set setattr slice sorted staticmethod str sum super tuple type vars zip",
  },
  contains: [
    {
      className: "meta",
      begin: /^(>>>|\.\.\.) /,
    },
    {
      className: "string",
      contains: [{ begin: /\\\n/ }],
      variants: [
        {
          begin: /b?''/,
          end: /b?''/,
          contains: [{ begin: /''/ }],
        },
        {
          begin: /b?"""/,
          end: /b?"""/,
          contains: [{ begin: /"""/ }],
        },
        {
          begin: /b?'/,
          end: /'/,
          contains: [{ begin: /\\./ }],
        },
        {
          begin: /b?"/,
          end: /"/,
          contains: [{ begin: /\\./ }],
        },
      ],
    },
    {
      className: "comment",
      begin: /#/,
      end: /$/,
      contains: [
        {
          begin:
            "\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\\b",
        },
      ],
    },
    {
      className: "function",
      beginKeywords: "def",
      end: /:/,
      excludeEnd: true,
      contains: [
        {
          className: "title",
          begin: /[a-zA-Z_][a-zA-Z0-9_]*/,
          relevance: 0,
        },
      ],
    },
    {
      className: "class",
      beginKeywords: "class",
      end: /:/,
      excludeEnd: true,
      contains: [
        {
          className: "title",
          begin: /[a-zA-Z_][a-zA-Z0-9_]*/,
          relevance: 0,
        },
      ],
    },
    {
      className: "decorator",
      begin: /@/,
      end: /$/,
      contains: [
        {
          className: "title",
          begin: /[a-zA-Z_][a-zA-Z0-9_]*/,
          relevance: 0,
        },
      ],
    },
    {
      className: "number",
      begin: /\b\d+(\.\d+)?/,
      relevance: 0,
    },
  ],
}

