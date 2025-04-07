// Variable comparisons: assignments, type-annotations, lexical-blocks, constants
export const variableComparisons = {
  assignments: {
    gleam: {
      typescript:
        "Gleam uses 'let' for immutable bindings with no reassignment. TypeScript has 'const', 'let', and 'var' with different scoping and reassignment rules.",
      elixir:
        "Both languages have immutable values, but Gleam prevents rebinding variables once declared, while Elixir allows rebinding. Both support pattern matching, but Elixir's pattern matching is more central to the language.",
      rust: "Both Gleam and Rust use immutable bindings by default. Rust uses 'let' for immutable and 'let mut' for mutable bindings, while Gleam uses 'let' and 'let mut' with similar semantics.",
      zig: "Gleam uses 'let' for immutable bindings, while Zig uses 'const' for immutable and 'var' for mutable bindings.",
      go: "Gleam uses 'let' for immutable bindings with no reassignment. Go uses ':=' for short variable declarations and 'var' for explicit declarations, with all variables being mutable.",
      nim: "Gleam only has immutable bindings (let), while Nim has both mutable variables (var) and immutable bindings (let). Nim allows reassignment of var variables, while Gleam prevents rebinding once a variable is declared.",
    },
    typescript: {
      elixir:
        "TypeScript has mutable variables with 'let' and immutable bindings with 'const'. Elixir has rebindable but immutable variables, and uses pattern matching for assignment rather than simple assignment.",
      rust: "TypeScript has 'const' and 'let' with different mutability rules. Rust uses 'let' for immutable bindings and 'let mut' for mutable ones, with a stronger focus on immutability.",
      zig: "TypeScript has 'const' and 'let' with different mutability rules. Zig uses 'const' for immutable and 'var' for mutable bindings, with explicit undefined initialization.",
      go: "TypeScript has 'const' for immutable bindings and 'let'/'var' for mutable variables. Go only has mutable variables, using ':=' for short declarations and 'var' for explicit declarations.",
      nim: "TypeScript has 'const', 'let', and 'var' with different scoping and mutability rules. Nim has 'var' for mutable variables and 'let' for immutable bindings, with similar semantics to TypeScript's 'let' and 'const'.",
    },
    elixir: {
      rust: "Elixir allows rebinding of variables but values are immutable. Rust has immutable bindings by default with explicit mutability via 'mut'.",
      zig: "Elixir allows rebinding of variables but values are immutable. Zig has explicit 'const' and 'var' declarations for immutable and mutable bindings.",
      go: "Elixir allows rebinding of variables but values are immutable. Go only has mutable variables, using ':=' for short declarations and 'var' for explicit declarations.",
      nim: "Elixir allows rebinding of variables but values are immutable. Nim has mutable variables (var) and immutable bindings (let), with var variables being mutable and rebindable.",
    },
    rust: {
      zig: "Rust uses 'let' for immutable and 'let mut' for mutable bindings. Zig uses 'const' for immutable and 'var' for mutable bindings.",
      go: "Rust uses 'let' for immutable bindings by default and 'let mut' for mutable ones. Go only has mutable variables, using ':=' for short declarations and 'var' for explicit declarations.",
      nim: "Both Rust and Nim have mutable and immutable bindings. Rust uses 'let' for immutable and 'let mut' for mutable bindings, while Nim uses 'let' for immutable and 'var' for mutable variables.",
    },
    zig: {
      go: "Zig uses 'const' for immutable and 'var' for mutable bindings. Go only has mutable variables, using ':=' for short declarations and 'var' for explicit declarations.",
      nim: "Both Zig and Nim have mutable and immutable bindings. Zig uses 'const' for immutable and 'var' for mutable bindings, while Nim uses 'let' for immutable and 'var' for mutable variables.",
    },
    nim: {
      go: "Nim has both mutable variables (var) and immutable bindings (let), while Go only has mutable variables. Nim provides more control over mutability at the language level.",
    },
  },
  "type-annotations": {
    gleam: {
      typescript:
        "Both languages support explicit type annotations and have good type inference. Gleam's type annotations are more concise, while TypeScript offers more complex type operations.",
      elixir:
        "Gleam has mandatory static typing with type annotations that are checked at compile time. Elixir has optional type specifications (@spec) that are used for documentation and static analysis tools, not enforced at runtime.",
      rust: "Both Gleam and Rust have static typing with type annotations. Rust adds lifetime annotations for references and has a more complex type system with traits.",
      zig: "Both Gleam and Zig have static typing with type annotations. Zig adds compile-time type manipulation with comptime.",
      go: "Gleam has mandatory static typing with type annotations that appear after variable names. Go also has static typing with type annotations after variable names, but with less type inference than Gleam.",
      nim: "Both Gleam and Nim have static typing with type annotations. Nim's type system is more flexible with features like distinct types, object variants, and compile-time function execution.",
    },
    typescript: {
      elixir:
        "TypeScript has static typing with compile-time checks, while Elixir has optional type specifications that are used for documentation and static analysis, not runtime enforcement.",
      rust: "TypeScript has a structural type system with complex type operations. Rust has a nominal type system with simpler type annotations but adds lifetime annotations.",
      zig: "TypeScript has a structural type system with complex type operations. Zig has a nominal type system with simpler type annotations but adds compile-time type manipulation.",
      go: "TypeScript has a rich structural type system with complex type operations and good type inference. Go has a simpler nominal type system with less type inference and more explicit type annotations.",
      nim: "Both TypeScript and Nim have static typing with type annotations. TypeScript's type system is structural with complex type operations, while Nim's is nominal with features like distinct types and object variants.",
    },
    elixir: {
      rust: "Elixir has optional type specifications for documentation and static analysis. Rust has mandatory type annotations that are enforced at compile time.",
      zig: "Elixir has optional type specifications for documentation and static analysis. Zig has mandatory type annotations that are enforced at compile time.",
      go: "Elixir has optional type specifications (@spec) for documentation and static analysis. Go has mandatory type annotations that are enforced at compile time.",
      nim: "Elixir has optional type specifications for documentation and static analysis. Nim has mandatory type annotations that are enforced at compile time.",
    },
    rust: {
      zig: "Both Rust and Zig have mandatory type annotations. Rust adds lifetime annotations for references, while Zig adds compile-time type manipulation.",
      go: "Both Rust and Go have mandatory type annotations. Rust adds lifetime annotations for references and has a more complex type system with traits, while Go has a simpler type system with interfaces.",
      nim: "Both Rust and Nim have static typing with type annotations. Rust adds lifetime annotations for references, while Nim's type system is more flexible with features like distinct types and object variants.",
    },
    zig: {
      go: "Both Zig and Go have mandatory type annotations. Zig adds compile-time type manipulation with comptime, while Go has a simpler type system with interfaces.",
      nim: "Both Zig and Nim have static typing with type annotations. Zig's type system is more low-level with explicit memory management and comptime type manipulation, while Nim's is more high-level with features like object-oriented programming and distinct types.",
    },
    nim: {
      go: "Both Nim and Go have static typing with type annotations. Nim's type system is more feature-rich with generics, distinct types, and object variants, while Go's is simpler and more focused on practical use cases.",
    },
  },
  "lexical-blocks": {
    gleam: {
      typescript:
        "Gleam uses curly braces for blocks with expressions that return values. TypeScript uses curly braces for statement blocks with no implicit return values.",
      elixir:
        "Both languages treat blocks as expressions that return the value of their last expression. Gleam uses curly braces, while Elixir uses 'do/end' for multi-line blocks.",
      rust: "Both Gleam and Rust treat blocks as expressions that return values. Rust requires explicit returns with 'return' keyword except for the last expression.",
      zig: "Gleam's if/else is an expression that returns a value. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Gleam's if/else is an expression that returns a value. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Gleam's if/else is an expression that returns a value. Nim's if/else is a statement that requires explicit returns.",
    },
    typescript: {
      elixir:
        "TypeScript's if/else is a statement requiring explicit returns, while Elixir's if/else is an expression that returns a value. Elixir also offers additional constructs like 'unless' and 'cond'.",
      rust: "TypeScript's if/else is a statement requiring explicit returns. Rust's if/else is an expression that returns a value.",
      zig: "TypeScript's if/else is a statement requiring explicit returns. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Both TypeScript and Go have if/else as statements that don't return values. Both require explicit return statements. Go allows an initialization statement before the condition.",
      nim: "Both TypeScript and Nim have if/else as statements that require explicit returns. Nim has elif for else-if chains, while TypeScript uses else if.",
    },
    elixir: {
      rust: "Both Elixir and Rust treat if/else as expressions that return values. Elixir adds 'unless' and 'cond' constructs for more expressive conditional logic.",
      zig: "Elixir's if/else is an expression that returns a value. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Elixir's if/else is an expression that returns a value. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Elixir's if/else is an expression that returns a value. Nim's if/else is a statement that requires explicit returns.",
    },
    rust: {
      zig: "Rust's if/else is an expression that returns a value. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Rust's if/else is an expression that returns a value. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Rust's if/else is an expression that returns a value. Nim's if/else is a statement that requires explicit returns.",
    },
    zig: {
      go: "Zig's if can be used as an expression with variable capture but typically requires explicit returns. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Both Zig and Nim have if/else as statements that typically require explicit returns. Nim has elif for else-if chains, while Zig's if can capture variables and be used as an expression with explicit returns.",
    },
    nim: {
      go: "Both Nim and Go have if/else as statements that require explicit returns. Nim has elif for else-if chains, while Go allows an initialization statement before the condition.",
    },
  },
  constants: {
    gleam: {
      typescript:
        "Gleam uses 'const' for compile-time constants. TypeScript uses 'const' for immutable bindings, but they're evaluated at runtime.",
      elixir:
        "Both languages have compile-time constants: Gleam uses 'const' declarations, while Elixir uses module attributes (@). Elixir's module attributes are more flexible and can use expressions during compilation.",
      rust: "Both Gleam and Rust have compile-time constants. Gleam uses 'const', while Rust uses 'const' for constants and 'static' for static variables.",
      zig: "Both Gleam and Zig use 'const' for compile-time constants. Zig adds 'comptime' for more complex compile-time computations.",
      go: "Gleam uses 'const' for compile-time constants. Go uses the 'const' keyword for compile-time constants, which can be declared individually or in blocks, and supports expressions involving other constants.",
      nim: "Both Gleam and Nim use const for compile-time constants. Nim's constants are more powerful with support for compile-time function execution and complex expressions.",
    },
    typescript: {
      elixir:
        "TypeScript's 'const' creates runtime immutable bindings, while Elixir's module attributes (@) are compile-time constants. Elixir also has an application-wide configuration system for constants.",
      rust: "TypeScript's 'const' creates runtime immutable bindings. Rust's 'const' creates compile-time constants, and 'static' creates static variables.",
      zig: "TypeScript's 'const' creates runtime immutable bindings. Zig's 'const' creates compile-time constants and adds 'comptime' for complex compile-time computations.",
      go: "TypeScript's 'const' creates runtime immutable bindings. Go's 'const' creates compile-time constants that can be untyped or typed and can be declared individually or in blocks.",
      nim: "TypeScript's 'const' creates runtime immutable bindings. Nim's const creates compile-time constants that are evaluated during compilation.",
    },
    elixir: {
      rust: "Elixir uses module attributes (@) for compile-time constants. Rust uses 'const' for compile-time constants and 'static' for static variables.",
      zig: "Elixir uses module attributes (@) for compile-time constants. Zig uses 'const' for compile-time constants and 'comptime' for complex compile-time computations.",
      go: "Elixir uses module attributes (@) for compile-time constants. Go uses the 'const' keyword for compile-time constants, which can be declared individually or in blocks.",
      nim: "Elixir uses module attributes (@) for compile-time constants. Nim uses const for compile-time constants. Both support compile-time computation, but with different syntax.",
    },
    rust: {
      zig: "Rust uses 'const' for compile-time constants and 'static' for static variables. Zig uses 'const' for compile-time constants and 'comptime' for complex compile-time computations.",
      go: "Rust uses 'const' for compile-time constants and 'static' for static variables. Go uses the 'const' keyword for compile-time constants, which can be untyped or typed.",
      nim: "Rust uses 'const' for compile-time constants and 'static' for static variables. Nim uses const for compile-time constants with support for compile-time function execution.",
    },
    zig: {
      go: "Zig uses 'const' for compile-time constants and 'comptime' for complex compile-time computations. Go uses the 'const' keyword for compile-time constants, which can be untyped or typed.",
      nim: "Zig uses 'const' for compile-time constants and 'comptime' for complex compile-time computations. Nim uses const for compile-time constants with support for compile-time function execution.",
    },
    nim: {
      go: "Nim uses const for compile-time constants with support for compile-time function execution and complex expressions. Go uses the 'const' keyword for compile-time constants, which can be untyped or typed.",
    },
  },
}

