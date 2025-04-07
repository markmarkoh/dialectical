// Basic import
import math

// Import with alias
import http/response as resp

// Import specific functions
import list.{map, filter, fold}

// Unqualified imports with 'use'
import string
use string.{concat, inspect}

// Using imports
fn example() {
  let sum = math.add(1, 2)
  let response = resp.new(200)
  let doubled = map([1, 2, 3], fn(x) { x * 2 })
  let greeting = concat(["Hello, ", "Gleam!"])
}

