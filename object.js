const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];
const names = users.map((user) => user.name);
console.log(names);

const carsModel = [
  {
    Name: "Thar",
    color: "Red",
    price: 1500000,
    carsjlocation: "Delhi",
  },
  { Name: "volvo", color: "black", price: 2500000, carslocation: "Rishikesh" },

  { Name: "toyota", color: "green", price: 5500000, carslocation: "guwahati" },
  { Name: "bmw", color: "blue", price: 11500000, carslocation: "mumbai" },

  { Name: "MG", color: "gray", price: 3500000, carslocation: "kolkata" },

  { Name: "mercedes", color: "yello", price: 25500000, carslocation: "gujrat" },
  { Name: "lora", color: "white", price: 2500000, carslocation: "dehradun" },
  { Name: "innova", color: "silver", price: 3500000, carslocation: "Agra" },
  { Name: "volvo", color: "pink", price: 4500000, carslocation: "Mp" },
];
const Name = carsModel.map((carsModel) => carsModel.Name);
const color = carsModel.map((carsModel) => carsModel.color);
const price = carsModel.map((carsModel) => carsModel.price);
const carslocation = carsModel.map((carsModel) => carsModel.carslocation);

console.log(Name);
console.log(color);
console.log(price);
console.log(carslocation);
