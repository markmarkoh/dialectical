// Flow control comparisons: pattern-matching, if-else, recursion, guards, loops, error-handling
export const flowComparisons = {
  "pattern-matching": {
    gleam: {
      typescript:
        "Gleam has built-in pattern matching with the 'case' expression. TypeScript doesn't have built-in pattern matching, instead using destructuring, type guards, and switch statements.",
      elixir:
        "Both languages have powerful pattern matching. Gleam uses 'case' expressions, while Elixir uses pattern matching more pervasively, including in function heads and variable assignments.",
      rust: "Both Gleam and Rust have powerful pattern matching with 'case'/'match' expressions. Rust's pattern matching is more integrated with its type system and exhaustiveness checking.",
      zig: "Gleam has built-in pattern matching with the 'case' expression. Zig doesn't have built-in pattern matching, instead using switch statements and destructuring.",
      go: "Gleam has built-in pattern matching with the 'case' expression. Go doesn't have built-in pattern matching, instead using switch statements and type assertions.",
      nim: "Gleam has built-in pattern matching with the 'case' expression. Nim doesn't have built-in pattern matching like some functional languages, instead using case statements, object variants, and destructuring.",
    },
    typescript: {
      elixir:
        "TypeScript doesn't have built-in pattern matching, instead using destructuring, type guards, and switch statements. Elixir has powerful pattern matching that's used pervasively throughout the language.",
      rust: "TypeScript doesn't have built-in pattern matching, instead using destructuring, type guards, and switch statements. Rust has powerful pattern matching with exhaustiveness checking.",
      zig: "TypeScript doesn't have built-in pattern matching, instead using destructuring, type guards, and switch statements. Zig doesn't have built-in pattern matching, instead using switch statements and destructuring.",
      go: "TypeScript doesn't have built-in pattern matching, instead using destructuring, type guards, and switch statements. Go doesn't have built-in pattern matching, instead using switch statements and type assertions.",
      nim: "TypeScript doesn't have built-in pattern matching, instead using destructuring, type guards, and switch statements. Nim doesn't have built-in pattern matching like some functional languages, instead using case statements, object variants, and destructuring.",
    },
    elixir: {
      rust: "Elixir has powerful pattern matching that's used pervasively throughout the language. Rust has powerful pattern matching with exhaustiveness checking that's more integrated with its type system.",
      zig: "Elixir has powerful pattern matching that's used pervasively throughout the language. Zig doesn't have built-in pattern matching, instead using switch statements and destructuring.",
      go: "Elixir has powerful pattern matching that's used pervasively throughout the language. Go doesn't have built-in pattern matching, instead using switch statements and type assertions.",
      nim: "Elixir has powerful pattern matching that's used pervasively throughout the language. Nim doesn't have built-in pattern matching like some functional languages, instead using case statements, object variants, and destructuring.",
    },
    rust: {
      zig: "Rust has powerful pattern matching with exhaustiveness checking. Zig doesn't have built-in pattern matching, instead using switch statements and destructuring.",
      go: "Rust has powerful pattern matching with exhaustiveness checking. Go doesn't have built-in pattern matching, instead using switch statements and type assertions.",
      nim: "Rust has powerful pattern matching with exhaustiveness checking. Nim doesn't have built-in pattern matching like some functional languages, instead using case statements, object variants, and destructuring.",
    },
    zig: {
      go: "Zig doesn't have built-in pattern matching, instead using switch statements and destructuring. Go doesn't have built-in pattern matching, instead using switch statements and type assertions.",
      nim: "Zig doesn't have built-in pattern matching, instead using switch statements and destructuring. Nim doesn't have built-in pattern matching like some functional languages, instead using case statements, object variants, and destructuring.",
    },
    nim: {
      go: "Nim doesn't have built-in pattern matching like some functional languages, instead using case statements, object variants, and destructuring. Go doesn't have built-in pattern matching, instead using switch statements and type assertions.",
    },
  },
  "if-else": {
    gleam: {
      typescript:
        "Gleam's if/else is an expression that returns a value. TypeScript's if/else is a statement that doesn't return a value and requires explicit return statements.",
      elixir:
        "Both languages have if/else as expressions that return values. Elixir adds 'unless' and 'cond' constructs for more expressive conditional logic.",
      rust: "Both Gleam and Rust have if/else as expressions that return values. Rust's if/else can also be used with let statements for pattern matching.",
      zig: "Gleam's if/else is an expression that returns a value. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Gleam's if/else is an expression that returns a value. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Gleam's if/else is an expression that returns a value. Nim's if/else is a statement that requires explicit returns.",
    },
    typescript: {
      elixir:
        "TypeScript's if/else is a statement requiring explicit returns. Elixir's if/else is an expression that returns a value and adds 'unless' and 'cond' constructs.",
      rust: "TypeScript's if/else is a statement requiring explicit returns. Rust's if/else is an expression that returns a value and can be used with let statements.",
      zig: "TypeScript's if/else is a statement requiring explicit returns. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Both TypeScript and Go have if/else as statements that don't return values. Both require explicit return statements. Go allows an initialization statement before the condition.",
      nim: "Both TypeScript and Nim have if/else as statements that require explicit returns. Nim has elif for else-if chains, while TypeScript uses else if.",
    },
    elixir: {
      rust: "Both Elixir and Rust have if/else as expressions that return values. Elixir adds 'unless' and 'cond' constructs, while Rust's if/else can be used with let statements.",
      zig: "Elixir's if/else is an expression that returns a value and adds 'unless' and 'cond' constructs. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Elixir's if/else is an expression that returns a value and adds 'unless' and 'cond' constructs. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Elixir's if/else is an expression that returns a value and adds 'unless' and 'cond' constructs. Nim's if/else is a statement that requires explicit returns.",
    },
    rust: {
      zig: "Rust's if/else is an expression that returns a value and can be used with let statements. Zig's if can be used as an expression with variable capture but typically requires explicit returns.",
      go: "Rust's if/else is an expression that returns a value and can be used with let statements. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Rust's if/else is an expression that returns a value and can be used with let statements. Nim's if/else is a statement that requires explicit returns.",
    },
    zig: {
      go: "Zig's if can be used as an expression with variable capture but typically requires explicit returns. Go's if/else is a statement that doesn't return a value and requires explicit return statements.",
      nim: "Zig's if can be used as an expression with variable capture but typically requires explicit returns. Nim's if/else is a statement that requires explicit returns.",
    },
    nim: {
      go: "Both Nim and Go have if/else as statements that require explicit returns. Nim has elif for else-if chains, while Go allows an initialization statement before the condition.",
    },
  },
  recursion: {
    gleam: {
      typescript:
        "Gleam optimizes tail recursion, making it as efficient as loops. TypeScript doesn't optimize tail calls, so deep recursion can cause stack overflows.",
      elixir:
        "Both Gleam and Elixir optimize tail recursion, making it a primary control flow mechanism. Both languages make recursive functions clean and expressive with pattern matching.",
      rust: "Gleam optimizes tail recursion. Rust doesn't automatically optimize tail calls, so deep recursion can cause stack overflows.",
      zig: "Gleam optimizes tail recursion. Zig doesn't automatically optimize tail calls, so deep recursion can cause stack overflows.",
      go: "Gleam optimizes tail recursion. Go doesn't optimize tail calls, so deep recursion can cause stack overflows.",
      nim: "Gleam optimizes tail recursion. Nim doesn't automatically optimize tail recursion, but provides tools for manual optimization.",
    },
    typescript: {
      elixir:
        "TypeScript doesn't optimize tail calls, so deep recursion can cause stack overflows. Elixir optimizes tail recursion, making it a primary control flow mechanism.",
      rust: "Neither TypeScript nor Rust automatically optimize tail calls, so deep recursion can cause stack overflows in both languages.",
      zig: "Neither TypeScript nor Zig automatically optimize tail calls, so deep recursion can cause stack overflows in both languages.",
      go: "Neither TypeScript nor Go optimize tail calls, so deep recursion can cause stack overflows in both languages.",
      nim: "Neither TypeScript nor Nim automatically optimize tail recursion, so deep recursion can cause stack overflows in both languages.",
    },
    elixir: {
      rust: "Elixir optimizes tail recursion, making it a primary control flow mechanism. Rust doesn't automatically optimize tail calls, so deep recursion can cause stack overflows.",
      zig: "Elixir optimizes tail recursion, making it a primary control flow mechanism. Zig doesn't automatically optimize tail calls, so deep recursion can cause stack overflows.",
      go: "Elixir optimizes tail recursion, making it a primary control flow mechanism. Go doesn't optimize tail calls, so deep recursion can cause stack overflows.",
      nim: "Elixir optimizes tail recursion, making it a primary control flow mechanism. Nim doesn't automatically optimize tail recursion, but provides tools for manual optimization.",
    },
    rust: {
      zig: "Neither Rust nor Zig automatically optimize tail calls, so deep recursion can cause stack overflows in both languages.",
      go: "Neither Rust nor Go optimize tail calls, so deep recursion can cause stack overflows in both languages.",
      nim: "Neither Rust nor Nim automatically optimize tail recursion, so deep recursion can cause stack overflows in both languages.",
    },
    zig: {
      go: "Neither Zig nor Go optimize tail calls, so deep recursion can cause stack overflows in both languages.",
      nim: "Neither Zig nor Nim automatically optimize tail recursion, so deep recursion can cause stack overflows in both languages.",
    },
    nim: {
      go: "Neither Nim nor Go automatically optimize tail recursion, so deep recursion can cause stack overflows in both languages.",
    },
  },
  guards: {
    gleam: {
      typescript:
        "Gleam supports guard clauses in pattern matching with the 'if' keyword. TypeScript uses type guards (typeof, instanceof, custom predicates) to narrow types within conditional blocks.",
      elixir:
        "Both languages support guard clauses in pattern matching. Gleam uses 'if' in case expressions, while Elixir uses 'when' in function heads and case expressions.",
      rust: "Both Gleam and Rust support guard clauses in pattern matching. Gleam uses 'if' in case expressions, while Rust uses 'if' conditions in match arms.",
      zig: "Gleam supports guard clauses in pattern matching with the 'if' keyword. Zig doesn't have dedicated guard clauses, but achieves similar functionality through switch statements and if conditions.",
      go: "Gleam supports guard clauses in pattern matching with the 'if' keyword. Go doesn't have dedicated guard clauses or pattern matching, instead using if statements and switch statements.",
      nim: "Gleam supports guard clauses in pattern matching with the 'if' keyword. Nim doesn't have dedicated guard clauses, but achieves similar functionality through early returns and its error handling system.",
    },
    typescript: {
      elixir:
        "TypeScript uses type guards to narrow types within conditional blocks. Elixir uses guard clauses with 'when' in function heads and case expressions.",
      rust: "TypeScript uses type guards to narrow types within conditional blocks. Rust uses guard clauses with 'if' conditions in match arms.",
      zig: "TypeScript uses type guards to narrow types within conditional blocks. Zig doesn't have dedicated guard clauses, but achieves similar functionality through switch statements and if conditions.",
      go: "TypeScript uses type guards to narrow types within conditional blocks. Go doesn't have dedicated guard clauses, instead using if statements and switch statements.",
      nim: "TypeScript uses type guards to narrow types within conditional blocks. Nim doesn't have dedicated guard clauses, but achieves similar functionality through early returns and its error handling system.",
    },
    elixir: {
      rust: "Elixir uses guard clauses with 'when' in function heads and case expressions. Rust uses guard clauses with 'if' conditions in match arms.",
      zig: "Elixir uses guard clauses with 'when' in function heads and case expressions. Zig doesn't have dedicated guard clauses, but achieves similar functionality through switch statements and if conditions.",
      go: "Elixir uses guard clauses with 'when' in function heads and case expressions. Go doesn't have dedicated guard clauses, instead using if statements and switch statements.",
      nim: "Elixir uses guard clauses with 'when' in function heads and case expressions. Nim doesn't have dedicated guard clauses, but achieves similar functionality through early returns and its error handling system.",
    },
    rust: {
      zig: "Rust uses guard clauses with 'if' conditions in match arms. Zig doesn't have dedicated guard clauses, but achieves similar functionality through switch statements and if conditions.",
      go: "Rust uses guard clauses with 'if' conditions in match arms. Go doesn't have dedicated guard clauses, instead using if statements and switch statements.",
      nim: "Rust uses guard clauses with 'if' conditions in match arms. Nim doesn't have dedicated guard clauses, but achieves similar functionality through early returns and its error handling system.",
    },
    zig: {
      go: "Zig doesn't have dedicated guard clauses, but achieves similar functionality through switch statements and if conditions. Go doesn't have dedicated guard clauses, instead using if statements and switch statements.",
      nim: "Zig doesn't have dedicated guard clauses, but achieves similar functionality through switch statements and if conditions. Nim doesn't have dedicated guard clauses, but achieves similar functionality through early returns and its error handling system.",
    },
    nim: {
      go: "Nim doesn't have dedicated guard clauses, but achieves similar functionality through early returns and its error handling system. Go doesn't have dedicated guard clauses, instead using if statements and switch statements.",
    },
  },
  loops: {
    gleam: {
      typescript:
        "Gleam doesn't have traditional loops, instead using recursion and higher-order functions. TypeScript has traditional loops (for, while, do-while) and functional approaches with array methods.",
      elixir:
        "Both Gleam and Elixir don't have traditional loops, instead using recursion and higher-order functions. Both languages make this approach clean and expressive.",
      rust: "Gleam doesn't have traditional loops, instead using recursion and higher-order functions. Rust has traditional loops (for, while, loop) and functional approaches with iterators.",
      zig: "Gleam doesn't have traditional loops, instead using recursion and higher-order functions. Zig has traditional loops (for, while) with explicit conditions.",
      go: "Gleam doesn't have traditional loops, instead using recursion and higher-order functions. Go has a single 'for' loop construct that can be used as a traditional for loop, a while loop, or an infinite loop.",
      nim: "Gleam doesn't have traditional loops, instead using recursion and higher-order functions. Nim has traditional loops (for, while) and functional approaches through the standard library.",
    },
    typescript: {
      elixir:
        "TypeScript has traditional loops (for, while, do-while) and functional approaches with array methods. Elixir doesn't have traditional loops, instead using recursion and higher-order functions.",
      rust: "Both TypeScript and Rust have traditional loops and functional approaches. TypeScript's functional approaches use array methods, while Rust's use iterators.",
      zig: "TypeScript has traditional loops (for, while, do-while) and functional approaches with array methods. Zig has traditional loops (for, while) with explicit conditions.",
      go: "TypeScript has traditional loops (for, while, do-while) and functional approaches with array methods. Go has a single 'for' loop construct that can be used as a traditional for loop, a while loop, or an infinite loop.",
      nim: "TypeScript has traditional loops (for, while, do-while) and functional approaches with array methods. Nim has traditional loops (for, while) and functional approaches through the standard library.",
    },
    elixir: {
      rust: "Elixir doesn't have traditional loops, instead using recursion and higher-order functions. Rust has traditional loops (for, while, loop) and functional approaches with iterators.",
      zig: "Elixir doesn't have traditional loops, instead using recursion and higher-order functions. Zig has traditional loops (for, while) with explicit conditions.",
      go: "Elixir doesn't have traditional loops, instead using recursion and higher-order functions. Go has a single 'for' loop construct that can be used as a traditional for loop, a while loop, or an infinite loop.",
      nim: "Elixir doesn't have traditional loops, instead using recursion and higher-order functions. Nim has traditional loops (for, while) and functional approaches through the standard library.",
    },
    rust: {
      zig: "Rust has traditional loops (for, while, loop) and functional approaches with iterators. Zig has traditional loops (for, while) with explicit conditions.",
      go: "Rust has traditional loops (for, while, loop) and functional approaches with iterators. Go has a single 'for' loop construct that can be used as a traditional for loop, a while loop, or an infinite loop.",
      nim: "Rust has traditional loops (for, while, loop) and functional approaches with iterators. Nim has traditional loops (for, while) and functional approaches through the standard library.",
    },
    zig: {
      go: "Zig has traditional loops (for, while) with explicit conditions. Go has a single 'for' loop construct that can be used as a traditional for loop, a while loop, or an infinite loop.",
      nim: "Zig has traditional loops (for, while) with explicit conditions. Nim has traditional loops (for, while) and functional approaches through the standard library.",
    },
    nim: {
      go: "Nim has traditional loops (for, while) and functional approaches through the standard library. Go has a single 'for' loop construct that can be used as a traditional for loop, a while loop, or an infinite loop.",
    },
  },
  "error-handling": {
    gleam: {
      typescript:
        "Gleam uses the Result type for error handling, making errors explicit in function signatures. TypeScript uses exceptions with try/catch/finally blocks and can implement Result-like types.",
      elixir:
        "Gleam uses the Result type for error handling. Elixir uses tagged tuples like {:ok, result} or {:error, reason} and has try/rescue for exceptions.",
      rust: "Both Gleam and Rust use Result types for error handling. Rust adds the ? operator for error propagation, similar to Gleam's try operator.",
      zig: "Gleam uses the Result type for error handling. Zig uses error unions (anyerror!T) and the try/catch/errdefer keywords.",
      go: "Gleam uses the Result type for error handling. Go uses explicit error handling with multiple return values, typically (result, error).",
      nim: "Gleam uses the Result type for error handling. Nim uses exceptions with try-except-finally blocks and can implement Result types for functional error handling.",
    },
    typescript: {
      elixir:
        "TypeScript uses exceptions with try/catch/finally blocks. Elixir uses tagged tuples like {:ok, result} or {:error, reason} and has try/rescue for exceptions.",
      rust: "TypeScript uses exceptions with try/catch/finally blocks. Rust uses Result types for error handling with the ? operator for error propagation.",
      zig: "TypeScript uses exceptions with try/catch/finally blocks. Zig uses error unions (anyerror!T) and the try/catch/errdefer keywords.",
      go: "TypeScript uses exceptions with try/catch/finally blocks. Go uses explicit error handling with multiple return values, typically (result, error).",
      nim: "TypeScript uses exceptions with try/catch/finally blocks. Nim also uses exceptions with try-except-finally blocks, but with different syntax.",
    },
    elixir: {
      rust: "Elixir uses tagged tuples like {:ok, result} or {:error, reason} and has try/rescue for exceptions. Rust uses Result types for error handling with the ? operator for error propagation.",
      zig: "Elixir uses tagged tuples like {:ok, result} or {:error, reason} and has try/rescue for exceptions. Zig uses error unions (anyerror!T) and the try/catch/errdefer keywords.",
      go: "Elixir uses tagged tuples like {:ok, result} or {:error, reason} and has try/rescue for exceptions. Go uses explicit error handling with multiple return values, typically (result, error).",
      nim: "Elixir uses tagged tuples like {:ok, result} or {:error, reason} and has try/rescue for exceptions. Nim uses exceptions with try-except-finally blocks and can implement Result types for functional error handling.",
    },
    rust: {
      zig: "Rust uses Result types for error handling with the ? operator for error propagation. Zig uses error unions (anyerror!T) and the try/catch/errdefer keywords.",
      go: "Rust uses Result types for error handling with the ? operator for error propagation. Go uses explicit error handling with multiple return values, typically (result, error).",
      nim: "Rust uses Result types for error handling with the ? operator for error propagation. Nim uses exceptions with try-except-finally blocks and can implement Result types for functional error handling.",
    },
    zig: {
      go: "Zig uses error unions (anyerror!T) and the try/catch/errdefer keywords. Go uses explicit error handling with multiple return values, typically (result, error).",
      nim: "Zig uses error unions (anyerror!T) and the try/catch/errdefer keywords. Nim uses exceptions with try-except-finally blocks and can implement Result types for functional error handling.",
    },
    nim: {
      go: "Nim uses exceptions with try-except-finally blocks and can implement Result types for functional error handling. Go uses explicit error handling with multiple return values, typically (result, error).",
    },
  },
}

