// File: math.zig
// Public functions are exported
pub fn add(a: i32, b: i32) i32 {
    return a + b;
}

pub fn subtract(a: i32, b: i32) i32 {
    return a - b;
}

// Private function (not exported)
fn square(x: i32) i32 {
    return x * x;
}

// File: main.zig
const math = @import("math.zig");

pub fn main() void {
    const result = math.add(5, 3);  // 8
    // math.square(4);  // Error: square is private
}

