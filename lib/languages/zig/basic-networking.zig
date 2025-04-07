// Basic HTTP server using standard library
const std = @import("std");
const net = std.net;
const mem = std.mem;
const Allocator = std.mem.Allocator;

pub fn main() !void {
    // Create an allocator
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    // Create a TCP server
    const address = try net.Address.parseIp("127.0.0.1", 8080);
    var server = try address.listen(.{});
    defer server.deinit();

    std.debug.print("Server listening on port 8080\n", .{});

    // Accept and handle connections
    while (true) {
        var conn = try server.accept();
        defer conn.stream.close();

        // Handle the connection
        try handleConnection(allocator, conn.stream);
    }
}

// Handle an individual HTTP connection
fn handleConnection(allocator: Allocator, stream: net.Stream) !void {
    // Buffer to store the request
    var buffer: [1024]u8 = undefined;
    const bytes_read = try stream.read(&buffer);
    const request = buffer[0..bytes_read];

    // Parse the request (very basic parsing)
    var lines = mem.split(u8, request, "\r\n");
    const request_line = lines.first();
    var parts = mem.split(u8, request_line, " ");
    const method = parts.next() orelse "";
    const path = parts.next() orelse "";

    // Route the request based on path and method
    var response: []const u8 = undefined;
    defer if (mem.eql(u8, method, "POST") and mem.eql(u8, path, "/api/echo")) allocator.free(response);

    if (mem.eql(u8, method, "GET") and mem.eql(u8, path, "/")) {
        response = 
            "HTTP/1.1 200 OK\r\n" ++
            "Content-Type: text/html\r\n" ++
            "\r\n" ++
            "<html><body><h1>Hello from Zig!</h1></body></html>";
    } else if (mem.eql(u8, method, "GET") and mem.eql(u8, path, "/api/data")) {
        response = 
            "HTTP/1.1 200 OK\r\n" ++
            "Content-Type: application/json\r\n" ++
            "\r\n" ++
            "{\"message\": \"Hello from Zig API\", \"status\": \"success\"}";
    } else if (mem.eql(u8, method, "POST") and mem.eql(u8, path, "/api/echo")) {
        // Extract the body (very basic implementation)
        const body_marker = "\r\n\r\n";
        const body_start = if (mem.indexOf(u8, request, body_marker)) |idx| idx + body_marker.len else 0;
        const body = request[body_start..];

        // Allocate memory for the response
        const prefix = 
            "HTTP/1.1 200 OK\r\n" ++
            "Content-Type: text/plain\r\n" ++
            "\r\n" ++
            "Received: ";
        response = try std.fmt.allocPrint(allocator, "{s}{s}", .{ prefix, body });
    } else {
        response = 
            "HTTP/1.1 404 NOT FOUND\r\n" ++
            "Content-Type: text/plain\r\n" ++
            "\r\n" ++
            "404 Not Found";
    }

    // Send the response
    _ = try stream.write(response);
}

// Making an HTTP request using standard library
fn makeRequest(allocator: Allocator) ![]u8 {
    // Connect to the server
    const address = try net.Address.parseIp("93.184.216.34", 80); // example.com
    var conn = try net.tcpConnectToAddress(address);
    defer conn.close();

    // Write the HTTP request
    const request = 
        "GET / HTTP/1.1\r\n" ++
        "Host: example.com\r\n" ++
        "Connection: close\r\n" ++
        "\r\n";
    _ = try conn.write(request);

    // Read the response
    var buffer = std.ArrayList(u8).init(allocator);
    defer buffer.deinit();

    var read_buffer: [1024]u8 = undefined;
    while (true) {
        const bytes_read = try conn.read(&read_buffer);
        if (bytes_read == 0) break;
        try buffer.appendSlice(read_buffer[0..bytes_read]);
    }

    return buffer.toOwnedSlice();
}

// HTTP client function
fn httpGet(allocator: Allocator, url: []const u8) ![]u8 {
    // Parse URL (very basic implementation)
    const http_prefix = "http://";
    if (!mem.startsWith(u8, url, http_prefix)) {
        return error.InvalidUrl;
    }

    const host_and_path = url[http_prefix.len..];
    const path_start = mem.indexOf(u8, host_and_path, "/") orelse host_and_path.len;
    const host = host_and_path[0..path_start];
    const path = if (path_start < host_and_path.len) host_and_path[path_start..] else "/";

    // Resolve host to IP address (simplified)
    // In a real implementation, you would use DNS resolution
    // For this example, we'll assume example.com (93.184.216.34)
    const address = try net.Address.parseIp("93.184.216.34", 80);

    // Connect to the server
    var conn = try net.tcpConnectToAddress(address);
    defer conn.close();

    // Write the HTTP request
    const request = try std.fmt.allocPrint(
        allocator,
        "GET {s} HTTP/1.1\r\n" ++
        "Host: {s}\r\n" ++
        "Connection: close\r\n" ++
        "\r\n",
        .{ path, host }
    );
    defer allocator.free(request);
    _ = try conn.write(request);

    // Read the response
    var buffer = std.ArrayList(u8).init(allocator);
    errdefer buffer.deinit();

    var read_buffer: [1024]u8 = undefined;
    while (true) {
        const bytes_read = try conn.read(&read_buffer);
        if (bytes_read == 0) break;
        try buffer.appendSlice(read_buffer[0..bytes_read]);
    }

    return buffer.toOwnedSlice();
}

