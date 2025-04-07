// Basic if/else
fn checkNumber(x: i32) []const u8 {
    if (x > 0) {
        return "Positive";
    } else if (x < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// If as an expression with variable capture
const value: ?i32 = 42;
const result = if (value) |v| v else 0;

// If without else (only for void expressions)
fn maybeLog(message: []const u8, verbose: bool) void {
    if (verbose) {
        std.debug.print("{s}\n", .{message});
    }
}

// Optional unwrapping with if
fn processOptional(value: ?i32) void {
    if (value) |v| {
        std.debug.print("Got value: {d}\n", .{v});
    } else {
        std.debug.print("No value\n", .{});
    }
}

// Error handling with if
fn processResult(result: anyerror!i32) void {
    if (result) |value| {
        std.debug.print("Success: {d}\n", .{value});
    } else |err| {
        std.debug.print("Error: {s}\n", .{@errorName(err)});
    }
}

// Nested conditions
fn processData(data: ?[]const u8) []const u8 {
    if (data) |value| {
        if (value.len > 0) {
            return "Valid data";
        } else {
            return "Empty data";
        }
    } else {
        return "No data";
    }
}

// Using switch for multi-way conditionals (often preferred over nested if/else)
fn checkNumberSwitch(x: i32) []const u8 {
    return switch (true) {
        x > 0 => "Positive",
        x < 0 => "Negative",
        else => "Zero",
    };
}

