// // let userName = "Akhilesh Rana";
// // let userAge = 34;
// // let userOccupation;
// // let userCar = null;
// // let userCanDrive = userAge >= 18;
// // let myLocation = ["Tehri garhwal", "Rishikesh", "Saket", "gurgaon", "Rajapuri"];
// // myLocation.length = 4;
// // console.log(myLocation[0]);
// // // let currentLocation = myLocation.pop();
// // let newLocation = myLocation.push("uttam nagar");
// // console.log(userName, typeof userName);
// // console.log(userAge, typeof userAge);
// // console.log(userOccupation, typeof userOccupation);
// // console.log(userCar, typeof userCar);
// // console.log(userCanDrive, typeof userCanDrive);
// // console.log(myLocation, typeof myLocation, myLocation.length);
// // // console.log(newLocation, "\n", currentLocation);

// // let arr = ["Akhilesh", "Manish", "Vijaypal", "Surat Singh Rana"];
// // let arr1 = ["saurav", "Gaurav", "Arnav", "kumar kaushal"];

// // console.log(arr1);
// // console.log(arr);

// // let newArray = arr.concat(arr1);
// // console.log(newArray);

// // // newArray = array1.concat(array2, array3, ..., arrayN);

// // let arr1 = [1, 2, 3];
// // let arr2 = [4, 5, 6];

// // let newArr = arr1.concat(arr2);
// // console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
// // console.log(arr1); // Original array is unchanged: [1, 2, 3]

// // for (let rep = 1; rep <= 10; rep++) {
// //   console.log("this is reptition", rep);
// // }
// let arr = ["Akhilesh", "Manish", "Vijaypal", "Surat Singh Rana"];
// for (i = 0; i < 4; i++) {
//   console.log(arr[i]);
// }

let num = +prompt("Enter the number:");
for (let i = 2; i <= Math.sqrt(num); i++)
  if (num % i === 0) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not prime numnber type another number`);
  }
