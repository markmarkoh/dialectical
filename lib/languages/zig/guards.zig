// Zig doesn't have dedicated guard clauses like Gleam or Rust.
// Instead, it uses early returns, switch statements, and if conditions.

// Early returns as guards
fn processPositive(x: i32) !i32 {
    if (x <= 0) {
        return error.NegativeValue;
    }
    
    // Only reached if x > 0
    return x * 2;
}

// Multiple guard conditions
fn validateUser(user: User) !void {
    if (user.name.len == 0) {
        return error.EmptyName;
    }
    
    if (user.age < 18) {
        return error.TooYoung;
    }
    
    if (user.email.len == 0) {
        return error.NoEmail;
    }
    
    // Only reached if all validations pass
    std.debug.print("User is valid\n", .{});
}

// Switch with range conditions (similar to guards)
fn describe(x: i32) []const u8 {
    return switch (true) {
        x == 0 => "Zero",
        x > 0 and x < 10 => "Small positive",
        x >= 10 and x < 100 => "Medium positive",
        x >= 100 => "Large positive",
        x < 0 and x > -10 => "Small negative",
        x <= -10 and x > -100 => "Medium negative",
        else => "Large negative",
    };
}

// If-else chains with conditions
fn processPair(a: i32, b: i32) []const u8 {
    if (a == b) {
        return "Equal";
    } else if (a > b) {
        return "First is larger";
    } else {
        return "Second is larger";
    }
}

// Unwrapping optionals with guards
fn processOptional(value: ?i32) []const u8 {
    if (value) |v| {
        if (v > 0) {
            return "Positive";
        } else if (v < 0) {
            return "Negative";
        } else {
            return "Zero";
        }
    } else {
        return "No value";
    }
}

// Helper type for examples
const User = struct {
    name: []const u8,
    age: u32,
    email: []const u8,
};

