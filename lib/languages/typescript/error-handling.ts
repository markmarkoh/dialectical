// Using exceptions (traditional JavaScript approach)
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero")
  }
  return a / b
}

function calculate(a: number, b: number): void {
  try {
    const result = divide(a, b)
    console.log(`Result: ${result}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}

// Using a Result type (functional approach)
type Result<T, E> = { ok: true; value: T } | { ok: false; error: E }

function divideResult(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return { ok: false, error: "Division by zero" }
  }
  return { ok: true, value: a / b }
}

function calculateResult(a: number, b: number): void {
  const result = divideResult(a, b)
  if (result.ok) {
    console.log(`Result: ${result.value}`)
  } else {
    console.log(`Error: ${result.error}`)
  }
}

// Chaining Results
function complexCalculation(a: number, b: number): Result<number, string> {
  const divideResultResult = divideResult(a, b)
  if (!divideResultResult.ok) return divideResultResult

  const doubleResult = double(divideResultResult.value)
  if (!doubleResult.ok) return doubleResult

  return doubleResult
}

function double(x: number): Result<number, string> {
  return { ok: true, value: x * 2 }
}

