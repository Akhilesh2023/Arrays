const number = ["1", "2", "3"];
const number1 = number.map((str) => Number(str));
console.log(number1);

const stringNumbers = ["1", "2", "3"];
const numbers = stringNumbers.map((str) => Number(str));
console.log(numbers, typeof numbers, Array.isArray(numbers)); // Output: [1, 2, 3]

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
];
const updatedProducts = products.map((product) => ({
  ...product,
  tax: product.price * 0.1,
}));
console.log(updatedProducts);
