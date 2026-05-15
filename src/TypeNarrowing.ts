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

//Exhaustive Checks Function
// =====================================

function getDrink(size: "small" | "medium" | "large" | number) {
  // Check the sizes of a drink
  if (size === "small") return "Make small glass of drink";
  if (size === "medium") return "Make medium glass of drink";
  if (size === "large") return "Make large glass of drink";

  // Exhaustive check

  return `No. of ordered drinks is : ${size}`; // This is a worst case condition
}

//Exhaustive Checks Function Calls
// =====================================

getDrink("small");
getDrink("medium");
getDrink("large");
getDrink(5);
