export const goLanguage = {
  name: "go",
  aliases: ["golang"],
  keywords: {
    keyword:
      "break default func interface select case defer go map struct chan else goto package switch " +
      "const fallthrough if range type continue for import return var",
    type:
      "bool byte complex64 complex128 error float32 float64 " +
      "int int8 int16 int32 int64 rune string " +
      "uint uint8 uint16 uint32 uint64 uintptr",
    literal: "true false iota nil",
    built_in: "append cap close complex copy delete imag len " + "make new panic print println real recover",
  },
  contains: [
    {
      className: "string",
      variants: [
        {
          begin: '"',
          end: '"',
          contains: [{ begin: "\\\\." }],
        },
        {
          begin: "`",
          end: "`",
        },
      ],
    },
    {
      className: "number",
      variants: [
        { begin: "\\b0x[0-9a-fA-F]+" }, // hex
        { begin: "\\b\\d+(\\.\\d+)?" }, // decimal/float
      ],
    },
    {
      className: "comment",
      variants: [
        { begin: "//", end: "$" },
        { begin: "/\\*", end: "\\*/" },
      ],
    },
    {
      className: "function",
      beginKeywords: "func",
      end: "\\s*(\\{|$)",
      excludeEnd: true,
      contains: [
        {
          className: "title",
          begin: "[a-zA-Z_]\\w*",
          relevance: 0,
        },
        {
          className: "params",
          begin: "\\(",
          end: "\\)",
          keywords: {
            keyword:
              "break default func interface select case defer go map struct chan else goto package switch " +
              "const fallthrough if range type continue for import return var",
            type:
              "bool byte complex64 complex128 error float32 float64 " +
              "int int8 int16 int32 int64 rune string " +
              "uint uint8 uint16 uint32 uint64 uintptr",
            literal: "true false iota nil",
          },
          contains: [
            {
              className: "string",
              variants: [
                {
                  begin: '"',
                  end: '"',
                  contains: [{ begin: "\\\\." }],
                },
                {
                  begin: "`",
                  end: "`",
                },
              ],
            },
            {
              className: "comment",
              variants: [
                { begin: "//", end: "$" },
                { begin: "/\\*", end: "\\*/" },
              ],
            },
          ],
        },
      ],
    },
  ],
}

