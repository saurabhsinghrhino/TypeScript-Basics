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
const order: Product[] = [
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
