// Integers (signed and unsigned, various sizes)
const a: i32 = -42;    // 32-bit signed integer
const b: u64 = 100;    // 64-bit unsigned integer
const c = 0xff;        // Hexadecimal
const d = 0o77;        // Octal
const e = 0b1111_0000; // Binary with separator

// Floating-point
const f: f32 = 3.14;   // 32-bit float
const g: f64 = 2.71828; // 64-bit float

// Booleans
const is_active: bool = true;
const is_valid = is_active and a > 0;

// Optional type (similar to nullable)
const maybe_value: ?i32 = 42;
const no_value: ?i32 = null;

// Error union type
const result: anyerror!i32 = 42;
const error_result: anyerror!i32 = error.InvalidValue;

// Strings (byte arrays)
const greeting: []const u8 = "Hello";
const name = "Alice";

// Concatenation (at compile time)
const message = greeting ++ ", " ++ name ++ "!";

