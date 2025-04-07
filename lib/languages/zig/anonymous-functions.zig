// Zig doesn't have traditional anonymous functions or closures.
// Instead, it uses function pointers and structs with function fields.

// Function pointer type
const MathFn = fn(i32, i32) i32;

// Named function
fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Using function pointer
fn applyOperation(op: MathFn, a: i32, b: i32) i32 {
    return op(a, b);
}

// Calling with function pointer
const result = applyOperation(add, 5, 3);  // 8

// Struct with function field (similar to object with method)
const Calculator = struct {
    value: i32,
    
    // Method
    fn add(self: *Calculator, x: i32) void {
        self.value += x;
    }
    
    // Function that returns a function-like object
    fn makeAdder(value: i32) struct {
        value: i32,
        
        fn add(self: @This(), x: i32) i32 {
            return self.value + x;
        }
    } {
        return .{ .value = value };
    }
};

// Using the struct with function
var calc = Calculator{ .value = 0 };
calc.add(5);  // calc.value is now 5

// Using the function-like object
const adder = Calculator.makeAdder(10);
const sum = adder.add(5);  // 15

// Comptime function generation (another alternative)
fn makeAdder(comptime value: i32) fn(i32) i32 {
    return struct {
        fn add(x: i32) i32 {
            return x + value;
        }
    }.add;
}

// Using the generated function
const add5 = makeAdder(5);
const result2 = add5(10);  // 15

