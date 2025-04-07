// Simple recursion (factorial)
function factorial(n: number): number {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
}

// Tail recursion (still not optimized in JavaScript)
function factorialTail(n: number): number {
  return factorialHelper(n, 1)
}

function factorialHelper(n: number, acc: number): number {
  if (n === 0) {
    return acc
  } else {
    return factorialHelper(n - 1, n * acc)
  }
}

// Recursive array processing
function sum(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0
  } else {
    const [first, ...rest] = numbers
    return first + sum(rest)
  }
}

// Avoiding stack overflow with iteration
function sumSafe(numbers: number[]): number {
  let total = 0
  for (const num of numbers) {
    total += num
  }
  return total
}

// Trampoline technique for deep recursion
type Thunk<T> = () => T | Thunk<T>

function trampoline<T>(fn: Thunk<T>): T {
  let result = fn()
  while (typeof result === "function") {
    result = (result as Thunk<T>)()
  }
  return result
}

function sumTrampoline(numbers: number[]): number {
  function sumHelper(nums: number[], acc: number): number | Thunk<number> {
    if (nums.length === 0) {
      return acc
    } else {
      const [first, ...rest] = nums
      return () => sumHelper(rest, acc + first)
    }
  }

  return trampoline(() => sumHelper(numbers, 0))
}

