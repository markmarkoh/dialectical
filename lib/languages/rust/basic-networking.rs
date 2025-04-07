// Basic HTTP server using standard library
use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};
use std::thread;

fn main() {
   // Create a TCP server listening on port 8080
   let listener = TcpListener::bind("127.0.0.1:8080").unwrap();
   println!("Server listening on port 8080");

   // Accept connections and process them in separate threads
   for stream in listener.incoming() {
       match stream {
           Ok(stream) => {
               // Spawn a new thread for each connection
               thread::spawn(|| {
                   handle_connection(stream);
               });
           }
           Err(e) => {
               eprintln!("Connection failed: {}", e);
           }
       }
   }
}

// Handle an individual HTTP connection
fn handle_connection(mut stream: TcpStream) {
   // Buffer to store the request
   let mut buffer = [0; 1024];
   
   // Read from the stream
   match stream.read(&mut buffer) {
       Ok(_) => {
           // Convert buffer to string
           let request = String::from_utf8_lossy(&buffer[..]);
           
           // Parse the request (very basic parsing)
           let request_line = request.lines().next().unwrap_or("");
           let parts: Vec<&str> = request_line.split_whitespace().collect();
           
           if parts.len() >= 2 {
               let method = parts[0];
               let path = parts[1];
               
               // Route the request based on path and method
               let response = match (method, path) {
                   ("GET", "/") => {
                       "HTTP/1.1 200 OK\r\n\
                        Content-Type: text/html\r\n\
                        \r\n\
                        <html><body><h1>Hello from Rust!</h1></body></html>"
                   },
                   ("GET", "/api/data") => {
                       "HTTP/1.1 200 OK\r\n\
                        Content-Type: application/json\r\n\
                        \r\n\
                        {\"message\": \"Hello from Rust API\", \"status\": \"success\"}"
                   },
                   ("POST", "/api/echo") => {
                       // Extract the body (very basic implementation)
                       let body_start = request.find("\r\n\r\n").map(|i| i + 4).unwrap_or(0);
                       let body = &request[body_start..];
                       
                       format!("HTTP/1.1 200 OK\r\n\
                               Content-Type: text/plain\r\n\
                               \r\n\
                               Received: {}", body)
                   },
                   _ => {
                       "HTTP/1.1 404 NOT FOUND\r\n\
                        Content-Type: text/plain\r\n\
                        \r\n\
                        404 Not Found"
                   }
               };
               
               // Send the response
               stream.write_all(response.as_bytes()).unwrap();
           }
       },
       Err(e) => {
           eprintln!("Failed to read from connection: {}", e);
       }
   }
}

// Making an HTTP request using standard library
fn make_request() -> Result<String, Box<dyn std::error::Error>> {
   // Connect to the server
   let mut stream = TcpStream::connect("example.com:80")?;
   
   // Write the HTTP request
   let request = "GET / HTTP/1.1\r\n\
                  Host: example.com\r\n\
                  Connection: close\r\n\
                  \r\n";
   stream.write_all(request.as_bytes())?;
   
   // Read the response
   let mut response = String::new();
   stream.read_to_string(&mut response)?;
   
   Ok(response)
}

// For a more complete HTTP client, you would typically use a crate like reqwest
// But here's a basic example using just the standard library
fn http_get(url: &str) -> Result<String, Box<dyn std::error::Error>> {
   use std::net::ToSocketAddrs;
   
   // Parse URL (very basic implementation)
   let url_parts: Vec<&str> = url.split("://").collect();
   let host_and_path: Vec<&str> = url_parts.get(1).unwrap_or(&"").split('/').collect();
   let host = host_and_path[0];
   let path = if host_and_path.len() > 1 {
       format!("/{}", host_and_path[1..].join("/"))
   } else {
       "/".to_string()
   };
   
   // Resolve host to IP address
   let addr = format!("{}:80", host).to_socket_addrs()?.next()
       .ok_or("Failed to resolve host")?;
   
   // Connect to the server
   let mut stream = TcpStream::connect(addr)?;
   
   // Write the HTTP request
   let request = format!("GET {} HTTP/1.1\r\n\
                         Host: {}\r\n\
                         Connection: close\r\n\
                         \r\n", path, host);
   stream.write_all(request.as_bytes())?;
   
   // Read the response
   let mut response = String::new();
   stream.read_to_string(&mut response)?;
   
   Ok(response)
}

