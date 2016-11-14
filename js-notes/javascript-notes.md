## JavaScript

#7 False Values in JavaScript
* ""
* False
* 0
* -0
* NAN
* null
* undefined

# Understand JavaScript Floating-Point Numbers
* All numbers in JavaScript are double-precision floating-point numbers, 64-bit encoding of numbers, also known as "doubles".
* Bitwise operators implicitly converts integers  to 32-bit signed integers.
* Integers in JavaScript are just a subset of doubles rather than a
separate datatype.
* Be aware of limitations of precisions in floating-point arithmetic.

# Beware of Implicit Coercions
* Type errors can be silently hidden by implicit coercions.
* The '+' operator is overloaded to do addition or string concatenation depending on its argument types.
* Objects are coerced to numbers via 'valueOf' and to strings via 'toString'.
* Objects with 'valueOf' methods should implement a 'toString' method that provides a string representation of the number produced by 'valueOf'.
* Use 'typeOf' or comparison to 'undefined' rather than truthiness to test for undefined values.

# The 5 JavaScript Primitives Values
* Booleans
* Numbers
* Strings
* Null
* Undefined
* Symbols (ECMAScript 6)

# Prefer Primitives to Object Wrappers
* Object wrappers for primitive types do not have the same behavior as their primitive values when compared for equality.
* Getting and setting properties on primitives implicitly creates object wrappers.

# Avoid using '==' with Mixed Types
* The '==' operator applies a confusing set of implicit coercion when its arguments are of different types.
* Use '===' to make it clear to your readers that your comparisons does not involve any implicit coercions.
* Use your own explicit coercions when comparing values of different types to make your program's behavior clearer.

# Learn the Limits of Semicolon Insertion
* Semicolons are only ever inferred before a '}' at the end of a line, or at the end of a program.
* Semicolons are only ever inferred when the next token cannot be parsed.
* Never omit a semicolon before a statement beginning with '(','[','+','-',or '/'.
* When concatenating scripts, insert semicolons explicitly between scripts.
* Never put a newline before the argument to 'return', 'throw', 'break', 'continue', '++', or '--'.
Semicolons are never inferred as separators in the head of a 'for' loop or as empty statements.

# Think of Strings As Sequences of 16-Bit Code Units
* An element of a JavaScript string is a 16-bit code units, not Unicode code points.
* Unicode points 2^16 and above are represented in JavaScript by two code units, known as a surrogate pair.
* Surrogate pairs throw off string element counts, affecting 'length', 'charAt', 'charCodeAt', and regular expression patterns such as '.'.
* Use third-party libraries for writing code point-aware string manipulation.
* Whenever you are using a library that works with strings, consult the documentation to see how it handles the full range of code points.

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

# Understand Variable Hoisting
* Variable declarations within a block are implicitly hoisted to the top of their enclosing function.
* Redeclarations of a variable are treated as a single variable.
* Consider manually hoisting local variable declarations to avoid confusion.

# Use Immediately Invoked Function Expressions to Create Local Scopes
* Understand the difference between binding and assignment.
* Closures capture their outer variables by references, not by value.
* Use immediately invokes function expressions (IIFEs) to create local scopes.
* Be away of the cases where wrapping a block in an IIFE can change its behavior.

# Beware of Unportable Scoping of Named Function Expressions
* Use names function expressions to improve stack traces in 'Error' objects and debuggers.
* Beware of pollution of function expression scope with 'Object.prototype' in ES3 and buggy JavaScript environments.
* Beware of hoisting and duplicate allocation of named function expressions in buggy JavaScript environments.
* Consider avoiding named function expressions or removing them before shipping.
* If you are shipping in properly implemented ES5 environments, you've got nothing to worry about.
