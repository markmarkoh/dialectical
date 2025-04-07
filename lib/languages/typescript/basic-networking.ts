// Creating a basic HTTP server with Node.js built-in http module
import * as http from "http"

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Get request information
  const { method, url, headers } = req

  // Log request details
  console.log(`${method} ${url}`)
  console.log("Headers:", headers)

  // Handle different routes
  if (url === "/") {
    // Set response headers
    res.setHeader("Content-Type", "text/html")

    // Send response
    res.writeHead(200)
    res.end("<html><body><h1>Hello, World!</h1></body></html>")
  } else if (url === "/api/data") {
    // Handle JSON response
    const data = {
      message: "Hello from the API",
      timestamp: new Date().toISOString(),
    }

    res.setHeader("Content-Type", "application/json")
    res.writeHead(200)
    res.end(JSON.stringify(data))
  } else if (url?.startsWith("/api/echo") && method === "POST") {
    // Handle POST request with request body
    let body = ""

    // Collect data chunks
    req.on("data", (chunk) => {
      body += chunk.toString()
    })

    // Process the complete request body
    req.on("end", () => {
      try {
        const data = JSON.parse(body)

        res.setHeader("Content-Type", "application/json")
        res.writeHead(200)
        res.end(
          JSON.stringify({
            echo: data,
            timestamp: new Date().toISOString(),
          }),
        )
      } catch (error) {
        res.writeHead(400)
        res.end(JSON.stringify({ error: "Invalid JSON" }))
      }
    })
  } else {
    // Handle 404 Not Found
    res.writeHead(404)
    res.end("Not Found")
  }
})

// Start the server
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})

// Making an HTTP request with the built-in http module
function makeRequest() {
  const options = {
    hostname: "example.com",
    port: 80,
    path: "/",
    method: "GET",
  }

  const req = http.request(options, (res) => {
    console.log(`Status Code: ${res.statusCode}`)

    res.on("data", (chunk) => {
      console.log(`Received data: ${chunk}`)
    })

    res.on("end", () => {
      console.log("Response ended")
    })
  })

  req.on("error", (error) => {
    console.error(`Request error: ${error.message}`)
  })

  // End the request
  req.end()
}

