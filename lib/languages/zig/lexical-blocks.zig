// Function block
fn calculate(x: i32) i32 {
    // This is a block that returns a value
    const y = x * 2;
    const z = y + 1;
    return z;  // Explicit return required
}

// Conditional blocks
fn check(value: i32) []const u8 {
    if (value > 0) {
        return "Positive";  // Explicit return
    } else {
        return "Non-positive";  // Explicit return
    }
}

// Switch expression blocks
fn describe(value: i32) []const u8 {
    return switch (value) {
        0 => "Zero",  // Each arm is an expression
        1...10 => "Small positive",
        else => "Other",
    };
}

// Block expressions can be used inline
const result = blk: {
    const a = 1;
    const b = 2;
    break :blk a + b;  // Returns 3
};

// Blocks create scope
{
    const x = 10;  // x only exists in this block
}
// std.debug.print("{}", .{x});  // Error: x is not defined here

