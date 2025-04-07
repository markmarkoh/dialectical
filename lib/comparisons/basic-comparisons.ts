// Basic comparisons: modules, imports, type-checking, scalar-types
export const basicComparisons = {
  modules: {
    gleam: {
      typescript:
        "Gleam uses files as modules with explicit exports via 'pub'. TypeScript uses files as modules with explicit exports using 'export' keywords.",
      elixir:
        "Gleam uses files as modules with 'pub' for exports, while Elixir uses explicit 'defmodule' blocks with 'def' and 'defp' for public and private functions.",
      rust: "Both Gleam and Rust use files as modules with 'pub' for exports. Rust has a more complex module system with nested modules and visibility rules.",
      zig: "Both Gleam and Zig use files as modules with 'pub' for exports. Zig's module system is simpler with direct @import calls.",
      go: "Gleam uses files as modules with 'pub' for exports, while Go uses packages with uppercase identifiers for exports. Go's package system is simpler but less flexible than Gleam's.",
      nim: "Gleam uses files as modules with 'pub' for exports, while Nim uses files as modules with '*' for exports or explicit export statements. Both provide clear visibility control.",
    },
    typescript: {
      elixir:
        "TypeScript uses files as modules with 'export' keywords, while Elixir uses explicit 'defmodule' blocks with 'def' and 'defp' for public and private functions.",
      rust: "TypeScript uses 'export' keywords for exports, while Rust uses 'pub' for exports and has a more complex module system with nested modules.",
      zig: "TypeScript uses 'export' keywords for exports, while Zig uses 'pub' for exports and @import for imports.",
      go: "TypeScript uses 'export' keywords and has a rich module system with various import styles. Go uses packages with a simpler approach where uppercase identifiers are exported and lowercase ones are private.",
      nim: "TypeScript uses 'export' keywords for exports, while Nim uses '*' for exports or explicit export statements. Both provide clear visibility control but with different syntax.",
    },
    elixir: {
      rust: "Elixir uses 'defmodule' blocks with 'def' and 'defp' for functions, while Rust uses files as modules with 'pub' for exports.",
      zig: "Elixir uses 'defmodule' blocks with 'def' and 'defp' for functions, while Zig uses files as modules with 'pub' for exports.",
      go: "Elixir uses 'defmodule' blocks with explicit 'def' and 'defp' for public and private functions. Go uses packages with a convention where uppercase identifiers are exported and lowercase ones are private.",
      nim: "Elixir uses 'defmodule' blocks with 'def' and 'defp' for functions, while Nim uses files as modules with '*' for exports or explicit export statements.",
    },
    rust: {
      zig: "Both Rust and Zig use files as modules with 'pub' for exports. Rust has a more complex module system with nested modules, while Zig's is simpler.",
      go: "Rust has a complex module system with nested modules and explicit visibility rules using 'pub'. Go has a simpler package system where uppercase identifiers are exported and lowercase ones are private.",
      nim: "Both Rust and Nim use files as modules with explicit exports. Rust uses 'pub' for exports, while Nim uses '*' or explicit export statements.",
    },
    zig: {
      go: "Zig uses files as modules with 'pub' for exports and @import for imports. Go uses packages with a convention where uppercase identifiers are exported and lowercase ones are private.",
      nim: "Both Zig and Nim use files as modules with explicit exports. Zig uses 'pub' for exports, while Nim uses '*' or explicit export statements.",
    },
    nim: {
      go: "Nim uses files as modules with explicit exports via '*' or export statements, while Go uses packages with uppercase identifiers for exports. Nim's approach is more explicit and flexible.",
    },
  },
  imports: {
    gleam: {
      typescript:
        "Gleam has a simple import system with optional aliasing. TypeScript offers more import variations including named, default, and namespace imports.",
      elixir:
        "Both Gleam and Elixir have straightforward import systems, but Elixir offers more options with 'import', 'alias', 'require', and 'use' directives. Elixir also allows selective imports with 'only' and 'except' options.",
      rust: "Gleam has a simpler import system than Rust. Rust uses 'use' statements with complex path syntax, nested paths, and re-exports.",
      zig: "Both Gleam and Zig have straightforward import systems. Gleam uses 'import' statements, while Zig uses the @import builtin function.",
      go: "Gleam has a simple import system with optional aliasing. Go's import system is also straightforward but offers dot imports, blank imports for side effects, and aliasing.",
      nim: "Both Gleam and Nim have straightforward import systems with optional aliasing. Nim offers more import variations including selective imports and qualified imports.",
    },
    typescript: {
      elixir:
        "TypeScript's import system is file-based with various import styles, while Elixir uses directives like 'import', 'alias', and 'require' that work with modules rather than files.",
      rust: "TypeScript has more import variations including named, default, and namespace imports. Rust uses 'use' statements with path syntax and doesn't have a concept of default exports.",
      zig: "TypeScript has a rich import system with various styles, while Zig uses a simpler @import function for all imports.",
      go: "TypeScript has a rich import system with various styles including named, default, and namespace imports. Go has a simpler import system with package imports, optional aliasing, and blank imports for side effects.",
      nim: "TypeScript has a rich import system with various styles, while Nim has a Python-like import system with various forms like 'import module', 'from module import symbol', and qualified imports.",
    },
    elixir: {
      rust: "Elixir has multiple import directives ('import', 'alias', 'require', 'use'), while Rust uses 'use' statements with path syntax.",
      zig: "Elixir has multiple import directives, while Zig uses a simple @import function for all imports.",
      go: "Elixir has multiple import directives ('import', 'alias', 'require', 'use') with fine-grained control. Go has a simpler import system with package imports, optional aliasing, and blank imports for side effects.",
      nim: "Elixir has multiple import directives ('import', 'alias', 'require', 'use'), while Nim has a Python-like import system with various forms like 'import module', 'from module import symbol', and qualified imports.",
    },
    rust: {
      zig: "Rust has a more complex import system with 'use' statements, nested paths, and re-exports. Zig uses a simpler @import function for all imports.",
      go: "Rust has a complex import system with 'use' statements, nested paths, and re-exports. Go has a simpler import system with package imports, optional aliasing, and blank imports for side effects.",
      nim: "Rust has a complex import system with 'use' statements, nested paths, and re-exports. Nim has a Python-like import system with various forms like 'import module', 'from module import symbol', and qualified imports.",
    },
    zig: {
      go: "Zig uses the @import builtin function for all imports. Go has a package import system with optional aliasing and blank imports for side effects.",
      nim: "Zig uses the @import builtin function for all imports. Nim has a Python-like import system with various forms like 'import module', 'from module import symbol', and qualified imports.",
    },
    nim: {
      go: "Nim has a Python-like import system with various forms, while Go has a simpler package import system. Nim offers more flexibility with selective imports and aliasing.",
    },
  },
  "type-checking": {
    gleam: {
      typescript:
        "Gleam has a strict, sound type system with no escape hatches. TypeScript's type system is structural and gradual, with escape hatches like 'any' and type assertions.",
      elixir:
        "Gleam has a static type system where types are checked at compile time, while Elixir is dynamically typed with optional type specifications for documentation and static analysis.",
      rust: "Both Gleam and Rust have strict, static type systems. Rust's type system is more complex with ownership, borrowing, and lifetimes.",
      zig: "Both Gleam and Zig have strict, static type systems. Zig adds compile-time execution (comptime) for more powerful type-level programming.",
      go: "Gleam has a strict, sound type system with no escape hatches. Go has a simpler static type system with some implicit conversions and interface-based polymorphism.",
      nim: "Both Gleam and Nim have strong, static type systems. Nim's type system is more flexible with features like distinct types, object variants, and compile-time function execution.",
    },
    typescript: {
      elixir:
        "TypeScript has static typing with compile-time checks, while Elixir has optional type specifications that are used for documentation and static analysis, not runtime enforcement.",
      rust: "TypeScript's type system is structural and gradual with escape hatches. Rust's type system is nominal and strict with ownership, borrowing, and lifetimes.",
      zig: "TypeScript's type system is structural and gradual with escape hatches. Zig's type system is nominal and strict with powerful compile-time features.",
      go: "TypeScript's type system is structural and gradual with escape hatches like 'any'. Go's type system is simpler, nominal, and doesn't have generics until Go 1.18.",
      nim: "TypeScript has a structural type system with escape hatches like 'any', while Nim has a nominal type system with features like distinct types and object variants.",
    },
    elixir: {
      rust: "Elixir is dynamically typed with optional type specifications. Rust has a strict static type system with ownership, borrowing, and lifetimes.",
      zig: "Elixir is dynamically typed with optional type specifications. Zig has a strict static type system with powerful compile-time features.",
      go: "Elixir is dynamically typed with optional type specifications for documentation and static analysis. Go has a static type system that's simpler than many other statically typed languages.",
      nim: "Elixir is dynamically typed with optional type specifications, while Nim has a static type system with features like distinct types and object variants.",
    },
    rust: {
      zig: "Both Rust and Zig have strict static type systems. Rust focuses on ownership and borrowing, while Zig emphasizes compile-time execution and simplicity.",
      go: "Rust has a complex type system with ownership, borrowing, and lifetimes. Go has a simpler type system with garbage collection and interface-based polymorphism.",
      nim: "Both Rust and Nim have strong, static type systems. Rust focuses on ownership and borrowing, while Nim uses garbage collection by default but offers manual memory management options.",
    },
    zig: {
      go: "Zig has a strict static type system with powerful compile-time features. Go has a simpler type system with garbage collection and interface-based polymorphism.",
      nim: "Both Zig and Nim have strong, static type systems. Zig's type system is more explicit and low-level, while Nim offers more high-level features like object variants and method dispatching.",
    },
    nim: {
      go: "Nim has a rich type system with features like distinct types, object variants, and generics. Go has a simpler type system focused on practical use cases.",
    },
  },
  "scalar-types": {
    gleam: {
      typescript:
        "Gleam has distinct Int and Float types, while TypeScript uses JavaScript's number for both. Both have String/string and Bool/boolean types with similar operations.",
      elixir:
        "Both languages have integers, floats, booleans, and strings, but Elixir adds atoms (similar to symbols) and charlists. Gleam has special operators for floats, while Elixir uses the same operators for both number types.",
      rust: "Gleam has basic scalar types (Int, Float, Bool, String), while Rust has a richer set with explicit sizes (i8 to i128, u8 to u128, f32, f64) and more specialized types.",
      zig: "Gleam has basic scalar types, while Zig has a richer set with explicit sizes and more specialized types like error unions and optionals.",
      go: "Gleam has basic scalar types (Int, Float, Bool, String). Go has a richer set of numeric types with explicit sizes (int8 to int64, uint8 to uint64, float32, float64) and additional types like complex numbers and runes (Unicode code points).",
      nim: "Gleam has basic scalar types, while Nim has a richer set with explicit sizes (int8 to int64, uint8 to uint64, float32, float64) and additional types like chars, enums, and sets.",
    },
    typescript: {
      elixir:
        "TypeScript uses JavaScript's number type for both integers and floats, while Elixir has separate types. Elixir also has atoms (symbols) which have no direct equivalent in TypeScript.",
      rust: "TypeScript uses JavaScript's number for all numbers, while Rust has explicit integer and float types with sizes. Rust's string types are more complex with &str and String.",
      zig: "TypeScript uses JavaScript's number for all numbers, while Zig has explicit integer and float types with sizes. Zig also adds error unions and optionals as core types.",
      go: "TypeScript uses JavaScript's number for all numbers, while Go has explicit integer and float types with sizes. Go also has complex number types and rune for Unicode code points.",
      nim: "TypeScript uses JavaScript's number for all numbers, while Nim has explicit integer and float types with sizes. Nim also has more specialized types like chars, enums, and sets.",
    },
    elixir: {
      rust: "Elixir has basic scalar types plus atoms and charlists. Rust has a richer set of numeric types with explicit sizes and more specialized string types.",
      zig: "Elixir has basic scalar types plus atoms and charlists. Zig has explicit size numeric types and specialized types like error unions and optionals.",
      go: "Elixir has basic scalar types plus atoms and charlists. Go has explicit size numeric types, complex numbers, and rune for Unicode code points.",
      nim: "Elixir has basic scalar types plus atoms and charlists. Nim has explicit size numeric types and specialized types like chars, enums, and sets.",
    },
    rust: {
      zig: "Both Rust and Zig have similar scalar types with explicit sizes. Zig adds error unions and optionals as core types, while Rust has a more complex string system.",
      go: "Both Rust and Go have explicit size numeric types. Rust has more complex string types (&str and String) and lifetimes, while Go has simpler strings, plus complex numbers and rune for Unicode code points.",
      nim: "Both Rust and Nim have similar scalar types with explicit sizes. Nim adds more high-level types like sets and enums with values, while Rust has more complex string types with lifetimes.",
    },
    zig: {
      go: "Both Zig and Go have explicit size numeric types. Zig adds error unions and optionals as core types, while Go has complex numbers and rune for Unicode code points.",
      nim: "Both Zig and Nim have similar scalar types with explicit sizes. Nim adds more high-level types like sets and enums with values, while Zig has more low-level features like explicit alignment control.",
    },
    nim: {
      go: "Both Nim and Go have explicit size numeric types. Nim adds more specialized types like sets, enums with values, and distinct types, while Go has a simpler type system with fewer built-in types.",
    },
  },
}

