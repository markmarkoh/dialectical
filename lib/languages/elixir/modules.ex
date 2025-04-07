# File: math.ex
defmodule Math do
  # Public functions
  def add(a, b) do
    a + b
  end

  def subtract(a, b) do
    a - b
  end

  # Private function
  defp square(x) do
    x * x
  end
end

# File: main.ex
defmodule Main do
  def run do
    result = Math.add(5, 3)  # 8
    # Math.square(4)  # Error: square is private
  end
end

