let userName = "Akhilesh Rana";
let userAge = 34;
let userOccupation;
let userCar = null;
let userCanDrive = userAge >= 18;
let myLocation = ["Tehri garhwal", "Rishikesh", "Saket", "gurgaon", "Rajapuri"];
myLocation.length = 4;
console.log(myLocation[0]);
// let currentLocation = myLocation.pop();
let newLocation = myLocation.push("uttam nagar");
console.log(userName, typeof userName);
console.log(userAge, typeof userAge);
console.log(userOccupation, typeof userOccupation);
console.log(userCar, typeof userCar);
console.log(userCanDrive, typeof userCanDrive);
console.log(myLocation, typeof myLocation, myLocation.length);
// console.log(newLocation, "\n", currentLocation);

let array = ["Akhilesh", "Manish", "Vijaypal", "Surat Singh Rana"];
let array1 = ["saurav", "Gaurav", "Arnav", "kumar kaushal"];

console.log(array1);
console.log(array);

let newArray = array.concat(array1);
console.log(newArray);

let array2 = [1, 2, 3, 4, 5];
let array3 = [6, 7, 8, 9, 10];
newArray1 = array.concat(array1, array2, array3);
console.log(newArray1);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = arr1.concat(arr2);
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
console.log(arr1); // Original array is unchanged: [1, 2, 3]

for (let rep = 1; rep <= 10; rep++) {
  console.log("this is reptition", rep);
}
let arr = ["Akhilesh", "Manish", "Vijaypal", "Surat Singh Rana"];
for (i = 0; i < 4; i++) {
  console.log(arr[i]);
}
