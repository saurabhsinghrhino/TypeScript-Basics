// Type Narrowing in TypeScript
// =====================================

// Type narrowing means:
// TypeScript checks the type of a variable
// before performing operations on it.

// This function accepts either:
// - string
// - number
function printValue(value: string | number): void {
  // Checking if value is a string
  if (typeof value === "string") {
    // Inside this block,
    // TypeScript knows value is a string
    console.log("String value:", value);

    // String methods can be used
    console.log("Uppercase:", value.toUpperCase());
  } else {
    // Inside this block,
    // TypeScript knows value is a number
    console.log("Number value:", value);

    // Number operations can be used
    console.log("Square:", value * value);
  }
}

// Function Calls
// =====================================

// Passing a string
printValue("hello");

// Passing a number
printValue(5);
