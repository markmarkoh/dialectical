// Memory management in Go is handled by a garbage collector

// Basic memory allocation
func basicAllocation() {
	// Memory is automatically allocated
	slice := make([]int, 1000000) // Allocates memory for 1 million integers
	
	// Initialize the slice
	for i := range slice {
		slice[i] = i
	}
	
	// Memory will be automatically freed by the garbage collector
	// when it's no longer referenced
}

// Stack vs Heap allocation
func stackVsHeap() {
	// Stack allocation (fast, automatically freed when function returns)
	var stackArray [10]int
	stackArray[0] = 42
	
	// Heap allocation (managed by GC)
	heapSlice := make([]int, 10)
	heapSlice[0] = 42
	
	// Go's compiler uses escape analysis to determine whether to allocate
	// on the stack or heap, but generally:
	// - Large objects go on the heap
	// - Objects whose address is taken may go on the heap
	// - Objects that outlive the function go on the heap
}

// Memory leaks can still happen
func potentialLeak() {
	// This is a common pattern that can cause memory leaks
	ch := make(chan int)
	
	go func() {
		// If this goroutine is blocked forever, the channel and goroutine
		// will never be garbage collected
		ch <- 42
	}()
	
	// If we never read from the channel, the goroutine will be blocked
	// and both the goroutine and channel will leak
	// val := <-ch
}

// Controlling GC behavior
func controlGC() {
	// Force garbage collection
	runtime.GC()
	
	// Get current memory statistics
	var stats runtime.MemStats
	runtime.ReadMemStats(&stats)
	
	fmt.Printf("Allocated memory: %d bytes\n", stats.Alloc)
	fmt.Printf("Total memory allocated: %d bytes\n", stats.TotalAlloc)
	fmt.Printf("System memory: %d bytes\n", stats.Sys)
	fmt.Printf("GC cycles: %d\n", stats.NumGC)
}

// Memory pooling to reduce GC pressure
func memoryPooling() {
	// Create a pool of byte slices
	var bufferPool = sync.Pool{
		New: func() interface{} {
			buffer := make([]byte, 1024)
			return &buffer
		},
	}
	
	// Get a buffer from the pool
	buffer := bufferPool.Get().(*[]byte)
	
	// Use the buffer
	for i := 0; i < 100; i++ {
		(*buffer)[i] = byte(i)
	}
	
	// Return the buffer to the pool when done
	bufferPool.Put(buffer)
	
	// This reduces GC pressure by reusing objects
	// instead of allocating new ones
}

// Using value types to reduce allocations
func valueTypes() {
	// Value types (structs) are allocated on the stack when possible
	type Point struct {
		X, Y int
	}
	
	// This doesn't allocate on the heap
	p := Point{X: 10, Y: 20}
	
	// This allocates on the heap
	pHeap := &Point{X: 10, Y: 20}
	
	// Using value types for small, short-lived objects
	// can significantly reduce GC pressure
	_ = p
	_ = pHeap
}

// Setting GC percentage
func tuneGC() {
	// Set the GC target percentage
	// Higher values mean less frequent GC but more memory usage
	// Default is 100
	old := debug.SetGCPercent(200) // GC will run when memory doubles
	
	fmt.Printf("Old GC percentage: %d\n", old)
	
	// You can also set this with GOGC environment variable
}

// Preallocating memory to avoid reallocations
func preallocation() {
	// Bad: causes multiple reallocations as the slice grows
	var slice []int
	for i := 0; i < 10000; i++ {
		slice = append(slice, i)
	}
	
	// Good: preallocate with the expected capacity
	slice2 := make([]int, 0, 10000)
	for i := 0; i < 10000; i++ {
		slice2 = append(slice2, i)
	}
}

// Using strings efficiently
func stringEfficiency() {
	// Strings are immutable in Go
	s := "hello"
	
	// This creates a new string and allocates memory
	s += " world"
	
	// More efficient for multiple concatenations
	var builder strings.Builder
	builder.WriteString("hello")
	builder.WriteString(" ")
	builder.WriteString("world")
	result := builder.String()
	
	_ = result
}

// Main function to demonstrate memory management
func main() {
	basicAllocation()
	stackVsHeap()
	// Avoid the leak
	// potentialLeak()
	controlGC()
	memoryPooling()
	valueTypes()
	tuneGC()
	preallocation()
	stringEfficiency()
}

