// Generic function using comptime
fn min(comptime T: type, a: T, b: T) T {
    return if (a < b) a else b;
}

// Using a generic function
const int_min = min(i32, 5, 10);
const float_min = min(f64, 5.5, 10.1);

// Generic data structure
fn List(comptime T: type) type {
    return struct {
        const Self = @This();
        
        items: []T,
        allocator: *std.mem.Allocator,
        len: usize,
        
        pub fn init(allocator: *std.mem.Allocator) Self {
            return Self{
                .items = &[_]T{},
                .allocator = allocator,
                .len = 0,
            };
        }
        
        pub fn append(self: *Self, item: T) !void {
            const new_items = try self.allocator.alloc(T, self.len + 1);
            std.mem.copy(T, new_items, self.items);
            new_items[self.len] = item;
            
            if (self.len > 0) {
                self.allocator.free(self.items);
            }
            
            self.items = new_items;
            self.len += 1;
        }
        
        pub fn get(self: Self, index: usize) ?T {
            if (index >= self.len) return null;
            return self.items[index];
        }
    };
}

// Using the generic data structure
const IntList = List(i32);
var list = IntList.init(allocator);
try list.append(42);
try list.append(99);

// Generic function with constraints
fn largest(comptime T: type, items: []const T) ?T {
    if (items.len == 0) return null;
    
    // This will only compile if T supports the < operator
    var largest_item = items[0];
    for (items[1..]) |item| {
        if (largest_item < item) {
            largest_item = item;
        }
    }
    return largest_item;
}

// Compile-time duck typing
fn printInfo(comptime T: type, value: T) void {
    const info = @typeInfo(T);
    switch (info) {
        .Int => std.debug.print("Integer: {d}\n", .{value}),
        .Float => std.debug.print("Float: {d}\n", .{value}),
        .Struct => {
            std.debug.print("Struct with fields:\n", .{});
            inline for (std.meta.fields(T)) |field| {
                std.debug.print("  {s}: {any}\n", .{field.name, @field(value, field.name)});
            }
        },
        else => std.debug.print("Other type\n", .{}),
    }
}

