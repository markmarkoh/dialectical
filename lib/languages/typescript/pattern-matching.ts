function matchExample(value: number | [number, number] | number[]): string {
  // Using switch for simple value matching
  switch (value) {
    case 0:
      return "Zero"
    default:
      // For complex patterns, we need to use conditional logic
      if (typeof value === "number") {
        if (value > 0) {
          return `Positive: ${value}`
        }
      }
      // Check if it's a tuple (fixed-length array)
      else if (Array.isArray(value) && value.length === 2) {
        const [a, b] = value
        return `Tuple with ${a} and ${b}`
      }
      // Check if it's a non-empty array
      else if (Array.isArray(value) && value.length > 0) {
        const [head, ...tail] = value
        return `List starting with ${head}`
      }

      return "Something else"
  }
}

