# Basic HTTP server using Nim's standard library
import asynchttpserver, asyncdispatch
import json, strutils, times
import httpclient

proc handleRequest(req: Request): Future[void] {.async.} =
  let path = req.url.path
  
  case path
  of "/":
    # Root endpoint
    let html = """
      <html>
        <body>
          <h1>Hello from Nim!</h1>
        </body>
      </html>
    """
    await req.respond(Http200, html, newHttpHeaders([("Content-Type", "text/html")]))
  
  of "/api/data":
    # API data endpoint
    let data = %*{
      "message": "Hello from Nim API",
      "status": "success",
      "timestamp": $now()
    }
    
    await req.respond(Http200, $data, newHttpHeaders([("Content-Type", "application/json")]))
  
  of "/api/echo":
    # Echo endpoint
    if req.reqMethod == HttpPost:
      let body = req.body
      let contentType = req.headers.getOrDefault("Content-Type")
      
      var responseData: JsonNode
      
      if contentType.startsWith("application/json"):
        # Parse JSON body
        try:
          responseData = parseJson(body)
        except JsonParsingError:
          await req.respond(Http400, "Invalid JSON", newHttpHeaders([("Content-Type", "text/plain")]))
          return
      else:
        # Treat as plain text
        responseData = %*{"text": body}
      
      # Add echo information
      responseData["echo"] = %true
      responseData["method"] = %($req.reqMethod)
      responseData["contentType"] = %contentType
      responseData["length"] = %body.len
      
      await req.respond(Http200, $responseData, newHttpHeaders([("Content-Type", "application/json")]))
    else:
      await req.respond(Http405, "Method not allowed", newHttpHeaders([("Content-Type", "text/plain")]))
  
  else:
    # 404 Not Found
    await req.respond(Http404, "Not Found", newHttpHeaders([("Content-Type", "text/plain")]))

proc startServer() {.async.} =
  var server = newAsyncHttpServer()
  await server.listen(Port(8080))
  
  echo "Server listening on port 8080"
  
  while true:
    if server.shouldAcceptRequest():
      await server.acceptRequest(handleRequest)
    else:
      await sleepAsync(500)

# Making HTTP requests using Nim's standard library

proc makeGetRequest() =
  # Create a new HTTP client
  let client = newHttpClient()
  
  # Set headers
  client.headers = newHttpHeaders({
    "User-Agent": "Nim HTTP Client",
    "Accept": "text/html"
  })
  
  # Send the request
  let response = client.get("https://example.com")
  
  # Print response details
  echo "Status: ", response.status
  echo "Headers: ", response.headers
  echo "Body length: ", response.body.len, " bytes"
  echo "Body preview: ", response.body[0..min(99, response.body.len-1)]

# Making a POST request with JSON body
proc makePostRequest() =
  # Create the request body
  let data = %*{
    "name": "John Doe",
    "age": 30,
    "email": "john@example.com"
  }
  
  # Create a new HTTP client
  let client = newHttpClient()
  
  # Set headers
  client.headers = newHttpHeaders({
    "Content-Type": "application/json",
    "User-Agent": "Nim HTTP Client"
  })
  
  # Send the request
  let response = client.post("https://httpbin.org/post", body = $data)
  
  # Parse the response
  let responseData = parseJson(response.body)
  
  # Print the response
  echo "Response status: ", response.status
  echo "Response body: ", responseData.pretty()

# Asynchronous HTTP client
proc makeAsyncRequest() {.async.} =
  # Create a new async HTTP client
  let client = newAsyncHttpClient()
  
  # Send the request
  let response = await client.get("https://example.com")
  
  # Print response details
  echo "Async Status: ", response.status
  echo "Async Body length: ", (await response.body).len, " bytes"

when isMainModule:
  # Uncomment to run the server
  # waitFor startServer()
  
  # Make HTTP requests
  makeGetRequest()
  makePostRequest()
  
  # Make async HTTP request
  waitFor makeAsyncRequest()

