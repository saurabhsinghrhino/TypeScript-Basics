// ======================================================
// TypeScript Practice: Types, Interfaces & Intersections
// ======================================================

// ======================================================
// 1. Type Alias
// ======================================================
//
// A type alias lets us create a custom type.
//
// Here, "Drink" describes the structure of a drink object.
//
// Any object of type Drink must contain:
// - name (string)
// - sugar (boolean)
// - ice (boolean)
//

type Drink = {
  name: string;
  sugar: boolean;
  ice: boolean;
};

// ======================================================
// Function Using a Custom Type
// ======================================================
//
// This function accepts a Drink object.
//
// It modifies the drink and returns the updated object.
//

function orderDrink(drink: Drink) {
  drink.name = "Diet Coke";
  drink.sugar = false;
  drink.ice = true;

  return drink;
}

// Example:
//
// const myDrink: Drink = {
//   name: "Coke",
//   sugar: true,
//   ice: false,
// };
//
// console.log(orderDrink(myDrink));

// ======================================================
// 2. Class Implementing a Type
// ======================================================
//
// A class can implement a type.
//
// "implements" means:
//
// "This class MUST contain all properties
// defined inside the type."
//

class OrderCoolDrink implements Drink {
  name: string = "Slice";
  sugar: boolean = true;
  ice: boolean = true;
}

// Creating an object from the class

const coolDrink = new OrderCoolDrink();

console.log(coolDrink);

// ======================================================
// 3. Interface
// ======================================================
//
// Interfaces are very similar to types.
//
// They define the structure that an object
// or class must follow.
//

interface DrinkSize {
  size: "small" | "medium" | "large";
}

// ======================================================
// Class Implementing an Interface
// ======================================================
//
// This class must provide the "size"
// property because it implements DrinkSize.
//

class OrderSize implements DrinkSize {
  size: "small" | "medium" | "large" = "medium";
}

const mySize = new OrderSize();

console.log(mySize);

// ======================================================
// 4. Intersection Types (&)
// ======================================================
//
// The "&" operator combines multiple types
// into a single type.
//
// The final object must contain properties
// from BOTH types.
//

type BaseChai = {
  teaLeaves: number;
};

type Extra = {
  masala: number;
};

// MasalaChai must have:
// - teaLeaves
// - masala

type MasalaChai = BaseChai & Extra;

// Valid object because it contains
// properties from both types.

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

console.log(cup);

// ======================================================
// 5. Readonly Property
// ======================================================
//
// "readonly" means:
//
// The property can be assigned only once.
// After creation, it cannot be changed.
//

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "RhinoCode",
  version: 1.09,
};

// Allowed ✅
// version is not readonly

cfg.version = 2.0;

// Not Allowed ❌
// appName is readonly
//
// Uncommenting this line will cause
// a TypeScript error.

// cfg.appName = "HeroCode";

console.log(cfg);

// ======================================================
// Key Concepts Covered
// ======================================================
//
// 1. type alias
//    → Creates custom types.
//
// 2. function parameters with types
//    → Ensures correct data structure.
//
// 3. class implements type
//    → Forces class to follow a structure.
//
// 4. interface
//    → Defines object/class contracts.
//
// 5. class implements interface
//    → Guarantees required properties exist.
//
// 6. intersection type (&)
//    → Combines multiple types.
//
// 7. readonly
//    → Prevents accidental modification.
//
// ======================================================
