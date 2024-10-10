//FUNCTIONS DECLARATION
// A named function is declared with the function keyword followed
//  by the function name. It can be called anywhere in the code due to hoisting
// (function declarations are moved to the top during execution).

function calcAge(birthYear) {
  return 2024 - birthYear;
}
let age = calcAge(2000);
console.log(`your age is ${age}`);

// Anonymous Function (Function Expression)
// An anonymous function is defined without a name and is usually assigned to a variable.
//  It is not hoisted, meaning it cannot be used before it is defined.

let calcAge1 = function (birthYear) {
  return 2024 - birthYear;
};
let agecal = calcAge1(1987);
console.log(`your age is ${agecal}`);

//RETIRENENT UNTILL RETIRE

const yearUntillRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `YOU ARE RETIERING IN ${retirement} YEARS`;
};
console.log(yearUntillRetirement(1962));

// Arrow Function
// Introduced in ES6, arrow functions provide a shorter syntax for writing functions.
// Arrow functions don’t have their own this context,
// making them useful for writing concise code and avoiding common this-binding issues.

let calcAge2 = (birthYear) => 2024 - birthYear;
let age1 = calcAge2(1987);
console.log(`User age is ${age1}`);
