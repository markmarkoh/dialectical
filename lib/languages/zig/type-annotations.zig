// Basic type annotations
const name: []const u8 = "Alice";
var age: u32 = 30;
const height: f64 = 1.75;
const is_active: bool = true;

// Function type annotations
fn greet(name: []const u8) []const u8 {
    return "Hello, " ++ name ++ "!";
}

// Type aliases
const UserId = u64;
const UserName = []const u8;

// Struct definitions
const User = struct {
    id: UserId,
    name: UserName,
    age: u32,
};

// Enum definitions
const Color = enum {
    Red,
    Green,
    Blue,
    
    pub fn isRed(self: Color) bool {
        return self == .Red;
    }
};

// Union types
const Value = union(enum) {
    Int: i32,
    Float: f64,
    Bool: bool,
    
    pub fn isInt(self: Value) bool {
        return self == .Int;
    }
};

// Error set
const FileError = error{
    NotFound,
    PermissionDenied,
    OutOfSpace,
};

// Function returning an error union
fn readFile(path: []const u8) FileError![]const u8 {
    if (path.len == 0) return FileError.NotFound;
    return "file contents";
}

