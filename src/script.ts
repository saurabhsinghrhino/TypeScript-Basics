// ===============================
// Basic TypeScript Example
// ===============================

// A variable with type "string"
let userName: string = "Saurabh";

// A variable with type "number"
let age: number = 20;

// A variable with type "boolean"
let isStudent: boolean = true;

// Printing values in console
console.log("Name:", userName);
console.log("Age:", age);
console.log("Student:", isStudent);

// ===============================
// Function Example
// ===============================

// This function takes two numbers
// and returns their sum
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// Calling the function
const result = addNumbers(10, 20);

console.log("Addition Result:", result);

// ===============================
// Array Example
// ===============================

// Array of strings
let fruits: string[] = ["Apple", "Banana", "Mango"];

// Loop through array items
fruits.forEach((fruit) => {
  console.log("Fruit:", fruit);
});

// ===============================
// Object Example
// ===============================

// Creating a custom type
type User = {
  name: string;
  email: string;
  isAdmin: boolean;
};

// Creating an object using User type
const user: User = {
  name: "Saurabh",
  email: "saurabh@gmail.com",
  isAdmin: false,
};

console.log("User Details:", user);

// ===============================
// Class Example
// ===============================

class Car {
  // Properties
  brand: string;
  model: string;

  // Constructor runs automatically
  // when object is created
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  // Method inside class
  showDetails(): void {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

// Creating object of Car class
const myCar = new Car("Toyota", "Fortuner");

// Calling method
myCar.showDetails();

// ===============================
// Async Function Example
// ===============================

// Async function is used for API calls
async function fetchData(): Promise<void> {
  console.log("Fetching data...");

  // Simulating delay using Promise
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Data fetched successfully");
}

// Calling async function
fetchData();
