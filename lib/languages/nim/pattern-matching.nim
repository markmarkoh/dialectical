# Nim doesn't have built-in pattern matching like some functional languages,
# but it achieves similar functionality through case statements and object destructuring.

# Pattern matching with case statement
proc matchValue(value: int): string =
  case value
  of 0:
    "Zero"
  of 1..10:
    "Small positive: " & $value
  of -10..-1:
    "Small negative: " & $value
  else:
    "Large number: " & $value

# Pattern matching with tuples
proc analyzePoint(point: tuple[x, y: int]): string =
  case point
  of (0, 0):
    "Origin"
  of (0, _):
    "On Y-axis at y=" & $point.y
  of (_, 0):
    "On X-axis at x=" & $point.x
  else:
    if point.x == point.y:
      "Diagonal at x=y=" & $point.x
    else:
      "Point at x=" & $point.x & ", y=" & $point.y

# Pattern matching with object variants
type
  ShapeKind = enum
    Circle, Rectangle, Triangle
  
  Shape = object
    case kind: ShapeKind
    of Circle:
      radius: float
    of Rectangle:
      width, height: float
    of Triangle:
      base, height: float

proc calculateArea(shape: Shape): float =
  case shape.kind
  of Circle:
    3.14159 * shape.radius * shape.radius
  of Rectangle:
    shape.width * shape.height
  of Triangle:
    0.5 * shape.base * shape.height

# Pattern matching with custom pattern library
# (This is a simplified example of what a pattern matching library might look like)
import macros

macro match(value: typed, patterns: varargs[untyped]): untyped =
  # This is a simplified implementation
  result = newStmtList()
  
  let valueSym = genSym(nskLet, "value")
  result.add(newLetStmt(valueSym, value))
  
  var caseStmt = newTree(nnkCaseStmt, valueSym)
  
  for pattern in patterns:
    if pattern.kind == nnkInfix and pattern[0].strVal == "=>":
      let patternExpr = pattern[1]
      let body = pattern[2]
      
      var ofBranch = newTree(nnkOfBranch)
      ofBranch.add(patternExpr)
      ofBranch.add(body)
      
      caseStmt.add(ofBranch)
  
  result.add(caseStmt)

# Using the custom pattern matching
proc describeNumber(n: int): string =
  match n:
    0 => "Zero"
    1 => "One"
    2 => "Two"
    _ => "Other: " & $n

when isMainModule:
  echo "matchValue(0): ", matchValue(0)
  echo "matchValue(5): ", matchValue(5)
  echo "matchValue(-5): ", matchValue(-5)
  echo "matchValue(100): ", matchValue(100)
  
  echo "analyzePoint((0, 0)): ", analyzePoint((0, 0))
  echo "analyzePoint((0, 5)): ", analyzePoint((0, 5))
  echo "analyzePoint((5, 0)): ", analyzePoint((5, 0))
  echo "analyzePoint((3, 3)): ", analyzePoint((3, 3))
  echo "analyzePoint((3, 4)): ", analyzePoint((3, 4))
  
  let circle = Shape(kind: Circle, radius: 5.0)
  let rect = Shape(kind: Rectangle, width: 10.0, height: 20.0)
  let triangle = Shape(kind: Triangle, base: 10.0, height: 5.0)
  
  echo "calculateArea(circle): ", calculateArea(circle)
  echo "calculateArea(rect): ", calculateArea(rect)
  echo "calculateArea(triangle): ", calculateArea(triangle)
  
  echo "describeNumber(0): ", describeNumber(0)
  echo "describeNumber(1): ", describeNumber(1)
  echo "describeNumber(5): ", describeNumber(5)

