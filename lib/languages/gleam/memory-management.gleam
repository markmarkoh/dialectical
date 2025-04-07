// Memory management in Gleam is handled by the BEAM virtual machine
// Gleam runs on the Erlang VM (BEAM), which uses automatic garbage collection

// Example showing memory allocation (the VM handles memory management automatically)
fn create_large_list() {
// Memory is automatically allocated for this list
let large_list = list.range(1, 1_000_000)

// When this function returns, if there are no more references to large_list,
// the garbage collector will eventually reclaim this memory
large_list
}

// The BEAM VM uses a generational garbage collector
// Each process has its own heap, which helps with:
// 1. Parallel garbage collection
// 2. Preventing long GC pauses
// 3. Isolating memory issues to individual processes

// Example of process isolation
fn spawn_isolated_process() {
process.spawn(fn() {
  // This memory is isolated to this process
  let data = list.range(1, 1_000_000)
  // Process memory is fully collected when the process terminates
})
}

// Immutability prevents many memory issues
fn transform_data(list) {
// This creates a new list rather than modifying the original
list.map(list, fn(x) { x * 2 })
// The original list is unchanged, and will be garbage collected
// if no longer referenced
}

