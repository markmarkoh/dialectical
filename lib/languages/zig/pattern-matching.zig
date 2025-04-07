// Zig doesn't have built-in pattern matching like Gleam or Rust.
// Instead, it uses switch statements, if/else chains, and destructuring.

// Switch statement for basic matching
fn describeValue(value: i32) []const u8 {
    return switch (value) {
        0 => "Zero",
        1 => "One",
        2 => "Two",
        else => "Many",
    };
}

// Range matching in switch
fn describeRange(value: i32) []const u8 {
    return switch (value) {
        0 => "Zero",
        1...10 => "Small",
        11...100 => "Medium",
        else => "Large",
    };
}

// Matching with capture
fn describeOptional(value: ?i32) []const u8 {
    return switch (value) {
        null => "No value",
        // Capture the value in a variable
        |some_value| => std.fmt.allocPrint(
            allocator, 
            "Value: {d}", 
            .{some_value}
        ) catch "Error formatting",
    };
}

// Matching enum variants
const Animal = enum {
    Dog,
    Cat,
    Fish,
};

fn makeSound(animal: Animal) []const u8 {
    return switch (animal) {
        .Dog => "Woof",
        .Cat => "Meow",
        .Fish => "Blub",
    };
}

// Matching tagged union
const Value = union(enum) {
    Int: i32,
    Float: f64,
    Bool: bool,
};

fn describeValue2(value: Value) []const u8 {
    return switch (value) {
        .Int => |i| std.fmt.allocPrint(
            allocator, 
            "Integer: {d}", 
            .{i}
        ) catch "Error formatting",
        .Float => |f| std.fmt.allocPrint(
            allocator, 
            "Float: {d}", 
            .{f}
        ) catch "Error formatting",
        .Bool => |b| if (b) "True" else "False",
    };
}

// Destructuring structs
const Point = struct {
    x: i32,
    y: i32,
};

fn describePoint(point: Point) []const u8 {
    const x = point.x;
    const y = point.y;
    
    if (x == 0 and y == 0) {
        return "Origin";
    } else if (x == 0) {
        return "On Y-axis";
    } else if (y == 0) {
        return "On X-axis";
    } else {
        return "Regular point";
    }
}

