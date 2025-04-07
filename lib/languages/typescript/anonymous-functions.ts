// Function expression
const double = (x: number): number => x * 2

// Arrow function (concise)
const triple = (x: number): number => x * 3

// Arrow function with implicit return (single expression)
const doubled_list = [1, 2, 3].map((x) => x * 2)

// Multi-line arrow function
const process = (data: number): number => {
  const transformed = data * 10
  return transformed + 5
}

// Capturing variables from outer scope (closures)
function makeAdder(amount: number): (x: number) => number {
  return (x) => x + amount
}

const addFive = makeAdder(5)
const result = addFive(10) // 15

// Immediately Invoked Function Expression (IIFE)
const value = ((x) => {
  return x * x
})(4) // 16

