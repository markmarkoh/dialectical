// Kotlin doesn't have traditional macros, but offers several metaprogramming features

// Annotation Processing
// Define a custom annotation
@Target(AnnotationTarget.CLASS)
@Retention(AnnotationRetention.SOURCE)
annotation class GenerateFactory

// This annotation would be processed by an annotation processor
// to generate factory code for the annotated class
@GenerateFactory
class User(val name: String, val age: Int)

// Reflection - inspecting code at runtime
fun reflectionExample() {
   val person = Person("Alice", 30)
   
   // Get class information
   val kClass = person::class
   
   // Print all properties
   kClass.memberProperties.forEach { property ->
       println("${property.name}: ${property.getter.call(person)}")
   }
   
   // Call a method dynamically
   val greetMethod = kClass.functions.find { it.name == "greet" }
   greetMethod?.call(person)
}

class Person(val name: String, val age: Int) {
   fun greet() = println("Hello, my name is $name")
}

// Property Delegation
// Define a delegate for lazy initialization
class Lazy<T>(private val initializer: () -> T) {
   private var value: T? = null
   
   operator fun getValue(thisRef: Any?, property: kotlin.reflect.KProperty<*>): T {
       if (value == null) {
           value = initializer()
           println("Initialized ${property.name}")
       }
       return value!!
   }
}

// Use the delegate
class Example {
   val expensiveValue: String by Lazy {
       println("Computing expensive value...")
       Thread.sleep(1000) // Simulate expensive computation
       "Result"
   }
}

// DSL (Domain Specific Language) building
// HTML DSL example
class HTML {
   private val content = StringBuilder()
   
   fun head(init: Head.() -> Unit) {
       val head = Head()
       head.init()
       content.append("<head>${head.content}</head>")
   }
   
   fun body(init: Body.() -> Unit) {
       val body = Body()
       body.init()
       content.append("<body>${body.content}</body>")
   }
   
   override fun toString() = "<html>${content}</html>"
}

class Head {
   val content = StringBuilder()
   
   fun title(text: String) {
       content.append("<title>$text</title>")
   }
}

class Body {
   val content = StringBuilder()
   
   fun p(text: String) {
       content.append("<p>$text</p>")
   }
   
   fun div(init: Div.() -> Unit) {
       val div = Div()
       div.init()
       content.append("<div>${div.content}</div>")
   }
}

class Div {
   val content = StringBuilder()
   
   fun p(text: String) {
       content.append("<p>$text</p>")
   }
}

// Usage of the HTML DSL
fun createHtml() = HTML().apply {
   head {
       title("Kotlin DSL Example")
   }
   body {
       p("This is a paragraph")
       div {
           p("This is a paragraph inside a div")
       }
   }
}

// Code generation with KSP (Kotlin Symbol Processing)
// This is a compile-time code generation API
// Example annotation that would be processed by KSP
@Target(AnnotationTarget.CLASS)
annotation class AutoSerialize

// KSP processor would generate serialization code for classes
// annotated with @AutoSerialize
@AutoSerialize
data class Product(val id: String, val name: String, val price: Double)

// Inline functions with reified type parameters
inline fun <reified T> typeInfo(): String {
   return "Type: ${T::class.simpleName}, Array: ${T::class.java.isArray}"
}

