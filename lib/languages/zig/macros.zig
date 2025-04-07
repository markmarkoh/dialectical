// Zig doesn't have traditional macros like C or Rust.
// Instead, it uses comptime (compile-time) evaluation and 
// metaprogramming features to achieve similar results.

// Function that generates code at compile time
fn generateAddFunction(comptime T: type) type {
    return struct {
        pub fn add(a: T, b: T) T {
            return a + b;
        }
    };
}

// Using the generated function
const IntAdder = generateAddFunction(i32);
const result = IntAdder.add(5, 3);  // 8

// Compile-time code generation with loops
fn generateFields(comptime field_types: anytype) type {
    const fields = comptime blk: {
        var fields_array: [field_types.len]std.builtin.Type.StructField = undefined;
        for (field_types, 0..) |field_type, i| {
            fields_array[i] = .{
                .name = std.fmt.comptimePrint("field{d}", .{i}),
                .type = field_type,
                .default_value = null,
                .is_comptime = false,
                .alignment = @alignOf(field_type),
            };
        }
        break :blk fields_array;
    };
    
    return @Type(.{
        .Struct = .{
            .layout = .Auto,
            .fields = &fields,
            .decls = &[_]std.builtin.Type.Declaration{},
            .is_tuple = false,
        },
    });
}

// Using the generated struct type
const MyStruct = generateFields(.{ i32, []const u8, bool });
var instance = MyStruct{
    .field0 = 42,
    .field1 = "hello",
    .field2 = true,
};

// Compile-time string manipulation
fn comptimeStringReplace(
    comptime input: []const u8,
    comptime pattern: []const u8,
    comptime replacement: []const u8
) []const u8 {
    if (pattern.len == 0) return input;
    
    comptime {
        var result: []const u8 = "";
        var i: usize = 0;
        
        while (i < input.len) {
            if (i + pattern.len <= input.len and std.mem.eql(u8, input[i..i+pattern.len], pattern)) {
                result = result ++ replacement;
                i += pattern.len;
            } else {
                result = result ++ input[i..i+1];
                i += 1;
            }
        }
        
        return result;
    }
}

// Using the compile-time string manipulation
const transformed = comptimeStringReplace("Hello, World!", "World", "Zig");
// "Hello, Zig!"

// Compile-time reflection
fn debugPrint(value: anytype) void {
    const T = @TypeOf(value);
    const info = @typeInfo(T);
    
    switch (info) {
        .Int => std.debug.print("Integer: {d}\n", .{value}),
        .Float => std.debug.print("Float: {d}\n", .{value}),
        .Bool => std.debug.print("Boolean: {any}\n", .{value}),
        .Pointer => |ptr_info| {
            if (ptr_info.size == .Slice and ptr_info.child == u8) {
                std.debug.print("String: {s}\n", .{value});
            } else {
                std.debug.print("Pointer: {any}\n", .{value});
            }
        },
        .Struct => {
            std.debug.print("Struct with fields:\n", .{});
            inline for (std.meta.fields(T)) |field| {
                std.debug.print("  {s}: {any}\n", .{field.name, @field(value, field.name)});
            }
        },
        else => std.debug.print("Other type: {any}\n", .{value}),
    }
}

