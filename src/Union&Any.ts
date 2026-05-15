//Union Method
let subs: string | number = "1M";

// Uses of union method
let apiRequestStatus: "pending" | "success" | "error";

apiRequestStatus = "pending"; // it will gives you a dropdown table to select values if you add another value instead of these 3 options it'll give you an error...

// Any Method

let orders = ["12", "20", "28", "42"];
let currentOrder: string | undefined; // if you hoverover on this variable name you get suggestion which looks like currentOrder: any it means you can put any data types in this variable...
// So any means you can put data types in a variable...

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

// currentOrder = 42; // this happen because you can't annotate or explain which only datatype you can store in this variable.

console.log(currentOrder); // but you hoverover there then you are getting currentOrder : string | undefined this type of suggestion because of any method...

// So what you can do is set union on the currentOrder variable...
