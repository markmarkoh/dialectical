// Type checking examples
const name = "Alice"
// let name: string = 42;  // Type error

// Function with type annotations
function process(value: number): string {
  return value.toString()
}

// Calling with wrong type
// process("hello");  // Type error

// Type escape hatches
let flexible: any = "anything"
flexible = 42 // No error
flexible = { key: "value" } // No error

// Type assertions
const value = "hello" as any as number
// No runtime error, but will cause problems

