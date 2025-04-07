// Variable declaration and assignment
const name = "Alice"; // Immutable
var age: u32 = 30;    // Mutable

// Mutability
age = 31;             // OK
// name = "Bob";      // Error: cannot assign to constant

// Explicit undefined initialization
var buffer: [100]u8 = undefined;

// Comptime variables (evaluated at compile time)
comptime var counter = 0;
counter += 1;

// Destructuring assignment
const point = .{ .x = 10, .y = 20 };
const x = point.x;
const y = point.y;

// Multiple returns and assignment
const values = getValues();
const a = values[0];
const b = values[1];

fn getValues() [2]i32 {
    return .{ 1, 2 };
}

// Pointer assignment
var value: i32 = 42;
var ptr: *i32 = &value;
ptr.* = 100;  // value is now 100

