// Task 18: getPriceOf (Medium)
// Find the price of a product by its name.
//
// - Return the price number, not the whole product.
// - If there is no product with that name, return null.
// - Stop the loop as soon as you find it.

function getPriceOf(products, name) {
  // your code
}

const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

// Expected output:
console.log(getPriceOf(products, "Book"));  // 10
console.log(getPriceOf(products, "Pen"));   // 2
console.log(getPriceOf(products, "Lamp"));  // null
console.log(getPriceOf([], "Pen"));         // null
