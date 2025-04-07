// Function comparisons: function-definitions, anonymous-functions, function-arguments, generics
export const functionComparisons = {
  "function-definitions": {
    gleam: {
      typescript:
        "Gleam functions are defined with 'fn' and have implicit returns. TypeScript functions use 'function' or arrow syntax and require explicit 'return' statements.",
      elixir:
        "Both languages have expression-oriented functions. Gleam uses 'fn' with implicit returns, while Elixir uses 'def' with explicit 'do/end' blocks.",
      rust: "Both Gleam and Rust define functions with 'fn'. Both have implicit returns for the last expression, but Rust requires a type annotation for the return value.",
      zig: "Gleam defines functions with 'fn' and has implicit returns. Zig also uses 'fn' but requires explicit return statements and return type annotations.",
      go: "Gleam defines functions with 'fn' and has implicit returns. Go uses 'func' and requires explicit return statements.",
      nim: "Gleam defines functions with 'fn' and has implicit returns. Nim uses 'proc' and requires explicit return statements or the 'result' variable.",
    },
    typescript: {
      elixir:
        "TypeScript functions use 'function' or arrow syntax and require explicit 'return' statements. Elixir uses 'def' with 'do/end' blocks and implicit returns.",
      rust: "TypeScript functions require explicit 'return' statements. Rust functions use 'fn', have implicit returns for the last expression, and require return type annotations.",
      zig: "TypeScript functions require explicit 'return' statements. Zig functions use 'fn', require explicit return statements, and require return type annotations.",
      go: "TypeScript functions use 'function' or arrow syntax. Go uses 'func' and has a different syntax for method definitions.",
      nim: "TypeScript functions use 'function' or arrow syntax and require explicit 'return' statements. Nim uses 'proc' and requires explicit return statements or the 'result' variable.",
    },
    elixir: {
      rust: "Elixir uses 'def' with 'do/end' blocks and implicit returns. Rust uses 'fn', has implicit returns for the last expression, and requires return type annotations.",
      zig: "Elixir uses 'def' with 'do/end' blocks and implicit returns. Zig uses 'fn', requires explicit return statements, and requires return type annotations.",
      go: "Elixir uses 'def' with 'do/end' blocks and implicit returns. Go uses 'func' and requires explicit return statements.",
      nim: "Elixir uses 'def' with 'do/end' blocks and implicit returns. Nim uses 'proc' and requires explicit return statements or the 'result' variable.",
    },
    rust: {
      zig: "Both Rust and Zig define functions with 'fn' and require return type annotations. Rust has implicit returns for the last expression, while Zig requires explicit return statements.",
      go: "Rust defines functions with 'fn' and has implicit returns for the last expression. Go uses 'func' and requires explicit return statements.",
      nim: "Rust defines functions with 'fn' and has implicit returns for the last expression. Nim uses 'proc' and requires explicit return statements or the 'result' variable.",
    },
    zig: {
      go: "Zig defines functions with 'fn', requires explicit return statements, and requires return type annotations. Go uses 'func' and requires explicit return statements.",
      nim: "Zig defines functions with 'fn', requires explicit return statements, and requires return type annotations. Nim uses 'proc' and requires explicit return statements or the 'result' variable.",
    },
    nim: {
      go: "Nim defines functions with 'proc' and requires explicit return statements or the 'result' variable. Go uses 'func' and requires explicit return statements.",
    },
  },
  "anonymous-functions": {
    gleam: {
      typescript:
        "Gleam uses 'fn(params) { body }' for anonymous functions. TypeScript offers more concise arrow functions with implicit returns for single expressions.",
      elixir:
        "Gleam uses 'fn(params) { body }' for anonymous functions. Elixir uses 'fn -> end' syntax and the capture operator (&) for shorthand.",
      rust: "Both Gleam and Rust use similar syntax for anonymous functions/closures. Rust adds the 'move' keyword to take ownership of captured variables.",
      zig: "Gleam has built-in anonymous functions with 'fn(params) { body }'. Zig doesn't have built-in anonymous functions or closures, instead using function pointers and structs.",
      go: "Gleam has built-in anonymous functions with 'fn(params) { body }'. Go has anonymous functions with 'func(params) { body }' syntax.",
      nim: "Gleam uses 'fn(params) { body }' for anonymous functions. Nim uses 'proc(params): returnType = body' or the arrow syntax for anonymous functions.",
    },
    typescript: {
      elixir:
        "TypeScript offers concise arrow functions with implicit returns. Elixir uses 'fn -> end' syntax and the capture operator (&) for shorthand.",
      rust: "TypeScript offers concise arrow functions with implicit returns. Rust uses a more verbose closure syntax with explicit parameter types.",
      zig: "TypeScript has built-in anonymous functions with arrow syntax. Zig doesn't have built-in anonymous functions or closures, instead using function pointers and structs.",
      go: "TypeScript offers concise arrow functions with implicit returns. Go has anonymous functions with 'func(params) { body }' syntax.",
      nim: "TypeScript offers concise arrow functions with implicit returns. Nim uses 'proc(params): returnType = body' or the arrow syntax for anonymous functions.",
    },
    elixir: {
      rust: "Elixir uses 'fn -> end' syntax and the capture operator (&) for shorthand. Rust uses a more verbose closure syntax with explicit parameter types.",
      zig: "Elixir has built-in anonymous functions with 'fn -> end' syntax. Zig doesn't have built-in anonymous functions or closures, instead using function pointers and structs.",
      go: "Elixir has built-in anonymous functions with 'fn -> end' syntax. Go has anonymous functions with 'func(params) { body }' syntax.",
      nim: "Elixir uses 'fn -> end' syntax and the capture operator (&) for shorthand. Nim uses 'proc(params): returnType = body' or the arrow syntax for anonymous functions.",
    },
    rust: {
      zig: "Rust has built-in closures with a concise syntax. Zig doesn't have built-in anonymous functions or closures, instead using function pointers and structs.",
      go: "Rust has built-in closures with a concise syntax. Go has anonymous functions with 'func(params) { body }' syntax but no shorthand.",
      nim: "Rust has built-in closures with a concise syntax. Nim uses 'proc(params): returnType = body' or the arrow syntax for anonymous functions.",
    },
    zig: {
      go: "Zig doesn't have built-in anonymous functions or closures, instead using function pointers and structs. Go has anonymous functions with 'func(params) { body }' syntax.",
      nim: "Zig doesn't have built-in anonymous functions or closures, instead using function pointers and structs. Nim uses 'proc(params): returnType = body' or the arrow syntax for anonymous functions.",
    },
    nim: {
      go: "Nim uses 'proc(params): returnType = body' or the arrow syntax for anonymous functions. Go has anonymous functions with 'func(params) { body }' syntax but no shorthand.",
    },
  },
  "function-arguments": {
    gleam: {
      typescript:
        "Gleam supports labeled arguments for better readability. TypeScript supports default parameters, rest parameters, and destructuring in function arguments.",
      elixir:
        "Both languages support pattern matching in function arguments. Gleam has labeled arguments, while Elixir uses pattern matching and default arguments with \\\\.",
      rust: "Gleam supports labeled arguments. Rust passes arguments by value by default, with references for efficiency and mutability.",
      zig: "Gleam supports labeled arguments. Zig passes arguments by value by default, with pointers for pass-by-reference semantics.",
      go: "Gleam supports labeled arguments. Go passes arguments by value, with slices, maps, and channels being reference types.",
      nim: "Gleam supports labeled arguments. Nim supports various parameter passing modes including by value (default), by reference (var), and compile-time parameters (static).",
    },
    typescript: {
      elixir:
        "TypeScript supports default parameters, rest parameters, and destructuring. Elixir uses pattern matching, default arguments with \\\\, and keyword lists for optional named parameters.",
      rust: "TypeScript supports default parameters, rest parameters, and destructuring. Rust passes arguments by value by default, with references for efficiency and mutability.",
      zig: "TypeScript supports default parameters, rest parameters, and destructuring. Zig passes arguments by value by default, with pointers for pass-by-reference semantics.",
      go: "TypeScript supports default parameters, rest parameters, and destructuring. Go passes arguments by value, with slices, maps, and channels being reference types.",
      nim: "TypeScript supports default parameters, rest parameters, and destructuring. Nim supports various parameter passing modes including by value (default), by reference (var), and compile-time parameters (static).",
    },
    elixir: {
      rust: "Elixir uses pattern matching, default arguments with \\\\, and keyword lists for optional named parameters. Rust passes arguments by value by default, with references for efficiency and mutability.",
      zig: "Elixir uses pattern matching, default arguments with \\\\, and keyword lists for optional named parameters. Zig passes arguments by value by default, with pointers for pass-by-reference semantics.",
      go: "Elixir uses pattern matching, default arguments with \\\\, and keyword lists for optional named parameters. Go passes arguments by value, with slices, maps, and channels being reference types.",
      nim: "Elixir uses pattern matching, default arguments with \\\\, and keyword lists for optional named parameters. Nim supports various parameter passing modes including by value (default), by reference (var), and compile-time parameters (static).",
    },
    rust: {
      zig: "Rust passes arguments by value by default, with references for efficiency and mutability. Zig passes arguments by value by default, with pointers for pass-by-reference semantics.",
      go: "Rust passes arguments by value by default, with references for efficiency and mutability. Go passes arguments by value, with slices, maps, and channels being reference types.",
      nim: "Rust passes arguments by value by default, with references for efficiency and mutability. Nim supports various parameter passing modes including by value (default), by reference (var), and compile-time parameters (static).",
    },
    zig: {
      go: "Zig passes arguments by value by default, with pointers for pass-by-reference semantics. Go passes arguments by value, with slices, maps, and channels being reference types.",
      nim: "Zig passes arguments by value by default, with pointers for pass-by-reference semantics. Nim supports various parameter passing modes including by value (default), by reference (var), and compile-time parameters (static).",
    },
    nim: {
      go: "Nim supports various parameter passing modes including by value (default), by reference (var), and compile-time parameters (static). Go passes arguments by value, with slices, maps, and channels being reference types.",
    },
  },
  generics: {
    gleam: {
      typescript:
        "Both Gleam and TypeScript have powerful generics systems. TypeScript's generics are more complex with features like conditional types and mapped types.",
      elixir:
        "Gleam has a static generics system with type parameters. Elixir doesn't have explicit generics, instead using dynamic typing, protocols, and behaviours for similar functionality.",
      rust: "Both Gleam and Rust have generics with type parameters. Rust adds trait bounds for constraining generic types.",
      zig: "Gleam has a traditional generics system with type parameters. Zig uses comptime parameters for generics, which is more flexible but more verbose.",
      go: "Gleam has a traditional generics system with type parameters. Go added generics in version 1.18 (2022) with a simpler approach than many languages.",
      nim: "Both Gleam and Nim have generics with type parameters. Nim's generics are more powerful with support for compile-time function execution and complex constraints.",
    },
    typescript: {
      elixir:
        "TypeScript has a powerful generics system with features like conditional types and mapped types. Elixir doesn't have explicit generics, instead using dynamic typing, protocols, and behaviours.",
      rust: "Both TypeScript and Rust have powerful generics systems. TypeScript's is more complex with features like conditional types, while Rust's focuses on trait bounds.",
      zig: "TypeScript has a traditional generics system with type parameters. Zig uses comptime parameters for generics, which is more flexible but more verbose.",
      go: "TypeScript has a powerful generics system with features like conditional types and mapped types. Go added generics in version 1.18 (2022) with a simpler approach.",
      nim: "Both TypeScript and Nim have powerful generics systems. TypeScript's is more complex with features like conditional types and mapped types, while Nim's focuses on compile-time function execution.",
    },
    elixir: {
      rust: "Elixir doesn't have explicit generics, instead using dynamic typing, protocols, and behaviours. Rust has a static generics system with trait bounds.",
      zig: "Elixir doesn't have explicit generics, instead using dynamic typing, protocols, and behaviours. Zig uses comptime parameters for generics.",
      go: "Elixir doesn't have explicit generics, instead using dynamic typing, protocols, and behaviours. Go added generics in version 1.18 (2022) with a simpler approach than many languages.",
      nim: "Elixir doesn't have explicit generics, instead using dynamic typing, protocols, and behaviours. Nim has a static generics system with support for compile-time function execution.",
    },
    rust: {
      zig: "Rust has a traditional generics system with trait bounds. Zig uses comptime parameters for generics, which is more flexible but more verbose.",
      go: "Rust has a powerful generics system with trait bounds. Go added generics in version 1.18 (2022) with a simpler approach than many languages.",
      nim: "Both Rust and Nim have powerful generics systems. Rust's focuses on trait bounds, while Nim's focuses on compile-time function execution.",
    },
    zig: {
      go: "Zig uses comptime parameters for generics, which is more flexible but more verbose. Go added generics in version 1.18 (2022) with a simpler approach than many languages.",
      nim: "Zig uses comptime parameters for generics, which is more flexible but more verbose. Nim has a traditional generics system with support for compile-time function execution.",
    },
    nim: {
      go: "Nim has a powerful generics system with support for compile-time function execution and complex constraints. Go added generics in version 1.18 (2022) with a simpler approach than many languages.",
    },
  },
}

