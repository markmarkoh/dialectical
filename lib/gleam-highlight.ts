// Custom language definition for Gleam
export const gleamLanguage = {
  name: "gleam",
  aliases: ["gleam"],
  keywords: {
    keyword: "case fn if else import let pub type use as external",
    literal: "True False",
    built_in: "Ok Error Nil",
  },
  contains: [
    {
      className: "string",
      begin: '"',
      end: '"',
      contains: [{ begin: "\\\\." }],
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
      className: "function",
      beginKeywords: "fn pub",
      end: "(\\(|$)",
      excludeEnd: true,
    },
    {
      className: "type",
      beginKeywords: "type",
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
      begin: "->|<>|\\|>|\\.\\.|\\.\\.|\\+|\\-|\\*|/|<=|>=|==|!=|<|>|\\!|&&|\\|\\|",
    },
  ],
}

