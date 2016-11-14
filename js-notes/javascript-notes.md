## JavaScript

#7 False Values in JavaScript
* ""
* False
* 0
* -0
* NAN
* null
* undefined

#Floating Point Numbers
* All numbers in JavaScript are double-precision floating-point numbers, 64-bit encoding of numbers, also known as "doubles".
* Bitwise operators implicitly converts integers  to 32-bit integers.

# The 5 JavaScript Primitives Values
* Booleans
* Numbers
* Strings
* Null
* Undefined
* Symbols (ECMAScript 6)

# Think of Strings As Sequences of 16-Bit Code Units
* An element of a JavaScript string is a 16-bit code unit.

# Minimize Use of the Global Object
* Avoid declaring global variables.
* Declare variables as locally as possible.
* Avoid adding properties to the global object.
* Use the global object for platform feature detection.

# Always Declare Local Variables
* Always declare new local variables with var.

# Avoid 'with'
* Avoid using with statements.
* Use short variable names for repeated access to an object.
* Explicitly bind local variables to object properties instead of implicitly binding them with a 'with' statement.

# Get Comfortable with Closures
* Functions can refer to variables defined in outer scopes.
* Closures can outlive the function that creates them.
* Closures internally store references to their outer variables, and can both read and update their stored variables.
