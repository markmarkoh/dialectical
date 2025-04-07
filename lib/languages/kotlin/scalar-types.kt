// Integers
val byte: Byte = 127    // 8-bit signed integer
val short: Short = 32767 // 16-bit signed integer
val int: Int = 2147483647 // 32-bit signed integer
val long: Long = 9223372036854775807L // 64-bit signed integer

// Floating-point
val float: Float = 3.14f  // 32-bit floating point
val double: Double = 3.14159265358979 // 64-bit floating point

// Booleans
val isActive: Boolean = true
val isValid = isActive && int > 0

// Characters
val char: Char = 'A'
val unicodeChar = '\u00A9' // Copyright symbol ©

// Strings
val name: String = "Alice"
val greeting = "Hello, " + name  // String concatenation

// String templates (interpolation)
val message = "Name: $name, Age: ${int}"

// Raw strings (multi-line)
val multiline = """
   This is a multi-line
   string that preserves
   whitespace and doesn't need escaping "quotes"
""".trimIndent()

// Nullable types
val nullableString: String? = null
val nonNullString: String = "Cannot be null"

