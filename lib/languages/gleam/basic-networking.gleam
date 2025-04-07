// Gleam can use Erlang's HTTP libraries or libraries like Wisp or Mist
// Here's an example using Gleam's Mist library for HTTP servers

import gleam/http
import gleam/http/request.{Request}
import gleam/http/response.{Response}
import gleam/bytes
import gleam/json
import mist.{type Connection}

// Define a handler function
fn handle_request(req: Request(Connection)) -> Response(Connection) {
  case req.path, req.method {
    // Root endpoint
    ["/"], http.Get -> 
      response.new(200)
      |> response.set_header("content-type", "text/html")
      |> response.set_body(bytes.from_string("<html><body><h1>Hello from Gleam!</h1></body></html>"))
    
    // API data endpoint
    ["/", "api", "data"], http.Get ->
      let data = json.object([
        #("message", json.string("Hello from Gleam API")),
        #("status", json.string("success"))
      ])
      
      response.new(200)
      |> response.set_header("content-type", "application/json")
      |> response.set_body(bytes.from_string(json.to_string(data)))
    
    // Echo endpoint
    ["/", "api", "echo"], http.Post -> {
      let body = request.get_body(req)
      
      response.new(200)
      |> response.set_header("content-type", "text/plain")
      |> response.set_body(bytes.from_string("Received: " <> bytes.to_string(body)))
    }
    
    // 404 Not Found
    _, _ ->
      response.new(404)
      |> response.set_header("content-type", "text/plain")
      |> response.set_body(bytes.from_string("404 Not Found"))
  }
}

// Start the server
pub fn main() {
  let handler = fn(req) { handle_request(req) }
  
  io.println("Server listening on port 8080")
  mist.run_service(8080, handler)
}

// Making HTTP requests using Gleam's HTTP client library
import gleam/http/request
import gleam/http/response
import gleam/httpc

fn make_request() {
  // Create a request
  let req = request.new()
    |> request.set_method(http.Get)
    |> request.set_host("example.com")
    |> request.set_path("/")
    |> request.set_header("user-agent", "Gleam HTTP Client")
  
  // Send the request
  case httpc.send(req) {
    Ok(resp) -> {
      io.println("Status: " <> int.to_string(resp.status))
      io.println("Body: " <> bytes.to_string(resp.body))
    }
    Error(error) -> {
      io.println("Error: " <> error)
    }
  }
}

