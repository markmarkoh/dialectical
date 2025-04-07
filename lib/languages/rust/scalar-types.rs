// Integers (signed and unsigned, various sizes)
let a: i32 = -42;    // 32-bit signed integer
let b: u64 = 100;    // 64-bit unsigned integer
let c = 0xff;        // Hexadecimal
let d = 0o77;        // Octal
let e = 0b1111_0000; // Binary with separator

// Floating-point
let f: f32 = 3.14;   // 32-bit float
let g: f64 = 2.71828; // 64-bit float (default)

// Booleans
let is_active: bool = true;
let is_valid = is_active && a > 0;

// Characters (Unicode scalar values)
let letter: char = 'A';
let emoji = '😊';    // 4 bytes, Unicode character

// Strings (two types)
let string_literal = "Hello"; // &str (string slice)
let owned_string = String::from("World"); // String (owned)

// Concatenation
let greeting = format!("{} {}", string_literal, owned_string);

