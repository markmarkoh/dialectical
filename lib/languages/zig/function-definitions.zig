// Basic function with type annotations
fn add(a: i32, b: i32) i32 {
    return a + b;  // Explicit return
}

// Function with multiple returns using error union
fn divide(a: f64, b: f64) !f64 {
    if (b == 0.0) {
        return error.DivisionByZero;
    }
    return a / b;
}

// Function with optional return
fn findItem(items: []const i32, value: i32) ?usize {
    for (items, 0..) |item, i| {
        if (item == value) {
            return i;
        }
    }
    return null;
}

// Generic function using comptime
fn min(comptime T: type, a: T, b: T) T {
    return if (a < b) a else b;
}

// Function with multiple return values using tuple
fn divMod(a: i32, b: i32) struct { quotient: i32, remainder: i32 } {
    return .{
        .quotient = a / b,
        .remainder = a % b,
    };
}

// Function with variadic arguments
fn sum(args: anytype) i32 {
    var result: i32 = 0;
    inline for (args) |arg| {
        result += arg;
    }
    return result;
}

// Calling variadic function
const total = sum(.{1, 2, 3, 4});  // 10

// Function with pointers
fn increment(value: *i32) void {
    value.* += 1;
}

// Calling function with pointer
var x: i32 = 5;
increment(&x);  // x is now 6

