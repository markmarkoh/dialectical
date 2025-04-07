// Zig's memory management is manual, with explicit allocation and deallocation.

const std = @import("std");
const allocator = std.heap.page_allocator;

// Allocation and Deallocation
fn allocation_example() !void {
  // Allocate memory
  const data = try allocator.alloc(u8, 10);
  defer allocator.free(data); // Deallocate memory when the function exits

  // Initialize the memory
  for (data) |*byte, i| {
    byte.* = 'A' + @truncate(u8, i);
  }

  // Use the memory
  std.debug.print("{s}
", .{data});
}

// Arena Allocator
fn arena_example() !void {
  var arena = std.heap.ArenaAllocator.init(allocator);
  defer arena.deinit();
  const allocator = arena.allocator();

  // Allocate memory from the arena
  const data = try allocator.alloc(u8, 10);

  // Initialize the memory
  for (data) |*byte, i| {
    byte.* = '0' + @truncate(u8, i);
  }

  // Use the memory
  std.debug.print("{s}
", .{data});
  // Memory is freed when the arena is deinitialized
}

// Using a custom allocator
const MyAllocator = struct {
  allocator: std.mem.Allocator,

  fn init(allocator: std.mem.Allocator) MyAllocator {
    return MyAllocator{ .allocator = allocator };
  }

  fn alloc(self: *MyAllocator, size: usize, alignment: u8) ![]u8 {
    return self.allocator.alloc(u8, size, alignment);
  }

  fn free(self: *MyAllocator, slice: []u8) void {
    self.allocator.free(slice);
  }
};

fn custom_allocator_example() !void {
  var arena = std.heap.ArenaAllocator.init(allocator);
  defer arena.deinit();
  const allocator = arena.allocator();

  const my_allocator = MyAllocator.init(allocator);

  const data = try my_allocator.alloc(u8, 10, 1);
  defer my_allocator.free(data);

  for (data) |*byte, i| {
    byte.* = 'a' + @truncate(u8, i);
  }

  std.debug.print("{s}
", .{data});
}

pub fn main() !void {
  try allocation_example();
  try arena_example();
  try custom_allocator_example();
}

