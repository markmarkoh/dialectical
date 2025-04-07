// Basic HTTP server using Kotlin with the Ktor framework
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.jackson.*
import java.time.LocalDateTime

fun main() {
   // Start the server
   val server = embeddedServer(Netty, port = 8080) {
       // Install features
       install(ContentNegotiation) {
           jackson {}
       }
       
       // Configure routing
       routing {
           // Root endpoint
           get("/") {
               call.respondText(
                   "<html><body><h1>Hello from Kotlin!</h1></body></html>",
                   ContentType.Text.Html
               )
           }
           
           // API data endpoint
           get("/api/data") {
               val data = mapOf(
                   "message" to "Hello from Kotlin API",
                   "status" to "success",
                   "timestamp" to LocalDateTime.now().toString()
               )
               call.respond(data)
           }
           
           // Echo endpoint
           post("/api/echo") {
               val contentType = call.request.contentType()
               
               // Handle different content types
               val responseData = when {
                   contentType.match(ContentType.Application.Json) -> {
                       // Parse JSON body
                       val requestBody = call.receive<Map<String, Any>>()
                       requestBody.toMutableMap()
                   }
                   else -> {
                       // Treat as plain text
                       val text = call.receiveText()
                       mutableMapOf("text" to text)
                   }
               }
               
               // Add echo information
               responseData["echo"] = true
               responseData["method"] = call.request.httpMethod.value
               responseData["contentType"] = contentType.toString()
               
               call.respond(responseData)
           }
       }
   }
   
   // Start the server
   server.start(wait = true)
}

// Making HTTP requests using Kotlin with the Fuel library
import com.github.kittinunf.fuel.Fuel
import com.github.kittinunf.fuel.core.extensions.jsonBody
import com.github.kittinunf.fuel.jackson.responseObject
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue

fun makeGetRequest() {
   // Simple GET request
   val (request, response, result) = Fuel.get("https://example.com")
       .header("User-Agent", "Kotlin HTTP Client")
       .responseString()
   
   // Print response details
   println("Status: ${response.statusCode}")
   println("Headers: ${response.headers}")
   println("Body length: ${result.get().length} bytes")
   println("Body preview: ${result.get().take(100)}")
}

fun makePostRequest() {
   // Create the request body
   val data = mapOf(
       "name" to "John Doe",
       "age" to 30,
       "email" to "john@example.com"
   )
   
   // Convert to JSON
   val mapper = jacksonObjectMapper()
   val jsonData = mapper.writeValueAsString(data)
   
   // Make POST request with JSON body
   val (request, response, result) = Fuel.post("https://httpbin.org/post")
       .header("Content-Type", "application/json")
       .jsonBody(jsonData)
       .responseString()
   
   // Parse the response
   val responseData = mapper.readValue<Map<String, Any>>(result.get())
   
   // Print the response
   println("Response status: ${response.statusCode}")
   println("Response body: $responseData")
}

// Making HTTP requests using Kotlin's standard library (java.net)
import java.net.HttpURLConnection
import java.net.URL
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter

fun makeRequestWithStandardLibrary() {
   // Create URL and open connection
   val url = URL("https://example.com")
   val connection = url.openConnection() as HttpURLConnection
   
   // Configure request
   connection.requestMethod = "GET"
   connection.setRequestProperty("User-Agent", "Kotlin HTTP Client")
   connection.setRequestProperty("Accept", "text/html")
   
   // Get response code
   val responseCode = connection.responseCode
   println("Response Code: $responseCode")
   
   // Read response
   val reader = BufferedReader(InputStreamReader(connection.inputStream))
   val response = StringBuilder()
   var line: String?
   
   while (reader.readLine().also { line = it } != null) {
       response.append(line)
   }
   reader.close()
   
   // Print response
   println("Response: ${response.toString().take(100)}...")
   
   // Disconnect
   connection.disconnect()
}

fun makePostRequestWithStandardLibrary() {
   // Create URL and open connection
   val url = URL("https://httpbin.org/post")
   val connection = url.openConnection() as HttpURLConnection
   
   // Configure request
   connection.requestMethod = "POST"
   connection.setRequestProperty("Content-Type", "application/json")
   connection.setRequestProperty("User-Agent", "Kotlin HTTP Client")
   connection.doOutput = true
   
   // Create JSON data
   val data = """
       {
           "name": "John Doe",
           "age": 30,
           "email": "john@example.com"
       }
   """.trimIndent()
   
   // Write data to output stream
   val writer = OutputStreamWriter(connection.outputStream)
   writer.write(data)
   writer.flush()
   writer.close()
   
   // Get response code
   val responseCode = connection.responseCode
   println("Response Code: $responseCode")
   
   // Read response
   val reader = BufferedReader(InputStreamReader(connection.inputStream))
   val response = StringBuilder()
   var line: String?
   
   while (reader.readLine().also { line = it } != null) {
       response.append(line)
   }
   reader.close()
   
   // Print response
   println("Response: $response")
   
   // Disconnect
   connection.disconnect()
}

