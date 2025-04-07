// Basic import
const std = @import("std");

// Import specific modules
const fs = std.fs;
const mem = std.mem;
const Allocator = std.mem.Allocator;

// Import from a local file
const math = @import("math.zig");

// Using imports
pub fn example() void {
    // Using standard library
    var buffer: [100]u8 = undefined;
    var fba = std.heap.FixedBufferAllocator.init(&buffer);
    
    // Using local module
    const sum = math.add(5, 3);
    
    // Namespaced access
    const file = fs.cwd().createFile("example.txt", .{}) catch unreachable;
    defer file.close();
}

// Importing C libraries
const c = @cImport({
    @cInclude("stdio.h");
});

pub fn printWithC() void {
    _ = c.printf("Hello from C\n");
}

