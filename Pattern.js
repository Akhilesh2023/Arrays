// let row = +prompt("enter the number of row:");
let pattern = " ";
for (let i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    if (j % 2 == 0) {
      pattern += "0";
    } else {
      pattern += "1";
    }
  }
  pattern += "\n ";
}
console.log(pattern);

let array = [1, 2, 3, 4, 5, 6, 7];
let newArray = [];
for (i = 0; i <= array.length - 1; i++) {
  if (array[i] % 2 == 0) {
    newArray.push(array[i]);
  }
}
console.log(newArray);

// odd numbers

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = numbers.filter((number) => number % 2 != 0);

console.log(oddNumbers);

// prime number
let num = 3; // Change this number to check others
let isPrime = true;

if (num <= 1) {
  isPrime = false; // 1 and numbers less than 1 are not prime
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false; // Not prime if divisible by any number other than 1 and itself
      break;
    }
  }
}

if (isPrime) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}

// finding odd number and adding that in new array using push method

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newarr = [];
for (i = 0; i <= arr.length - 1; i++) {
  if (arr[i] % 2 != 0) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);

// using push method returning new array with conditon if number is even add that number in new array

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newnumbers = [];

for (let i = 0; i <= number.length - 1; i++) {
  if (number[i] % 2 == 0) {
    newnumbers.push(number[i]);
  }
}
console.log(newnumbers);
