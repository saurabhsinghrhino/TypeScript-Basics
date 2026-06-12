// This is the normal typescript function
function greetUser(name: string, age: number) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}
greetUser("Saurabh", 18);

//This is the normal sum function were we can set the data type on parameter's and returned output
function getSum(a: number, b: number): number {
  return a + b;
}
console.log(getSum(10, 20));
