package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"strings"
	"time"
)

// Basic HTTP server using the standard library
func main() {
	// Define handlers for different routes
	http.HandleFunc("/", handleRoot)
	http.HandleFunc("/api/data", handleApiData)
	http.HandleFunc("/api/echo", handleApiEcho)

	// Start the server
	fmt.Println("Server listening on port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

// Handler for the root path
func handleRoot(w http.ResponseWriter, r *http.Request) {
	// Only allow GET requests for this endpoint
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Set content type
	w.Header().Set("Content-Type", "text/html")
	
	// Write response
	fmt.Fprintf(w, "<html><body><h1>Hello from Go!</h1></body></html>")
}

// Handler for the /api/data endpoint
func handleApiData(w http.ResponseWriter, r *http.Request) {
	// Only allow GET requests for this endpoint
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Create a data structure to return
	data := map[string]interface{}{
		"message":   "Hello from Go API",
		"status":    "success",
		"timestamp": fmt.Sprintf("%v", time.Now()),
	}

	// Set content type
	w.Header().Set("Content-Type", "application/json")
	
	// Encode and write JSON response
	if err := json.NewEncoder(w).Encode(data); err != nil {
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
		return
	}
}

// Handler for the /api/echo endpoint
func handleApiEcho(w http.ResponseWriter, r *http.Request) {
	// Only allow POST requests for this endpoint
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Read the request body
	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error reading request body", http.StatusBadRequest)
		return
	}
	defer r.Body.Close()

	// Check content type
	contentType := r.Header.Get("Content-Type")
	var responseData map[string]interface{}

	if strings.HasPrefix(contentType, "application/json") {
		// Parse JSON body
		if err := json.Unmarshal(body, &responseData); err != nil {
			http.Error(w, "Error parsing JSON", http.StatusBadRequest)
			return
		}
	} else {
		// Treat as plain text
		responseData = map[string]interface{}{
			"text": string(body),
		}
	}

	// Add echo information
	responseData["echo"] = true
	responseData["method"] = r.Method
	responseData["contentType"] = contentType
	responseData["length"] = len(body)

	// Set content type for response
	w.Header().Set("Content-Type", "application/json")
	
	// Encode and write JSON response
	if err := json.NewEncoder(w).Encode(responseData); err != nil {
		http.Error(w, "Error encoding JSON", http.StatusInternalServerError)
		return
	}
}

// Making HTTP requests using the standard library
func makeGetRequest() {
	// Create a new HTTP client
	client := &http.Client{
		Timeout: 10 * time.Second,
	}

	// Create a new request
	req, err := http.NewRequest("GET", "https://example.com", nil)
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Add headers
	req.Header.Add("User-Agent", "Go HTTP Client")
	req.Header.Add("Accept", "text/html")

	// Send the request
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}
	defer resp.Body.Close()

	// Read the response
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response: %v", err)
	}

	// Print response details
	fmt.Printf("Status: %s\n", resp.Status)
	fmt.Printf("Headers: %v\n", resp.Header)
	fmt.Printf("Body length: %d bytes\n", len(body))
	fmt.Printf("Body preview: %s\n", body[:100])
}

// Making a POST request with JSON body
func makePostRequest() {
	// Create the request body
	data := map[string]interface{}{
		"name": "John Doe",
		"age":  30,
		"email": "john@example.com",
	}

	// Marshal the data to JSON
	jsonData, err := json.Marshal(data)
	if err != nil {
		log.Fatalf("Error marshaling JSON: %v", err)
	}

	// Create a new request with the JSON body
	req, err := http.NewRequest("POST", "https://httpbin.org/post", strings.NewReader(string(jsonData)))
	if err != nil {
		log.Fatalf("Error creating request: %v", err)
	}

	// Set headers
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("User-Agent", "Go HTTP Client")

	// Send the request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}
	defer resp.Body.Close()

	// Read and parse the response
	var result map[string]interface{}
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		log.Fatalf("Error parsing response: %v", err)
	}

	// Print the response
	fmt.Printf("Response status: %s\n", resp.Status)
	fmt.Printf("Response body: %v\n", result)
}

