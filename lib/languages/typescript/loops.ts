// For loop (traditional C-style)
function countUp(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i)
  }
}

// While loop
function countDown(from: number): void {
  let current = from
  while (current > 0) {
    console.log(current)
    current--
  }
}

// Do-while loop (always executes at least once)
function promptUntilValid(): string {
  let input: string
  do {
    input = prompt("Enter a value:") || ""
  } while (input.length === 0)
  return input
}

// For...of loop (iterating over arrays, strings, etc.)
function sumArray(numbers: number[]): number {
  let sum = 0
  for (const num of numbers) {
    sum += num
  }
  return sum
}

// For...in loop (iterating over object properties)
function listProperties(obj: object): string[] {
  const properties: string[] = []
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      properties.push(key)
    }
  }
  return properties
}

// forEach method (higher-order function)
function logEach(items: string[]): void {
  items.forEach((item, index) => {
    console.log(`${index}: ${item}`)
  })
}

// Break and continue
function findFirstEven(numbers: number[]): number | null {
  for (const num of numbers) {
    if (num % 2 === 0) {
      return num // Early return (similar to break)
    }
  }
  return null
}

function sumOddNumbers(numbers: number[]): number {
  let sum = 0
  for (const num of numbers) {
    if (num % 2 === 0) {
      continue // Skip even numbers
    }
    sum += num
  }
  return sum
}

// Functional approaches (similar to Gleam)
function doubleAll(numbers: number[]): number[] {
  return numbers.map((x) => x * 2)
}

function onlyPositive(numbers: number[]): number[] {
  return numbers.filter((x) => x > 0)
}

