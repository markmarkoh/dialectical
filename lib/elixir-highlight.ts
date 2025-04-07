// Custom language definition for Elixir
export const elixirLanguage = {
  name: "elixir",
  aliases: ["elixir", "ex"],
  keywords: {
    keyword:
      "def defp defmodule defprotocol defimpl defrecord defstruct defmacro defmacrop defdelegate defexception defoverridable defguard import require alias use if else unless cond case when try catch rescue receive after for in with fn do end",
    literal: "true false nil",
    built_in: "atom binary bitstring boolean float function integer list map pid port record reference tuple",
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
      begin: "'",
      end: "'",
      contains: [{ begin: "\\\\." }],
    },
    {
      className: "comment",
      begin: "#",
      end: "$",
    },
    {
      className: "function",
      beginKeywords: "def defp",
      end: "do:?|\\(|$",
      excludeEnd: true,
    },
    {
      className: "module",
      beginKeywords: "defmodule defprotocol defimpl",
      end: "do|$",
      excludeEnd: true,
    },
    {
      className: "variable",
      begin: "\\b[a-z_][a-zA-Z0-9_]*\\b",
    },
    {
      className: "symbol",
      begin: ":",
      end: "[a-zA-Z_]\\w*",
    },
    {
      className: "number",
      begin: "\\b\\d+(\\.\\d+)?",
    },
    {
      className: "operator",
      begin: "\\+|\\-|\\*|\\/|\\=|\\<|\\>|\\||\\!|\\@|\\&|\\%|\\^|\\~",
    },
  ],
}

