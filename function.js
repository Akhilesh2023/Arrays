//IS even or odd
function isEvenOrOdd(num) {
  return num % 2 === 0;
}

// let number;
for (i = 1; i <= 10; i++) {
  if (isEvenOrOdd(i)) {
    console.log(i + " is an even number.");
  } else {
    console.log(i + " is an odd number.");
  }
}

//factorial from 1 to 15

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// let number = 5;
for (i = 1; i <= 15; i++) {
  console.log("Factorial of " + i + " is " + factorial(i));
}

// To check is palindrom
function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

let word = "MADAM";
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

//finding the largest number among 3 numbers

function findLargest(...num) {
  return Math.max(...num);
}
// let num1 = +prompt("enter the first number"),
//   num2 = +prompt("enter the second number"),
//   num3 = +prompt("Enter the third number");
console.log(
  "The largest  number is " + findLargest(15, 25, 35, 55, 95, 135, 58, 162)
);
