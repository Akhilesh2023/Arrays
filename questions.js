// // //1-write a javaScript program that display the largest integer among tow integer

// // // var num1 = +prompt("Enter the first number");
// // // var num2 = +prompt("Enter the second number");

// // // if (num1 > num2) {
// // //   alert(`${num1} is largest number`);
// // //   console.log(`${num1} is the largest number`);

// // //   // alert(``)
// // // } else if (num1 == num2) {
// // //   alert("both are the same number");
// // // } else {
// // //   alert(`${num2} is the largest number`);
// // //   console.log(`${num2} is the largest number`);
// // // }

// //2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.Sample numbers : 3, -7, 2Output : The sign is -

// // let num1 = +prompt("Enter the first number:");
// // let num2 = +prompt("Enter the Second number:");
// // let num3 = +prompt("Enter the Third Number:");

// // let numbers = num1 * num2 * num3;

// // if (numbers < 0) {
// //   alert("the sign is -");
// // } else {
// //   alert("No sign");
// // }

// //3-write a javaScript condition to sort three numbers
// //display an alert box to show the result
// //sample number 0 -1 4
// let num1 = 15;
// let num2 = 7;
// let num3 = 81;

// let first, second, third;
// if (num1 <= num2 && num1 <= num3) {
//   first = num1;
//   if (num2 <= num3) {
//     second = num2;
//     third = num3;
//   } else {
//     second = num3;
//     third = num2;
//   }
// } else if (num2 <= num3 && num2 <= num1) {
//   first = num2;
//   if (num1 <= num3) {
//     second = num1;
//     third = num3;
//   } else {
//     second = num3;
//     third = num1;
//   }
// } else {
//   first = num3;
//   if (num2 <= num1) {
//     second = num2;
//     third = num1;
//   } else {
//     second = num1;
//     third = num2;
//   }
// }
// console.log(first, second, third);
// // alert(`${first} ${second} ${third}`);

// // 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// // Sample numbers : -5, -2, -6, 0, -1
// // Output : 0
let num1 = 258;
let num2 = 15;
let num3 = 55;
let num4 = 105;
let num5 = 25;

if (num1 >= num2 && num1 >= num3 && num1 >= num4 && num1 >= num5) {
  alert(`${num1} is the largest number`);
} else if (num2 >= num1 && num2 >= num3 && num2 >= num4 && num2 >= num5) {
  alert(`${num2} is the largest number`);
} else if (num3 >= num1 && num3 >= num2 && num3 >= num4 && num3 >= num5) {
  alert(`${num3} is the largest number`);
} else if (num4 >= num1 && num4 >= num2 && num4 >= num3 && num4 >= num5) {
  alert(`${num4} is the largest number`);
} else {
  alert(`${num5} is the largest number`);
}

// // 5. Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// // Sample Output :
// // "0 is even"
// // "1 is odd"
// // "2 is even"
for (i = 1; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is an even number`);
  } else {
    console.log(`${i} is an odd number`);
  }
}

// // 6. Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// // Student Name	Marks
// // David	80
// // Vinoth	77
// // Divya	88
// // Ishitha	95
// // Thomas	68
// // The grades are computed as follows :
// // Range	Grade
// // <60	F
// // <70	D
// // <80	C
// // <90	B
// // <100	A
// // could not understand the questions

// // 7. Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
// // Click me to see the solution

// // let num = +prompt("Enter a number from 0 to 1: ");
// // for (i = 1; i <= 100; i++) {
// //   if (i % 3 == 0 && i % 5 == 0) {
// //     console.log(i, " fizzbuzz");
// //   } else if (i % 3 == 0) {
// //     console.log(i, "fizz");
// //   } else if (i % 5 == 0) {
// //     console.log(i, "buzz");
// //   } else {
// //     console.log();
// //   }
// // }

// // 8. According to Wikipedia a happy number is defined by the following process :
// // "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".
// // Write a JavaScript program to find and print the first 5 happy numbers.
// // Click me to see the solution

// // 9. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// // Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.
// // Click me to see the solution

// // 10. Write a JavaScript program to construct the following pattern, using a nested for loop.
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *
// // // Click me to see the solution
// // let num = 5;
// // let pattern = "";
// // for (let i = 1; i <= num; i++) {
// //   for (let j = 1; j <= i; j++) {
// //     pattern += "* " + " ";
// //   }
// //   pattern += "\n";
// // }
// // // for (let i = 1; i <= num; i++) {
// // //   pattern += "\n";
// // //   for (let j = 1; j <= i; j++) {
// // //     if (j % 2 == 0) {
// // //       pattern += 0 + " ";
// // //     } else {
// // //       pattern += 1 + " ";
// // //     }
// // //   }
// // // }
// // console.log(pattern);

// // for (i = 1; i <= num; i++) {
// //   for (j = i; j <= num; j++) {
// //     pattern += "* ";
// //   }
// //   pattern += "\n";
// // }
// // console.log(pattern);

// // 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.
// // Click me to see the solution

// // // 12. Write a JavaScript program to sum 3 and 5 multiples under 1000.
// // function b() {
// //   var myVar;

// //   console.log(myVar);
// // }
// // function a() {
// //   var myVar = 2;

// //   console.log(myVar);
// //   b();
// // }
// // var myVar = 1;
// // // console.log(myVar);
// // // a();
// // // console.log(myVar);

// // function b() {
// //   console.log(myVar);
// // }
// // function a() {
// //   var myVar = 2;
// //   b();
// // }
// // // var myVar = 5;
// // // a();
// // let name = "Akhilesh Rana";
// // let age = 34;
// // let occupation = "Business";
// // let greetings = `hi my name is ${name}, I am ${age} years old, My occupation is ${occupation}.`;
// // console.log(greetings);

// // let string =
// //   "HI MY NAME IS AKHILESH RANA I AM 34 YEARS OLD I AM FROM UTTRAKHAND";
// // // console.log(string);
// // let result = "5" + 2;
// // console.log(result, typeof result);
// let fruit = "banana";
// let color;
// let weight;

// switch (fruit) {
//   case "apple":
//     color = "red";
//     weight = 50;
//     break;
//   case "banana":
//     color = "yellow";
//     weight = `100 kg `;
//     break;
//   // No break here, so it falls through to the next case
//   case "lemon":
//     color = "yellow-green";
//     weight = 120; // This will also execute if fruit is "banana"
//     break;

//   default:
//     color = "unknown";
// }

// console.log(
//   ` fruit color is ${color},\n and it's weight is ${weight}\n weight type is ${typeof weight} `
// );

// let userName = "Akhilesh Rana";
// let userAge = 34;
// let userOccupation;
// let userCar = null;
// // let userCanDrive = userAge >= 18;
// let location = ["Tehri garhwal", "Rishikesh", "Saket", "gurgaon", "Rajapuri"];

// console.log(userName, typeof userName);
// console.log(userAge, typeof userAge);
// console.log(userOccupation, typeof userOccupation);
// console.log(userCar, typeof userCar);
// // console.log(userCanDrive, typeof userCanDrive);
// console.log(location, typeof location);
