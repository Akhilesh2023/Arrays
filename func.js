// // function checEvenOrOdd(num) {
// //   if (num % 2 === 0) {
// //     return num + " is even";
// //   } else {
// //     return num + " is odd";
// //   }
// // }
// // console.log(checEvenOrOdd(16));
// // console.log(checEvenOrOdd(13));

// // function multipication(a, b) {
// //   return num * num1;
// // }
// // let num = 10;
// // let num1 = 20;
// // console.log(multipication(num, num1));

// // sum of two numbers
// // function sum(a, b) {
// //   return num1 + num2;
// // }
// // let num1 = 5;
// // let num2 = 3;
// // console.log(sum(num1, num2));

// // let sum = function (a, b) {
// //   return num - num1;
// // };
// // let num = 15;
// // let num1 = 15;
// // console.log(sum(num, num1));

// // let sub = function (a, b) {
// //   return num1 - num2;
// // };
// // let num1 = 10;
// // let num2 = 20;
// // console.log(sub(num1, num2));

// // function calcAge(birthYear) {
// //   return 2024 - birthYear;
// // }
// // let age = calcAge(2000);
// // console.log(`your age is ${age}`);

// // let calcAge = function (birthYear) {
// //   return 2024 - birthYear;
// // };
// // let age = calcAge(1987);
// // console.log(`your age is ${age}`);
// // let calcAge2 = (birthYear) => 2024 - birthYear;
// // let age1 = calcAge2(1987);
// // console.log(age1);
// const yearUntillRetirement = (birthYear) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };
// console.log(yearUntillRetirement(1962));

// function greet(name, age, place, compony) {
//   return (
//     `hello my name is  ` +
//     name +
//     `  i am ` +
//     age +
//     ` years old ` +
//     ` i am from ` +
//     place +
//     ` i work for ` +
//     compony
//   );
// }
// // console.log(greet("Akhilesh Rana", 34, "Tehri garhwal", "Connect One"));
// function add(num1, num2, num3, num4) {
//   return num1 + num2 + num3 + num4;
// }

// let total = add(100, 200, 300, 400);
// // console.log(total);

// // function sub(num1, num2) {
// //   console.log(num1 - num2);
// // }
// // sub(50, 25);
// // const multiply = function (num1, num2) {
// //   return num1 * num2;
// // };
// // console.log(multiply(15, 2));

// // const greet = (name) => console.log("hello " + name);
// // greet("Akhilesh Rana");

// // const square = (num) => num * num;
// // console.log(square(5));
// const num = [1, 2, 3, 4, 5];
// const doubled = num.map((num) => num * num);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];
// const names = users.map((user) => user.name);
// console.log(names);

// const carsModel = [
//   {
//     Name: "Thar",
//     color: "Red",
//     price: 1500000,
//     location: "Delhi",
//   },
//   { Name: "volvo", color: "black", price: 2500000, location: "Rishikesh" },

//   { Name: "toyota", color: "green", price: 5500000, location: "guwahati" },
//   { Name: "bmw", color: "blue", price: 11500000, location: "mumbai" },

//   { Name: "MG", color: "gray", price: 3500000, location: "kolkata" },

//   { Name: "mercedes", color: "yello", price: 25500000, location: "gujrat" },
//   { Name: "lora", color: "white", price: 2500000, location: "dehradun" },
//   { Name: "innova", color: "silver", price: 3500000, location: "Agra" },
//   { Name: "volvo", color: "pink", price: 4500000, location: "Mp" },
// ];
// const Name = carsModel.map((carsModel) => carsModel.Name);
// const color = carsModel.map((carsModel) => carsModel.color);
// const price = carsModel.map((carsModel) => carsModel.price);
// // const location = carsModel.map((carsModel) => carsModel.location);

// console.log(Name);
// console.log(color);
// console.log(price);
// // console.log(location);

// // const number = ["1", "2", "3"];
// // const numbers = number.map((str) => number(str));
// // console.log(numbers);

// const stringNumbers = ["1", "2", "3"];
// const numbers = stringNumbers.map((str) => Number(str));
// console.log(numbers, typeof numbers); // Output: [1, 2, 3]

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
// ];
// const updatedProducts = products.map((product) => ({
//   ...product,
//   tax: product.price * 0.1,
// }));
// console.log(updatedProducts);
const items = ["Apple", "Banana", "Cherry"];
const listItems = items.map((item) => <li key={item}>{item}</li>);

return <ul>{listItems}</ul>;
