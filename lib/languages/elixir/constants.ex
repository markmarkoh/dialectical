# Module attributes as constants
defmodule Math do
  @pi 3.14159
  @app_name "MyApp"
  @max_retries 3

  # Using constants
  def circle_area(radius) do
    @pi * radius * radius
  end
  
  # Module attributes can use expressions
  @double_pi @pi * 2
  
  # Module attributes can reference functions
  @supported_formats [:json, :xml, :yaml]
  @formatter_modules @supported_formats 
                     |> Enum.map(&(String.to_atom("Elixir.Format.#{&1}")))
end

# Constants in configuration
# config/config.exs
config :my_app, 
  api_url: "https://api.example.com",
  timeout: 5000,
  retries: 3

# Using configuration constants
timeout = Application.get_env(:my_app, :timeout)

