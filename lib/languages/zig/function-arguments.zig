// Basic function arguments
fn add(a: i32, b: i32) i32 {
    return a + b;
}

// Passing by reference (pointer)
fn increment(value: *i32) void {
    value.* += 1;
}

// Slices for variable-length arrays
fn sum(numbers: []const i32) i32 {
    var total: i32 = 0;
    for (numbers) |n| {
        total += n;
    }
    return total;
}

// Optional arguments
fn greet(name: []const u8, greeting: ?[]const u8) []const u8 {
    const default_greeting = "Hello";
    const actual_greeting = greeting orelse default_greeting;
    return actual_greeting ++ ", " ++ name ++ "!";
}

// Calling with optional arguments
const message1 = greet("Alice", null);  // "Hello, Alice!"
const message2 = greet("Bob", "Hi");    // "Hi, Bob!"

// Struct for named arguments
const Config = struct {
    name: []const u8,
    age: ?u32 = null,
    email: ?[]const u8 = null,
};

fn createUser(config: Config) User {
    return User{
        .id = generateId(),
        .name = config.name,
        .age = config.age orelse 0,
        .email = config.email orelse "",
    };
}

// Calling with named arguments
const user = createUser(.{
    .name = "Alice",
    .age = 30,
    .email = "alice@example.com",
});

// Variadic arguments with comptime
fn print(comptime fmt: []const u8, args: anytype) void {
    const stdout = std.io.getStdOut().writer();
    stdout.print(fmt, args) catch unreachable;
}

// Calling with variadic arguments
print("Name: {s}, Age: {d}\n", .{ "Alice", 30 });

// Helper types for the examples
const User = struct {
    id: []const u8,
    name: []const u8,
    age: u32,
    email: []const u8,
};

fn generateId() []const u8 {
    return "user123";
}

