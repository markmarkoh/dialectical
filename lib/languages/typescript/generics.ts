// Generic function
function identity<T>(x: T): T {
  return x
}

// Using a generic function
const intValue = identity(42)
const stringValue = identity("hello")

// Generic interface
interface Box<T> {
  value: T
}

// Using a generic interface
const intBox: Box<number> = { value: 42 }
const stringBox: Box<string> = { value: "hello" }

// Generic function with multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second]
}

// Generic function with constraints
function sum<T extends number>(numbers: T[]): number {
  return numbers.reduce((acc, n) => acc + n, 0)
}

// More complex constraints
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 }
}

// Generic classes
class Queue<T> {
  private items: T[] = []

  enqueue(item: T): void {
    this.items.push(item)
  }

  dequeue(): T | undefined {
    return this.items.shift()
  }
}

// Generic type aliases with constraints
type Nullable<T> = T | null | undefined
type KeyOf<T> = keyof T
type Primitive = string | number | boolean

