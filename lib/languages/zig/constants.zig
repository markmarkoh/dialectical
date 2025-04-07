// Constants (compile-time)
const PI: f64 = 3.14159;
const APP_NAME: []const u8 = "MyApp";
const MAX_RETRIES: u32 = 3;

// Using constants
fn circleArea(radius: f64) f64 {
    return PI * radius * radius;
}

// Constants can use complex expressions if they're computable at compile time
const DOUBLE_PI = PI * 2.0;
const SECONDS_PER_DAY = 60 * 60 * 24;

// Comptime blocks for complex compile-time computations
const FIBONACCI_10 = comptime blk: {
    var a: u32 = 0;
    var b: u32 = 1;
    var i: u32 = 0;
    while (i < 10) : (i += 1) {
        const next = a + b;
        a = b;
        b = next;
    }
    break :blk a;
};

// Constants in switch patterns
fn describeNumber(n: i32) []const u8 {
    return switch (n) {
        0 => "Zero",
        MAX_RETRIES => "Maximum retries reached",
        else => "Some other number",
    };
}

