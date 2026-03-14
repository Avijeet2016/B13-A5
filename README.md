1) What is the difference between var, let, and const?

Answer: var is function-scoped, or globally-scoped (not block-scoped). It can be redeclared and updated. It is hoisted to the top of their scope and initialized with undefined. It can be accessed before declaration (returns undefined).
let is block-scoped. It can be updated but not redeclared in the same scope. It is hoisted but not initialized (temporal dead zone). It cannot be accessed before declaration (ReferenceError).
const is block-scoped. It cannot be updated or redeclared. It must be initialized at declaration. It is hoisted but not initialized (temporal dead zone). For objects/arrays, the reference is constant, but properties can be modified. 

2) What is the spread operator (...)?

Answer: The spread operator allows an iterable (array, string, object) to be expanded into individual elements. It creates shallow copies of arrays/objects.

3) What is the difference between map(), filter(), and forEach()?

Answer: map() creates a new array with the results of calling a function on every element. It is used for transformation.
filter() creates a new array with elements that pass a test condition. It is used for selection or, filtering. 
forEach() executes a function on each element. It is used for iteration. 

4) What is an arrow function?

Answer: Arrow functions are a concise syntax for writing function expressions. Arrow functions don't have their own "this" - they inherit it from the surrounding scope".

5) What are template literals?  Answer theoretically.

Answer: Template literals are string literals with embedded expressions, delimited by backticks (`) instead of quotes. Multi-line strings can be written using template literals. 