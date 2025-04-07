// Named function with type annotations
function add(a: number, b: number): number {
  return a + b // Explicit return
}

// Arrow function
const double = (x: number): number => x * 2

// Function with type checking
function process(input: Result<number, Error>): number {
  if (input.ok) {
    return input.value * 2
  } else {
    return 0
  }
}

// Method chaining (similar to pipes)
function transform(numbers: number[]): number[] {
  return numbers
    .map((x) => x * 2)
    .filter((x) => x > 10)
    .sort((a, b) => a - b)
}

// Type for the example
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }

