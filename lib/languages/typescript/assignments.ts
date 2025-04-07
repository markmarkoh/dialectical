// Variable declarations
const name = "Alice" // Immutable binding
let age = 30 // Mutable binding
var legacy = true // Function-scoped binding (avoid)

// Reassignment
age = 31 // OK
// name = "Bob";       // Error: cannot reassign const

// Block scoping
{
  const x = 10
  const y = 20
  // Both x and y only exist in this block
}
// console.log(x);  // Error: x is not defined

// Destructuring assignment
const [first, second] = [1, 2]
const { id, title } = { id: 1, title: "Post" }

// Object and array mutations (even with const)
const user = { name: "Alice" }
user.name = "Bob" // OK - the binding is const, not the object

const numbers = [1, 2, 3]
numbers.push(4) // OK - the binding is const, not the array

