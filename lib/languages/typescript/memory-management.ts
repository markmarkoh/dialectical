// TypeScript uses JavaScript's memory management, which is based on automatic garbage collection

// Memory is automatically allocated when objects are created
function createObjects() {
  // Memory is allocated for this array and its contents
  const array = new Array(1000).fill(0).map((_, i) => ({ id: i, data: `Item ${i}` }))

  // Memory is allocated for this closure, which captures the array
  const processor = () => {
    console.log(`Array has ${array.length} items`)
    return array.filter((item) => item.id % 2 === 0)
  }

  return processor // The array remains in memory as long as this closure exists
}

// Memory leaks can still occur despite garbage collection
function potentialLeak() {
  const elements: HTMLElement[] = []

  // This could cause a memory leak if addElements is called repeatedly
  // and the DOM elements are never removed
  function addElements() {
    const element = document.createElement("div")
    document.body.appendChild(element)

    // Storing a reference prevents garbage collection
    elements.push(element)

    // Event listeners can also cause leaks if not properly removed
    element.addEventListener("click", () => {
      console.log("clicked")
    })
  }

  return addElements
}

// WeakMap and WeakSet help prevent memory leaks
const cache = new WeakMap<object, any>()

function memorize(obj: object) {
  if (!cache.has(obj)) {
    cache.set(obj, expensiveComputation(obj))
  }
  return cache.get(obj)
  // When obj has no other references, it can be garbage collected
  // along with its cached value
}

// Helper function for the example
function expensiveComputation(obj: object): any {
  // Simulate expensive computation
  return { result: "computed", original: obj }
}

