// Standard library import
import "fmt"

// Multiple imports
import (
    "fmt"
    "strings"
    "time"
)

// Import with alias
import (
    "fmt"
    str "strings"
)

// Import for side effects only (init function)
import _ "database/sql"

// Relative imports from your module
import "mymodule/utils"

func main() {
    // Using imported packages
    fmt.Println("Hello, Go!")

    // Using aliased import
    message := str.ToUpper("hello")
    fmt.Println(message)
}

