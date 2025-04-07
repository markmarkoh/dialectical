// File: math.ts
// Exported functions
export function add(a: number, b: number): number {
  return a + b
}

export function subtract(a: number, b: number): number {
  return a - b
}

// Private function (not exported)
function square(x: number): number {
  return x * x
}

// File: main.ts
import { add } from "./math"
// or import * as math from './math';

function main() {
  const result = add(5, 3) // 8
  // square(4);  // Error: square is not exported
}

