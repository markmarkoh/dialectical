// Memory management comparisons
export const memoryManagementComparisons = {
  "memory-management": {
    gleam: {
      typescript:
        "Gleam runs on the Erlang VM with automatic garbage collection and per-process heaps. TypeScript inherits JavaScript's garbage collection with a generational collector.",
      elixir:
        "Both Gleam and Elixir run on the Erlang VM with automatic garbage collection and per-process heaps. Both languages benefit from the BEAM's approach to memory management optimized for reliability and soft real-time performance.",
      rust: "Gleam runs on the Erlang VM with automatic garbage collection. Rust uses a unique ownership system with compile-time memory management without garbage collection.",
      zig: "Gleam runs on the Erlang VM with automatic garbage collection. Zig uses manual memory management with explicit allocation and deallocation.",
      go: "Gleam runs on the Erlang VM with automatic garbage collection and per-process heaps. Go uses garbage collection with a concurrent collector designed for low latency.",
      nim: "Gleam runs on the Erlang VM with automatic garbage collection and per-process heaps. Nim uses garbage collection by default but offers manual memory management options.",
    },
    typescript: {
      elixir:
        "TypeScript inherits JavaScript's garbage collection with a generational collector. Elixir runs on the Erlang VM with automatic garbage collection and per-process heaps.",
      rust: "TypeScript inherits JavaScript's garbage collection. Rust uses a unique ownership system with compile-time memory management without garbage collection.",
      zig: "TypeScript inherits JavaScript's garbage collection. Zig uses manual memory management with explicit allocation and deallocation.",
      go: "TypeScript inherits JavaScript's garbage collection with a generational collector. Go uses garbage collection with a concurrent collector designed for low latency.",
      nim: "TypeScript inherits JavaScript's garbage collection with a generational collector. Nim uses garbage collection by default but offers manual memory management options.",
    },
    elixir: {
      rust: "Elixir runs on the Erlang VM with automatic garbage collection and per-process heaps. Rust uses a unique ownership system with compile-time memory management without garbage collection.",
      zig: "Elixir runs on the Erlang VM with automatic garbage collection and per-process heaps. Zig uses manual memory management with explicit allocation and deallocation.",
      go: "Elixir runs on the Erlang VM with automatic garbage collection and per-process heaps. Go uses garbage collection with a concurrent collector designed for low latency.",
      nim: "Elixir runs on the Erlang VM with automatic garbage collection and per-process heaps. Nim uses garbage collection by default but offers manual memory management options.",
    },
    rust: {
      zig: "Rust uses a unique ownership system with compile-time memory management without garbage collection. Zig uses manual memory management with explicit allocation and deallocation.",
      go: "Rust uses a unique ownership system with compile-time memory management without garbage collection. Go uses garbage collection with a concurrent collector designed for low latency.",
      nim: "Rust uses a unique ownership system with compile-time memory management without garbage collection. Nim uses garbage collection by default but offers manual memory management options.",
    },
    zig: {
      go: "Zig uses manual memory management with explicit allocation and deallocation. Go uses garbage collection with a concurrent collector designed for low latency.",
      nim: "Zig uses manual memory management with explicit allocation and deallocation. Nim uses garbage collection by default but offers manual memory management options.",
    },
    nim: {
      go: "Nim uses garbage collection by default but offers manual memory management options. Go uses garbage collection with a concurrent collector designed for low latency.",
    },
  },
}

