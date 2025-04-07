// Type guards using type predicates
function isString(value: any): value is string {
  return typeof value === "string"
}

function isNumber(value: any): value is number {
  return typeof value === "number"
}

function process(value: any): string {
  if (isString(value)) {
    // TypeScript knows value is a string here
    return `String: ${value.toUpperCase()}`
  } else if (isNumber(value)) {
    // TypeScript knows value is a number here
    return `Number: ${value.toFixed(2)}`
  } else {
    return "Unknown type"
  }
}

// Simulating guards with switch and conditions
function describe(x: number): string {
  switch (true) {
    case x === 0:
      return "Zero"
    case x > 0 && x < 10:
      return "Small positive"
    case x >= 10 && x < 100:
      return "Medium positive"
    case x >= 100:
      return "Large positive"
    case x < 0 && x > -10:
      return "Small negative"
    case x <= -10 && x > -100:
      return "Medium negative"
    default:
      return "Large negative"
  }
}

// Using if/else chains instead of guards
function processPair(pair: [number, number]): string {
  const [a, b] = pair

  if (a === b) {
    return "Equal"
  } else if (a > b) {
    return "First is larger"
  } else {
    return "Second is larger"
  }
}

// Discriminated unions as an alternative to guards
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number }

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius
    case "rectangle":
      return shape.width * shape.height
    case "triangle":
      return 0.5 * shape.base * shape.height
  }
}

