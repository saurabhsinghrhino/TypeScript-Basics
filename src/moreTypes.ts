// ======================================================
// Type Assertion in TypeScript
// ======================================================

// "any" means:
// TypeScript will NOT check the type of this variable.
// It can store anything (string, number, object, etc.)

const response: any = "42";

// ------------------------------------------------------
// Type Assertion
// ------------------------------------------------------
// Here we are telling TypeScript:
//
// "Trust me, response is a string."
//
// Syntax:
// value as Type
//
// So TypeScript now treats "response" like a string.
// Because of that, we can use string properties like ".length"

const numberLength: number = (response as string).length;

// .length returns total characters in the string
// "42" has 2 characters

console.log(numberLength); // Output: 2

// ======================================================
// Another Example of Type Assertion
// ======================================================

// Creating a custom type called "Book"

type Book = {
  name: string;
};

// JSON data always comes as a string

const bookString = '{"name":"Harry Potter"}';

// JSON.parse converts JSON string into JavaScript object
//
// But TypeScript does NOT know the exact shape
// of the returned object.
//
// So we use "as Book" to tell TypeScript:
//
// "This object follows the Book type"

const bookObject = JSON.parse(bookString) as Book;

// Now TypeScript knows:
// bookObject has a "name" property

console.log(bookObject.name); // Output: Harry Potter

// ======================================================
// "never" Data Type in TypeScript
// ======================================================

// The "never" type means:
//
// "This function will NEVER return anything."
//
// It is used when:
// 1. A function throws an error
// 2. A function runs forever (infinite loop)

// ======================================================
// Example 1 → Function throwing an Error
// ======================================================

function throwError(message: string): never {
  // This function stops execution completely
  throw new Error(message);
}

// throwError("Something went wrong");

// ======================================================
// Example 2 → Infinite Loop
// ======================================================

function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
  }
}

// infiniteLoop();

// ======================================================
// Difference Between void and never
// ======================================================

// void:
// Function finishes execution
// but returns nothing

function sayHello(): void {
  console.log("Hello");
}

// never:
// Function NEVER finishes normally

type Role = "admin" | "user" | "superadmin";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log("Redirecting to admin page");
    return;
  }
  if (role === "user") {
    console.log("Redirecting to user page");
    return;
  }
  role;
}

redirectBasedOnRole("admin");
