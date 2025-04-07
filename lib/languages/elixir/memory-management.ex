# Memory management in Elixir is handled by the BEAM virtual machine
# Elixir runs on the Erlang VM, which uses automatic garbage collection

# Example showing memory allocation
def create_large_list do
  # Memory is automatically allocated for this list
  large_list = Enum.to_list(1..1_000_000)

  # When this function returns, if there are no more references to large_list,
  # the garbage collector will eventually reclaim this memory
  large_list
end

# The BEAM VM uses a per-process heap
# Each process has its own isolated memory space
def spawn_isolated_process do
  # This spawns a new process with its own heap
  spawn(fn ->
    # This memory is isolated to this process
    data = Enum.to_list(1..1_000_000)
    # Process memory is fully collected when the process terminates
    
    # Message passing creates a copy, preventing shared memory issues
    receive do
      {:request, pid} -> send(pid, {:response, length(data)})
    end
  end)
end

# Immutability prevents many memory issues
def transform_data(list) do
  # This creates a new list rather than modifying the original
  Enum.map(list, &(&1 * 2))
  # The original list is unchanged, and will be garbage collected
  # if no longer referenced
end

# Binary data is handled efficiently with reference counting
def process_large_binary(binary) do
  # Sub-binaries share memory with the parent binary
  # through reference counting
  <<_header::binary-size(8), body::binary>> = binary
  # Only references are created, not copies of the data
  body
end

