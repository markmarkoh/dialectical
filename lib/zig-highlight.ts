// Custom language definition for Zig
export const zigLanguage = {
  name: "zig",
  aliases: ["zig"],
  keywords: {
    keyword:
      "align allowzero and anyframe anytype asm async await break callconv catch comptime const continue defer else enum errdefer error export extern fn for if inline noalias noinline nosuspend or orelse packed pub resume return linksection struct suspend switch test threadlocal try union unreachable var volatile while",
    literal: "true false null undefined",
    built_in: "i8 i16 i32 i64 i128 u8 u16 u32 u64 u128 f16 f32 f64 f128 bool void noreturn type anyerror anyframe",
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
      begin: "\\'",
      end: "\\'",
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
      beginKeywords: "fn",
      end: "(\\(|$)",
      excludeEnd: true,
    },
    {
      className: "type",
      beginKeywords: "struct enum union error",
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
      className: "builtin",
      begin: "@[a-zA-Z_][a-zA-Z0-9_]*",
    },
    {
      className: "operator",
      begin: "\\+|\\-|\\*|\\/|\\%|\\=|\\&|\\||\\!|\\>|\\<|\\^",
    },
  ],
}

