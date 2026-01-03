// var not use

// const and let
// const countryName = "BD"

// let age = 10;
// age = 20;

// console.log(`Loidjaj
//   dkak
//   kakf`);

// function sum(num1, num2) {
//   return num1 + num2;
// }
  
// const sum2 = (num1, num2) => num1 + num2;

// const sum3 = (num1, num2) => {
//   return num1 + num2;
// }

// const numbers = [1, 2, 3, 4, 5, 55];
// console.log(...numbers);

// const person = {
//   name: "Rakib",
//   age: 24
// }

// const { name, age } = person;
// console.log(name, age);

// const frnd = ["Hero Alom", "Mala"];

// const [first, second] = frnd;
// console.log(first, second);

const person = {
  name: "Rakib",
  age: 24
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

Object.seal(person);
Object.freeze(person);