// For loop with range
fn countUp(n: i32) void {
    for (1..n + 1) |i| {
        std.debug.print("{d}\n", .{i});
    }
}

// While loop
fn countDown(from: i32) void {
    var current = from;
    while (current > 0) {
        std.debug.print("{d}\n", .{current});
        current -= 1;
    }
}

// Infinite loop with break
fn findFirstEven(numbers: []const i32) ?i32 {
    var index: usize = 0;
    while (true) {
        if (index >= numbers.len) {
            break null;
        }
        
        if (numbers[index] % 2 == 0) {
            break numbers[index];
        }
        
        index += 1;
    }
}

// For loop with array
fn sumArray(numbers: []const i32) i32 {
    var sum: i32 = 0;
    for (numbers) |num| {
        sum += num;
    }
    return sum;
}

// For loop with index
fn printIndexed(items: []const []const u8) void {
    for (items, 0..) |item, index| {
        std.debug.print("{d}: {s}\n", .{index, item});
    }
}

// Break and continue
fn sumUntilNegative(numbers: []const i32) i32 {
    var sum: i32 = 0;
    for (numbers) |num| {
        if (num < 0) {
            break;
        }
        if (num == 0) {
            continue;
        }
        sum += num;
    }
    return sum;
}

// Labeled breaks
fn findInMatrix(matrix: []const []const i32, target: i32) ?struct { usize, usize } {
    outer: for (matrix, 0..) |row, i| {
        for (row, 0..) |value, j| {
            if (value == target) {
                return .{ i, j };
            }
        }
    }
    return null;
}

// While with optional unwrapping
fn processQueue(queue: *std.ArrayList(i32)) void {
    while (queue.popOrNull()) |value| {
        std.debug.print("Processing: {d}\n", .{value});
    }
}

// Comptime for loops (executed at compile time)
fn comptimeSum(comptime numbers: []const i32) i32 {
    comptime {
        var sum: i32 = 0;
        for (numbers) |num| {
            sum += num;
        }
        return sum;
    }
}

// Inline for (unrolls the loop)
fn inlineSum(numbers: []const i32) i32 {
    var sum: i32 = 0;
    inline for (numbers) |num| {
        sum += num;
    }
    return sum;
}

