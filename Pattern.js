// // let row = +prompt("enter the number of row:");
// let pattern = " ";
// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     if (j % 2 == 0) {
//       pattern += "0";
//     } else {
//       pattern += "1";
//     }
//   }
//   pattern += "\n ";
// }
// // console.log(pattern);
// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] % 2 == 0) {
//     newarr = arr.push(arr.splice[0]);
//   }
// // }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((number) => number % 2 != 0);

// // console.log(evenNumbers);
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i]);
//   }
// }

// // console.log(evenNumbers);
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newarr = [];
// for (i = 0; i <= arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     newarr.push(arr[i]);
//   }
// }

// // console.log(newarr);
// let primenum=+prompt('Enter the number')
// if (primenum/2!=0 && )

// let num = 10; // Change this number to check others
// let isPrime = true;

// if (num <= 1) {
//   isPrime = false; // 1 and numbers less than 1 are not prime
// } else {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       isPrime = false; // Not prime if divisible by any number other than 1 and itself
//       break;
//     }
//   }
// }

// if (isPrime) {
//   console.log(`${num} is a prime number`);
// } else {
//   console.log(`${num} is not a prime number`);
// }
// const arr = [10, 20, 13, 21, 51, 3, 30, 40, 50, 60, 70, 80, 90, 100];
// const newarr = [];
// for (i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] % 2 != 0) {
//     newarr.push(arr[i]);
//   }
// }
// console.log(newarr);
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newnumbers = [];

for (let i = 0; i <= number.length - 1; i++) {
  if (number[i] % 2 == 0) {
    newnumbers.push(number[i]);
  }
}
console.log(newnumbers);
