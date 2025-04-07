// Function block
function calculate(x: number): number {
  // This is a statement block
  const y = x * 2
  const z = y + 1
  return z // Explicit return required
}

// Conditional blocks
function check(value: number): string {
  // Each block contains statements
  if (value > 0) {
    return "Positive" // Explicit return
  } else {
    return "Non-positive" // Explicit return
  }
}

// Switch statement blocks
function describe(value: number): string {
  switch (value) {
    case 0:
      return "Zero" // Explicit return
    default:
      if (value > 0) {
        return "Positive"
      } else {
        return "Negative"
      }
  }
}

// Immediately Invoked Function Expression (IIFE)
const result = (() => {
  const a = 1
  const b = 2
  return a + b // Returns 3
})()

// Block scoping
{
  const x = 10
  // x only exists in this block
}
// console.log(x);  // Error: x is not defined

