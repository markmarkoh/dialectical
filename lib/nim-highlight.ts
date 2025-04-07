// Custom language definition for Nim
export const nimLanguage = {
  name: "nim",
  aliases: ["nim"],
  keywords: {
    keyword:
      "addr and as asm bind block break case cast concept const continue converter defer discard distinct div do elif else end enum except export finally for from func if import in include interface is isnot iterator let macro method mixin mod nil not notin object of or out proc ptr raise ref return shl shr static template try type using var when while xor yield",
    literal: "true false nil",
    built_in:
      "int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float float32 float64 bool char string seq array tuple set pointer auto any void",
  },
  contains: [
    {
      className: "string",
      variants: [
        {
          begin: '"""',
          end: '"""',
        },
        {
          begin: '"',
          end: '"',
          contains: [{ begin: "\\\\." }],
        },
        {
          begin: "'",
          end: "'",
          contains: [{ begin: "\\\\." }],
        },
      ],
    },
    {
      className: "comment",
      begin: "#",
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
      beginKeywords: "proc func method iterator macro",
      end: "\\s*(\\(|=|:)",
      excludeEnd: true,
    },
    {
      className: "type",
      beginKeywords: "type object enum",
      end: "\\s*(=|:)",
      excludeEnd: true,
    },
    {
      className: "number",
      relevance: 0,
      variants: [
        { begin: "\\b0[xX][0-9a-fA-F]+\\b" }, // hex
        { begin: "\\b\\d+(\\.\\d+)?([eE][+-]?\\d+)?\\b" }, // float/scientific
      ],
    },
    {
      className: "meta",
      begin: "{\\.",
      end: "\\.}",
      relevance: 10,
    },
    {
      className: "meta",
      begin: "^#",
      end: "$",
      relevance: 2,
    },
  ],
}

