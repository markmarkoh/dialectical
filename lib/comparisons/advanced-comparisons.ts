// Advanced comparisons: macros, basic-networking
export const advancedComparisons = {
  macros: {
    gleam: {
      typescript:
        "Gleam intentionally doesn't include macros to keep the language simple and predictable. TypeScript doesn't have traditional macros, but offers metaprogramming through its type system and decorators.",
      elixir:
        "Gleam intentionally doesn't include macros to keep the language simple and predictable. Elixir has a powerful macro system that operates on the abstract syntax tree (AST).",
      rust: "Gleam intentionally doesn't include macros to keep the language simple and predictable. Rust has a powerful macro system with declarative macros (macro_rules!) and procedural macros.",
      zig: "Gleam intentionally doesn't include macros to keep the language simple and predictable. Zig doesn't have traditional macros, but its compile-time execution (comptime) provides similar capabilities.",
      go: "Gleam intentionally doesn't include macros to keep the language simple and predictable. Go doesn't have a macro system, instead relying on code generation tools like 'go generate'.",
      nim: "Gleam intentionally doesn't include macros to keep the language simple and predictable. Nim has a powerful macro system that operates on the abstract syntax tree (AST).",
    },
    typescript: {
      elixir:
        "TypeScript doesn't have traditional macros, but offers metaprogramming through its type system and decorators. Elixir has a powerful macro system that operates on the abstract syntax tree (AST).",
      rust: "TypeScript doesn't have traditional macros, but offers metaprogramming through its type system and decorators. Rust has a powerful macro system with declarative macros (macro_rules!) and procedural macros.",
      zig: "TypeScript doesn't have traditional macros, but offers metaprogramming through its type system and decorators. Zig doesn't have traditional macros, but its compile-time execution (comptime) provides similar capabilities.",
      go: "TypeScript doesn't have traditional macros, but offers metaprogramming through its type system and decorators. Go doesn't have a macro system, instead relying on code generation tools like 'go generate'.",
      nim: "TypeScript doesn't have traditional macros, but offers metaprogramming through its type system and decorators. Nim has a powerful macro system that operates on the abstract syntax tree (AST).",
    },
    elixir: {
      rust: "Elixir has a powerful macro system that operates on the abstract syntax tree (AST). Rust has a powerful macro system with declarative macros (macro_rules!) and procedural macros.",
      zig: "Elixir has a powerful macro system that operates on the abstract syntax tree (AST). Zig doesn't have traditional macros, but its compile-time execution (comptime) provides similar capabilities.",
      go: "Elixir has a powerful macro system that operates on the abstract syntax tree (AST). Go doesn't have a macro system, instead relying on code generation tools like 'go generate'.",
      nim: "Both Elixir and Nim have powerful macro systems that operate on the abstract syntax tree (AST). Both languages use macros extensively for domain-specific languages and metaprogramming.",
    },
    rust: {
      zig: "Rust has a powerful macro system with declarative macros (macro_rules!) and procedural macros. Zig doesn't have traditional macros, but its compile-time execution (comptime) provides similar capabilities.",
      go: "Rust has a powerful macro system with declarative macros (macro_rules!) and procedural macros. Go doesn't have a macro system, instead relying on code generation tools like 'go generate'.",
      nim: "Both Rust and Nim have powerful macro systems. Rust has declarative macros (macro_rules!) and procedural macros, while Nim's macro system operates on the abstract syntax tree (AST).",
    },
    zig: {
      go: "Zig doesn't have traditional macros, but its compile-time execution (comptime) provides similar capabilities. Go doesn't have a macro system, instead relying on code generation tools like 'go generate'.",
      nim: "Zig doesn't have traditional macros, but its compile-time execution (comptime) provides similar capabilities. Nim has a powerful macro system that operates on the abstract syntax tree (AST).",
    },
    nim: {
      go: "Nim has a powerful macro system that operates on the abstract syntax tree (AST). Go doesn't have a macro system, instead relying on code generation tools like 'go generate'.",
    },
  },
  "basic-networking": {
    gleam: {
      typescript:
        "Gleam can leverage the Erlang VM's networking capabilities through libraries. TypeScript in Node.js uses built-in modules or third-party libraries for networking.",
      elixir:
        "Both Gleam and Elixir leverage the Erlang VM's networking capabilities. Elixir has more built-in networking functionality in its standard library.",
      rust: "Gleam leverages the Erlang VM's networking capabilities. Rust's standard library provides basic networking primitives, with crates like tokio for async networking.",
      zig: "Gleam leverages the Erlang VM's networking capabilities. Zig's standard library is still evolving, with networking typically done through C interoperability or community libraries.",
      go: "Gleam leverages the Erlang VM's networking capabilities. Go has a rich standard library for networking, including the net and net/http packages.",
      nim: "Gleam leverages the Erlang VM's networking capabilities. Nim's standard library includes modules for networking, including both synchronous and asynchronous HTTP clients and servers.",
    },
    typescript: {
      elixir:
        "TypeScript in Node.js uses built-in modules or third-party libraries for networking. Elixir leverages the Erlang VM's networking capabilities with built-in support in its standard library.",
      rust: "TypeScript in Node.js uses built-in modules or third-party libraries for networking. Rust's standard library provides basic networking primitives, with crates like tokio for async networking.",
      zig: "TypeScript in Node.js uses built-in modules or third-party libraries for networking. Zig's standard library is still evolving, with networking typically done through C interoperability or community libraries.",
      go: "TypeScript in Node.js uses built-in modules or third-party libraries for networking. Go has a rich standard library for networking, including the net and net/http packages.",
      nim: "TypeScript in Node.js uses built-in modules or third-party libraries for networking. Nim's standard library includes modules for networking, including both synchronous and asynchronous HTTP clients and servers.",
    },
    elixir: {
      rust: "Elixir leverages the Erlang VM's networking capabilities with built-in support in its standard library. Rust's standard library provides basic networking primitives, with crates like tokio for async networking.",
      zig: "Elixir leverages the Erlang VM's networking capabilities with built-in support in its standard library. Zig's standard library is still evolving, with networking typically done through C interoperability or community libraries.",
      go: "Elixir leverages the Erlang VM's networking capabilities with built-in support in its standard library. Go has a rich standard library for networking, including the net and net/http packages.",
      nim: "Elixir leverages the Erlang VM's networking capabilities with built-in support in its standard library. Nim's standard library includes modules for networking, including both synchronous and asynchronous HTTP clients and servers.",
    },
    rust: {
      zig: "Rust's standard library provides basic networking primitives, with crates like tokio for async networking. Zig's standard library is still evolving, with networking typically done through C interoperability or community libraries.",
      go: "Rust's standard library provides basic networking primitives, with crates like tokio for async networking. Go has a rich standard library for networking, including the net and net/http packages.",
      nim: "Rust's standard library provides basic networking primitives, with crates like tokio for async networking. Nim's standard library includes modules for networking, including both synchronous and asynchronous HTTP clients and servers.",
    },
    zig: {
      go: "Zig's standard library is still evolving, with networking typically done through C interoperability or community libraries. Go has a rich standard library for networking, including the net and net/http packages.",
      nim: "Zig's standard library is still evolving, with networking typically done through C interoperability or community libraries. Nim's standard library includes modules for networking, including both synchronous and asynchronous HTTP clients and servers.",
    },
    nim: {
      go: "Nim's standard library includes modules for networking, including both synchronous and asynchronous HTTP clients and servers. Go has a rich standard library for networking, including the net and net/http packages.",
    },
  },
}

