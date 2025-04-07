// Error sets
const FileError = error{
    NotFound,
    PermissionDenied,
    OutOfSpace,
};

const MathError = error{
    DivisionByZero,
    Overflow,
};

// Combining error sets
const AppError = FileError || MathError;

// Function that returns an error union
fn divide(a: f64, b: f64) !f64 {
    if (b == 0.0) {
        return error.DivisionByZero;
    }
    return a / b;
}

// Using try to propagate errors
fn complexCalculation(a: f64, b: f64) !f64 {
    const result = try divide(a, b);
    const doubled = try double(result);
    return doubled;
}

fn double(x: f64) !f64 {
    if (x > 1e100) {
        return error.Overflow;
    }
    return x * 2.0;
}

// Handling errors with catch
fn calculateWithFallback(a: f64, b: f64) f64 {
    return divide(a, b) catch |err| {
        std.debug.print("Error: {s}\n", .{@errorName(err)});
        return 0.0;
    };
}

// Handling errors with if
fn processResult(result: anyerror!i32) void {
    if (result) |value| {
        std.debug.print("Success: {d}\n", .{value});
    } else |err| {
        std.debug.print("Error: {s}\n", .{@errorName(err)});
    }
}

// Handling specific errors
fn readFile(path: []const u8) ![]const u8 {
    const file = std.fs.cwd().openFile(path, .{}) catch |err| switch (err) {
        error.FileNotFound => {
            std.debug.print("File not found: {s}\n", .{path});
            return err;
        },
        error.AccessDenied => {
            std.debug.print("Access denied: {s}\n", .{path});
            return err;
        },
        else => return err,
    };
    defer file.close();
    
    return file.readToEndAlloc(allocator, std.math.maxInt(usize)) catch |err| {
        std.debug.print("Failed to read file: {s}\n", .{@errorName(err)});
        return err;
    };
}

// Creating custom error sets
const ValidationError = error{
    InvalidEmail,
    PasswordTooShort,
    UsernameTaken,
};

fn validateUser(user: User) ValidationError!void {
    if (!isValidEmail(user.email)) {
        return error.InvalidEmail;
    }
    if (user.password.len < 8) {
        return error.PasswordTooShort;
    }
    if (isUsernameTaken(user.username)) {
        return error.UsernameTaken;
    }
}

// Helper functions and types for examples
const User = struct {
    username: []const u8,
    email: []const u8,
    password: []const u8,
};

fn isValidEmail(email: []const u8) bool {
    return std.mem.indexOf(u8, email, "@") != null;
}

fn isUsernameTaken(username: []const u8) bool {
    return std.mem.eql(u8, username, "admin");
}

