function greet(firstName, lastName, age) {
  console.log(`Hello ${firstName} ${lastName} you are ${age} years old`);
}
greet("Akhilesh", "Rana", 34);

function sumArray(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  return sum;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Sum of the Array is :", sumArray(array));

// find the largest number

let numbers = [15, 45, 84, 715, 41, 5];
function findLargestNumber(num) {
  let largest = num[0];

  for (let i = 1; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }

  return largest;
}
let largestNumber = findLargestNumber(numbers);
console.log("largest number is: ", largestNumber);
