// Custom language definition for Rust
export const rustLanguage = {
  name: "rust",
  aliases: ["rust", "rs"],
  keywords: {
    keyword:
      "abstract as async await become box break const continue crate do dyn else enum extern false final fn for if impl in let loop macro match mod move mut override priv pub ref return self Self static struct super trait true try type typeof unsafe unsized use virtual where while yield",
    literal: "true false Some None Ok Err",
    built_in:
      "i8 i16 i32 i64 i128 isize u8 u16 u32 u64 u128 usize f32 f64 str char bool Box Option Result String Vec Copy Clone Drop Send Sync Sized",
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
      begin: 'r#*"',
      end: '"#*',
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
      beginKeywords: "fn",
      end: "(\\(|$)",
      excludeEnd: true,
    },
    {
      className: "type",
      beginKeywords: "struct enum trait type",
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
      className: "macro",
      begin: "\\b[a-zA-Z_][a-zA-Z0-9_]*!",
    },
    {
      className: "lifetime",
      begin: "'[a-zA-Z_][a-zA-Z0-9_]*",
    },
    {
      className: "operator",
      begin: "\\+|\\-|\\*|\\/|\\%|\\=|\\&|\\||\\!|\\>|\\<|\\^",
    },
  ],
}

