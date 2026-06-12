const obj = {
  name: "Diet Coke",
  price: 40,
  isCold: true,
};

// {
//     name: string,
//     price: number,
//     isCold: boolean,
// }

// <------------Structure Typing------------->
type Cake = {
  name: string;
  price: number;
  ingredients: string[];
};

const BlackForest: Cake = {
  name: "Black Forest",
  price: 699,
  ingredients: ["Chocolate", "Milk Cream", "Red cherries"],
};

// <------------------------->

// <------------Duck Typing------------->

type Cup = {
  name: string;
};

let smallCup: Cup = {
  name: "200ml",
};

let bigCup: Cup = {
  name: "500ml",
  material: "Plastic",
};

smallCup = bigCup; //It should throw an error here but instead of throwing an error it will be satisfied with the extra parameters as its minimum requirement has been met.

console.log(smallCup);

// <------------------------->

// <------------Data Type Splitting------------->

type Item = { name: string; quantity: number };
type Address = { street: string; pin: number };

type Order = {
  _id: string;
  items: Item[];
  address: Address;
};

// So these kind's of data type making clarity in code base which help you on the production level or team work...

// <------------------------->

// <------------Utility Types------------->

// 1. Partial Utility
type BookOrder = {
  name: string;
  quantity: number;
};

const booking = (order: Partial<BookOrder>) => {
  console.log(order);
};

booking({ name: "Harry Potter" });
booking({ quantity: 10 });
booking({});

// So what Partial utility actually does is to make all the parameters optional which mean user will send the empty object in this function without any error...
// <------------------------->

// 2. Required Utility
type TeaOrder = {
  name: string;
  quantity: number;
};

const orderTea = (order: Required<TeaOrder>) => {
  console.log(order);
};

orderTea({ name: "Masala tea" });
orderTea({ quantity: 2 });
orderTea({});

// Now this Required utility throw an error to assign required params...this utility make all the parameters required....
// <------------------------->

//3. Pick Utility
type CoffeeOrder = {
  name: string;
  price: number;
  isCold: boolean;
};

const orderCoffee = (order: Pick<CoffeeOrder, "name" | "price">) => {
  console.log(order);
};

orderCoffee({ name: "Cold Coffee", price: 99 });

// The Pick utility was make some parameters required and if you pass only required parameter's instead of passing all the properties...
// It's similar to the partial property but you can't pass empty object in parameters...
// <------------------------->
