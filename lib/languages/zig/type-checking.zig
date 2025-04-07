// Type checking examples
const name: []const u8 = "Alice";
// const name: []const u8 = 42;  // Compile error

// Function with type annotations
fn process(value: i32) []const u8 {
    return std.fmt.allocPrint(allocator, "{d}", .{value}) catch unreachable;
}

// Calling with wrong type
// process("hello");  // Compile error

// Comptime type checking
fn min(comptime T: type, a: T, b: T) T {
    return if (a < b) a else b;
}

// Using the generic function
const int_min = min(i32, 5, 10);
const float_min = min(f64, 5.5, 10.1);

// Type coercion is limited
const x: f64 = 42.0;
// const y: i32 = x;  // Error: no implicit conversion

// Explicit conversion
const z: i32 = @floatToInt(i32, x);

// Type inference
const inferred = 42; // i32 is inferred
var array = [_]i32{1, 2, 3}; // [3]i32 is inferred

