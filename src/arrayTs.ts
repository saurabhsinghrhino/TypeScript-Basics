//=========== ARRAY ============

// Array of strings
// Every element in this array must be a string.
const drinkFlavours: string[] = ["Mango", "Apple", "Guava"];

// Array of numbers
// Every element in this array must be a number.
const drinkPrices: number[] = [20, 40, 60];

// Another way to define an array in TypeScript.
// Array<number> and number[] are exactly the same.
const rating: Array<number> = [4.5, 2.9, 3.6, 5.0];

// Creating a custom type for products.
type Product = {
  name: string;
  price: number;
};

// Array of objects
// Each object inside this array must follow the Product type.
const Order: Product[] = [
  {
    name: "Mango",
    price: 20,
  },
  {
    name: "Apple",
    price: 40,
  },
];

// Readonly array
// Elements can be read, but the array cannot be modified.
//
// You cannot:
// - add new elements
// - remove elements
// - update existing elements
const cities: readonly string[] = ["Delhi", "Mumbai", "Kolkata"];

// Error:
// cities.push("Chennai");

// Multi-dimensional array
// This is an array that contains other arrays.
//
// Here, each inner array contains numbers.
const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing values from a multi-dimensional array:
//
// table[0]     => [1, 2, 3]
// table[0][1]  => 2
// table[2][2]  => 9
// ======================================================
// TUPLES
// ======================================================
//
// A tuple is a special type of array where:
// - The number of elements is fixed
// - The type of each element is fixed
// - The order of elements matters
//

// Named Tuple
// Here:
// - First value must be a string (name)
// - Second value must be a number (age)

let userInfo: [name: string, age: number];

userInfo = ["Saurabh", 18];

// Error:
// Order matters in tuples.
//
// userInfo = [18, "Saurabh"];

// ======================================================
// Tuple with Optional Values
// ======================================================
//
// The '?' makes the last value optional.
//

let order: [string, number, boolean?];

order = ["Mango", 20];

order = ["Apple", 80, true];

// ======================================================
// Readonly Tuple
// ======================================================
//
// Once created, values cannot be changed.
//

const location: readonly [number, number] = [28.66, 32.45];

// Error:
// location[0] = 50;

// Error:
// location.push(100);

// ======================================================
// Practical Tuple Example
// ======================================================
//
// Useful when an API returns fixed-position data.
//

let apiResponse: [number, string];

apiResponse = [200, "Success"];

// apiResponse = ["Success", 200]; // Error

// ======================================================
// ENUM
// ======================================================
//
// Enum is used to define a set of named constants.
//
// It makes code more readable and prevents
// using random values throughout the application.
//

// Numeric Enum
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const coffee = CupSize.MEDIUM;

console.log(coffee); // 1

// ======================================================
// Auto Incrementing Enum Values
// ======================================================

enum Status {
  PENDING = 99,
  SUCCESS, // 100
  ERROR, // 101
}

console.log(Status.PENDING);
console.log(Status.SUCCESS);
console.log(Status.ERROR);

// ======================================================
// String Enum
// ======================================================
//
// String enums are commonly used in real projects.
//

enum CoffeeType {
  COLD = "cold",
  HOT = "hot",
}

function makeCoffee(type: CoffeeType) {
  console.log(type);
}

makeCoffee(CoffeeType.COLD);
makeCoffee(CoffeeType.HOT);

// ======================================================
// Standard Example: User Roles
// ======================================================
//
// Commonly used in authentication systems.
//

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MODERATOR = "moderator",
}

const currentUserRole = UserRole.ADMIN;

if (currentUserRole === UserRole.ADMIN) {
  console.log("Full Access");
}

// ======================================================
// Standard Example: Order Status
// ======================================================
//
// Common in E-Commerce applications.
//

enum OrderStatus {
  PENDING = "pending",
  PROCESSING = "processing",
  SHIPPED = "shipped",
  DELIVERED = "delivered",
  CANCELLED = "cancelled",
}

const currentOrder = OrderStatus.SHIPPED;

console.log(currentOrder);

// ======================================================
// Reverse Mapping
// ======================================================
//
// Numeric enums support reverse mapping.
//

enum Direction {
  UP,
  DOWN,
}

console.log(Direction.UP); // 0

console.log(Direction[0]); // "UP"

// String enums do NOT support reverse mapping.

// ======================================================
// Const Enum
// ======================================================
//
// Used for better performance.
//
// TypeScript replaces values directly during compilation.
//

const enum ApiStatus {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

const responseStatus = ApiStatus.SUCCESS;

console.log(responseStatus);

// ======================================================
// Summary
// ======================================================
//
// Tuple:
// - Fixed length array
// - Fixed types
// - Order matters
//
// Readonly Tuple:
// - Cannot be modified
//
// Enum:
// - Collection of named constants
// - Improves readability
//
// Numeric Enum:
// - Auto increments values
//
// String Enum:
// - More common in real-world projects
//
// Const Enum:
// - Better performance
// - Removed during compilation
//
