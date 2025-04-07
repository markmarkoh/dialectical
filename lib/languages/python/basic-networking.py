# Basic HTTP server using standard library
from http.server import HTTPServer, BaseHTTPRequestHandler
import json
from urllib.parse import parse_qs
import time

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Route based on path
        if self.path == '/':
            self.send_response(200)
            self.send_header('Content-type', 'text/html')
            self.end_headers()
            self.wfile.write(b'<html><body><h1>Hello from Python!</h1></body></html>')
        elif self.path == '/api/data':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            data = {
                'message': 'Hello from Python API',
                'timestamp': time.time()
            }
            self.wfile.write(json.dumps(data).encode())
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'404 Not Found')
    
    def do_POST(self):
        # Handle POST request to /api/echo
        if self.path == '/api/echo':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            # Try to parse as JSON
            try:
                data = json.loads(post_data)
                response_data = {
                    'echo': data,
                    'type': 'json',
                    'length': content_length
                }
            except json.JSONDecodeError:
                # Treat as plain text
                response_data = {
                    'echo': post_data.decode('utf-8'),
                    'type': 'text',
                    'length': content_length
                }
            
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(response_data).encode())
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'404 Not Found')

# Start the server
def run_server(port=8000):
    server_address = ('', port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

# Making HTTP requests using the standard library
import urllib.request
import urllib.parse

def make_request():
    # Simple GET request
    with urllib.request.urlopen('https://example.com') as response:
        html = response.read()
        print(f'Status: {response.status}')
        print(f'Headers: {response.headers}')
        print(f'Body length: {len(html)} bytes')
        print(f'Body preview: {html[:100]}')

def post_request(url, data):
    # Convert data to JSON
    json_data = json.dumps(data).encode('utf-8')
    
    # Create request with headers
    req = urllib.request.Request(
        url,
        data=json_data,
        headers={'Content-Type': 'application/json'}
    )
    
    # Send request and get response
    with urllib.request.urlopen(req) as response:
        response_data = json.loads(response.read().decode('utf-8'))
        return response_data

# Using the requests library (common third-party library)
# import requests

# def requests_example():
#     # GET request
#     response = requests.get('https://example.com')
#     print(f'Status: {response.status_code}')
#     print(f'Headers: {response.headers}')
#     print(f'Body: {response.text[:100]}')
#     
#     # POST request with JSON
#     data = {'name': 'John', 'age': 30}
#     response = requests.post('https://httpbin.org/post', json=data)
#     print(response.json())

