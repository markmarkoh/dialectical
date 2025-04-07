# Creating a basic HTTP server with Elixir's built-in libraries
# Elixir comes with Cowboy (HTTP server) and Plug (HTTP middleware)

defmodule MyApp.Router do
  use Plug.Router
  
  # Enable logging
  plug Plug.Logger
  
  # Required by Plug.Router
  plug :match
  plug :dispatch
  
  # Parse request body for certain content types
  plug Plug.Parsers,
    parsers: [:json, :urlencoded],
    pass: ["text/plain"],
    json_decoder: Jason
  
  # Handle GET request to root path
  get "/" do
    conn
    |> put_resp_content_type("text/html")
    |> send_resp(200, "<html><body><h1>Hello, World!</h1></body></html>")
  end
  
  # Handle GET request to /api/data
  get "/api/data" do
    data = %{
      message: "Hello from the API",
      timestamp: DateTime.utc_now() |> DateTime.to_iso8601()
    }
    
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Jason.encode!(data))
  end
  
  # Handle POST request to /api/echo
  post "/api/echo" do
    # Request body is already parsed by Plug.Parsers
    response = %{
      echo: conn.body_params,
      timestamp: DateTime.utc_now() |> DateTime.to_iso8601()
    }
    
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Jason.encode!(response))
  end
  
  # Catch-all route for 404
  match _ do
    send_resp(conn, 404, "Not Found")
  end
end

# Start the server
defmodule MyApp do
  use Application
  
  def start(_type, _args) do
    children = [
      {Plug.Cowboy, scheme: :http, plug: MyApp.Router, options: [port: 4000]}
    ]
    
    opts = [strategy: :one_for_one, name: MyApp.Supervisor]
    Supervisor.start_link(children, opts)
  end
end

# Making an HTTP request with the built-in :httpc module
defmodule HttpClient do
  def make_request do
    # Start the HTTP client if not started
    :inets.start()
    :ssl.start()
    
    # Make a GET request
    url = 'http://example.com/'
    headers = []
    request = {url, headers}
    
    case :httpc.request(:get, request, [], []) do
      {:ok, {{_, status_code, _}, response_headers, body}} ->
        IO.puts("Status Code: \#{status_code}")
        IO.puts("Headers: \#{inspect(response_headers)}")
        IO.puts("Body: \#{body}")
        
      {:error, reason} ->
        IO.puts("Error: \#{inspect(reason)}")
    end
  end
  
  # Making a POST request with JSON body
  def post_json(url, data) do
    json_data = Jason.encode!(data)
    headers = [{'Content-Type', 'application/json'}]
    request = {url, headers, 'application/json', json_data}
    
    case :httpc.request(:post, request, [], []) do
      {:ok, {{_, status_code, _}, _headers, body}} ->
        {:ok, status_code, body}
        
      {:error, reason} ->
        {:error, reason}
    end
  end
end

