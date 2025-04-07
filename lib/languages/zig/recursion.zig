// Simple recursion (factorial)
fn factorial(n: u64) u64 {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Tail recursion (more efficient)
fn factorialTail(n: u64) u64 {
    return factorialHelper(n, 1);
}

fn factorialHelper(n: u64, acc: u64) u64 {
    if (n == 0) {
        return acc;
    } else {
        return factorialHelper(n - 1, n * acc);
    }
}

// Recursive list processing
fn sum(numbers: []const i32) i32 {
    if (numbers.len == 0) {
        return 0;
    } else {
        return numbers[0] + sum(numbers[1..]);
    }
}

// Tail recursive list processing
fn sumTail(numbers: []const i32) i32 {
    return sumHelper(numbers, 0);
}

fn sumHelper(numbers: []const i32, acc: i32) i32 {
    if (numbers.len == 0) {
        return acc;
    } else {
        return sumHelper(numbers[1..], acc + numbers[0]);
    }
}

// Iterative alternatives (often preferred in Zig)
fn factorialIter(n: u64) u64 {
    var result: u64 = 1;
    var i: u64 = 1;
    while (i <= n) : (i += 1) {
        result *= i;
    }
    return result;
}

fn sumIter(numbers: []const i32) i32 {
    var total: i32 = 0;
    for (numbers) |n| {
        total += n;
    }
    return total;
}

// Recursive data structures
const Node = struct {
    value: i32,
    next: ?*Node,
    
    fn init(value: i32) Node {
        return Node{
            .value = value,
            .next = null,
        };
    }
};

// Recursive function for linked list
fn countNodes(node: ?*const Node) usize {
    if (node == null) {
        return 0;
    } else {
        return 1 + countNodes(node.?.next);
    }
}

