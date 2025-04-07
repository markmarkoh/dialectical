# Defining a simple macro
defmodule MyMacros do
  # Macro that generates a function that returns a constant
  defmacro defconstant(name, value) do
    quote do
      def unquote(name)(), do: unquote(value)
    end
  end
  
  # Macro that logs an expression and returns its value
  defmacro debug(expr) do
    quote do
      value = unquote(expr)
      IO.puts("Debug: \#{inspect(unquote(expr))} = \#{inspect(value)}")
      value
    end
  end
  
  # Macro that creates a custom unless control flow
  defmacro unless(condition, do: block) do
    quote do
      if !unquote(condition) do
        unquote(block)
      end
    end
  end
  
  # Macro that generates multiple functions
  defmacro generate_getters(fields) do
    quote bind_quoted: [fields: fields] do
      for field <- fields do
        def unquote(:"get_\#{field}")(%{unquote(field) => value}), do: value
      end
    end
  end
end

# Using the macros
defmodule Example do
  require MyMacros
  
  # Use the defconstant macro
  MyMacros.defconstant :pi, 3.14159
  
  # Use the debug macro
  def test_debug(x) do
    MyMacros.debug(x * 2)
  end
  
  # Use the unless macro
  def test_unless(x) do
    MyMacros.unless x > 10 do
      "x is not greater than 10"
    end
  end
  
  # Use the generate_getters macro
  MyMacros.generate_getters [:name, :age, :email]
end

# Using the generated code
IO.puts Example.pi()  # 3.14159
Example.test_debug(21)  # Debug: x * 2 = 42
IO.puts Example.test_unless(5)  # "x is not greater than 10"
IO.puts Example.get_name(%{name: "Alice"})  # "Alice"

