package main

import (
    "fmt"
    "math/cmplx"
)

func main() {
    // Boolean type
    var isTrue bool = true

    // Integer types
    var i int = 42       // platform-dependent size (32 or 64 bit)
    var i8 int8 = 127    // -128 to 127
    var i16 int16 = 32767 // -32768 to 32767
    var i32 int32 = 2147483647
    var i64 int64 = 9223372036854775807

    // Unsigned integer types
    var ui uint = 42
    var ui8 uint8 = 255  // 0 to 255 (byte is an alias for uint8)
    var ui16 uint16 = 65535
    var ui32 uint32 = 4294967295
    var ui64 uint64 = 18446744073709551615

    // Floating point types
    var f32 float32 = 3.14159265
    var f64 float64 = 3.14159265358979323846

    // Complex number types
    var c64 complex64 = complex(5, 7)    // 5+7i
    var c128 complex128 = cmplx.Sqrt(-5 + 12i)

    // String type
    var s string = "Hello, Go!"

    // Rune type (alias for int32, represents a Unicode code point)
    var r rune = 'A'

    // Byte type (alias for uint8)
    var b byte = 'B'

    fmt.Println(isTrue, i, i8, i16, i32, i64)
    fmt.Println(ui, ui8, ui16, ui32, ui64)
    fmt.Println(f32, f64)
    fmt.Println(c64, c128)
    fmt.Println(s, r, b)
}

