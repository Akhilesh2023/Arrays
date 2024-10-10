// const numbers = [1, 2, 3, 4, 5];
// let newnum = [];
// numbers.forEach(function (value, index) {
//   for (i = 0; i <= numbers.length; i++)
//     if (i % 2 == 0) {
//   console.log(`the number at ${index} is ${value} `);
// });

// const fruites = ["banana", "apple", "mango", "papaya", "grapes"];
// fruites.forEach(function (fruite, index) {
//   console.log(`fruite at index ${index} is ${fruite}`);
// // // });
// const users = [
//   { name: "Manish Rana", birthyear: 1985 },
//   { name: "Akhilesh Rana", birthyear: 1990 },
//   { name: "Vijaypal singh pundir", birthyear: 1982 },
//   { name: "Gaurav Kumar", birthyear: 1987 },
//   { name: "Kumar Saurav", birthyear: 1990 },
// ];

// users.forEach((user) => {
//   const age = 2024 - user.birthyear;

//   console.log(
//     `${user.name} was born on ${user.birthyear} and ${user.name} is ${age} years old`
//   );
// });
// // console.log(users);

// const numbers = [10, 20, 30, 40, 50, 60];
// let doublenumber = [];
// numbers.forEach(function (number) {
//   doublenumber.push(number + 20);
// });

// // console.log(doublenumber);

// ARRAY.ISARRAY **

// const array = ["akhilesh", 12, "true", "", 25];
// // // // console.log(Array.isArray(array));

// FROM **

// const manish = "hello";
// const arr = "manish";
// const arr1 = [1, 2, 3, 4, 5, 6, 7];

// let newarr = Array.from(manish);
// let newarr1 = Array.from(arr);
// let newarr2 = Array.from(arr1, (x) => {
//   if (x % 2 == 0) {
//     return `${x} is even number`;
//   } else {
//     return ` ${x} is odd number`;
//   }
// });

// console.log(arr, Array.isArray(arr), typeof arr);
// console.log(arr1, Array.isArray(arr1));

// console.log(newarr);
// console.log(newarr1);
// console.log(newarr2, Array.isArray(newarr2));

// PUSH**
// const arr = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// arr.push(21, 22, 23, 24, 25);
// console.log(arr);
// const fruites = ["Apple", "Mango", "kiwi", "Oranges", "Banana"];
// fruites.push("grapes", "Guava");
// console.log(fruites);

// // // const employee = [
// // //   {
// // //     Name: "Akhilesh Rana",
// // //     EmpCode: 433,
// // //     desgination: "Store Manager",
// // //     department: "Retail Sales",
// // //     storeName: "Ambience Gurgaon",
// // //   },
// // //   {
// // //     Name: "Yashwant Rawat",
// // //     EmpCode: 450,
// // //     desgination: "Assistant store Manager",
// // //     department: "Retail Sales",
// // //     storeName: "Ambience Gurgaon",
// // //   },
// // //   {
// // //     Name: "Neha Bharti",
// // //     EmpCode: 498,
// // //     desgination: "Third Key",
// // //     department: "Retail Sales",
// // //     storeName: "Ambience Gurgaon",
// // //   },
// // //   {
// // //     Name: "Ashutosh Rajawat",
// // //     EmpCode: 501,
// // //     desgination: "Sales Executives",
// // //     department: "Retail Sales",
// // //     storeName: "Ambience Gurgaon",
// // //   },
// // // ];

// // // employee.push({
// // //   Name: "Sarfaraz saif ali",
// // //   EmpCode: 502,
// // //   desgination: "Senior Executives",
// // //   department: "After sale Service",
// // //   storeName: "Ambience mall",
// // //   salary: 54000,
// // // });
// // // console.log(employee);

// // // const akhilesh = {
// // //   Name: "Akhilesh Rana",
// // //   friends: [],
// // // };

// // // akhilesh.friends.push("Dinesh", "pawan", "saurav", "gaurav");
// console.log(akhilesh);

// POP **
// const numbers = [1, 2, 3, 4, 5];
// numbers.pop();
// let lastElements = numbers.pop();
// console.log(lastElements);
// let secondElement = numbers.pop();
// console.log(secondElement);
// let thirdElement = numbers.pop();
// console.log(thirdElement);

// console.log(numbers);

// // //shift

// // // const numbers = [10, 2, 3, 4, 5];

// // // let shiftNumbers = numbers.shift();

// // // console.log(shiftNumbers);
// // // // console.log(numbers);

// // // const fruites = ["Apple", "Mango", "kiwi", "Oranges", "Banana"];
// // // let newfruites = fruites.shift();
// // // console.log(newfruites);
// // // console.log(fruites);

// // // //unshift*
// // // const numbers = [10, 2, 3, 4, 5];
// // // let newNumbers = numbers.unshift(120, 30, 50);
// // // console.log(numbers);
// // // console.log(newNumbers);
// // // const fruites = ["Apple", "Mango", "kiwi", "Oranges", "Banana"];
// // // let newFruites = fruites.unshift("watermelon", "pineapple", "pears");
// // // console.log(fruites);
// // // console.log(newFruites);

// // //SPLICE**
// // // const fruites = ["Apple", "Mango", "kiwi", "Oranges", "Banana"];
// // // let newfruites = fruites.splice(3, 1, "papaya");
// // // console.log(newfruites); //removed fruites
// // // console.log(fruites); // new fruites added or removed

// // //FOREACH **forEach: Does not return anything (always undefined).

// // // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // const newNumbers = numbers.forEach(function (num) {
// // //   if (num % 2 == 0) {
// // //     console.log(`${num} is even number`);
// // //   } else {
// // //     console.log(`${num} is odd number`);
// // //   }
// // // });

// // // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // numbers.forEach((num) => {
// // //   console.log(num + 2);
// // // });

// // // console.log(numbers);
// // // console.log(NewNumber);

// // //MAP **map: Returns a transformed array based on the original, without modifying the original.
// // //map: Returns a new array.

// // // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // const newNumbers = numbers.map((num) => {
// // //   if (num % 2 == 0) {
// // //     return `${num} is an even number`;
// // //   } else {
// // //     return `${num} is an odd number`;
// // //   }
// // // });

// // // console.log(newNumbers);

// // //FILTER
// // //Purpose: The filter method creates a new array with all elements that pass a test (provided as a function). It filters out elements that do not satisfy the condition.
// // // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // const evenNumber = numbers.filter((num) => num % 2 == 0);

// // // console.log(evenNumber);
// // // const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // const oddNumbers = numbers.filter((num) => num % 2 != 0);

// // // console.log(oddNumbers);
// // // function intro() {
// // //   console.log(
// // //     ` Hi I am ${this.fname} I am zx a ${this.profession} and i am ${this.age} years old`
// // //   );
// // // }
// // // user = {
// // //   fname: "Akhilesh rana",
// // //   profession: "businesman",
// // //   age: 34,
// // //   intro: intro,
// // // };
// // // user2 = {
// // //   fname: "Manish rana",
// // //   profession: "it support",
// // //   age: 38,
// // //   intro: intro,
// // // };

// // // user3 = {
// // //   fname: "KUMAR GAURAV",
// // //   profession: " BUISNESMAN",
// // //   age: 38,
// // //   intro: intro,
// // // };
// // // user4 = {
// // //   fname: "KUMAR SAUARAV",
// // //   profession: "it support",
// // //   age: 35,
// // //   intro: intro,
// // // };
// // // user.intro();
// // // user2.intro();
// // // user3.intro();
// // // // user4.intro();
// // // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // let evenNumber = arr.filter((num) => num % 2 == 0);
// // // // console.log(evenNumber);\
// // // const arr = [5, 2, 3, 4];
// // // const sum = arr.reduceRight((num1, num2) => num1 * num2);
// // // console.log(sum);

// // // const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // const newarr = arr1.map((num) => num * 2);

// // // console.log(newarr);

// // // const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // // let evenNumber = arr.filter((num) => num % 2 == 0);
// // // console.log(evenNumber);

// // // const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // // let doubleNumber = arr.map((num) => num * 2);
// // // console.log(doubleNumber);

// // // const arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // // let found = arr.find((num1) => num1 > 10);
// // // let foundIndex = arr.findIndex((num) => num > 10);
// // // console.log(found);
// // // console.log(foundIndex);
// // // console.log(arr.indexOf(25));
// // // console.log(arr.indexOf(2));
// // // console.log(arr.indexOf(4));
// // // console.log(arr.lastIndexOf(3));

// // // let newarry = arr.splice(1, 1);
// // // console.log(arr);
// // // console.log(newarry);
// // // console.log(arr);

// // // const arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // // const fruites=['Apples','guava','kiwi','banana']
// // // newArr = arr.map((num) => num * 2);
// // // console.log(newArr);
// // // const found = arr.find((num) => num > 10);
// // // const foundIndex = arr.findIndex((num) => num > 10);
// // // console.log(
// // //   `The number is greater than 10 is ${found} and its present at index no ${foundIndex}`
// // // );
// // // const arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // // const fruites = ["Apples", "guava", "kiwi", "banana"];
// // // let merged = arr.concat(fruites);
// // // console.log(merged, arr, fruites);
// // // const sliced = arr.slice(0, arr.length);
// // // // console.log(sliced);
// // // const arr = [3, 4, [5, 6, 7, [8, 9, 10, 11, 12]]];

// // // let nestedArray = arr.flat(2);
// // // // console.log(nestedArray);
// // // const arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// // // let newarr = arr.flatMap((num) => [num, num * 2]);
// // // console.log(newarr);

// // const arr = [12, 5, 87, 56, 41, 21, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// // // arr.sort((a, b) => b - a);
// // // console.log(arr);
// // // console.log(arr.fill(0, 2));
// // console.log(arr.copyWithin(1, 3));
// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(arr.copyWithin(0, 1));

// // let total = 0;
// // function sumAll(...num) {
// //   for (let value of num) {
// //     total += value;
// //   }
// // }
// // sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// // console.log(total);
// function sum(...numbers) {
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
// console.log(sum(50, 50));
// const arr = [1, 2, 3];
// const newarr = [1, 2, 3, ...arr, 4, 5];
// console.log(newarr);

// function multiply(a, b, c) {
//   return a * b * c;
// }
// const number = [2, 2, 2];
// console.log(multiply(...number));

// function mergeArrays(...arrays) {
//   return [].concat(...arrays);
// }
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const arr4 = [9, 8, 7];
// const arr5 = [6, 5, 4];
// const arr6 = [3, 2, 1];
// console.log(mergeArrays(arr1, arr2, arr3));

// combined = mergeArrays(arr4, arr5, arr6);
// console.log(combined);

const numbers = [10, 20, 30, 40, 50, 60];
let doublenumber = [];
const number1 = numbers.forEach(function (number) {
  doublenumber.push(number * 2);
});

console.log(doublenumber);
console.log(number1);
