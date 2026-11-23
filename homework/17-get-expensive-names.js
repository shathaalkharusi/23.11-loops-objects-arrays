// Task 17: getExpensiveNames (Medium)
// Collect the names of products that cost more than limit.
//
// - products is an array of { name, price }.
// - A price equal to limit does not count.
// - Nothing matches: return [].

function getExpensiveNames(products, limit) {
  // your code
}

const products = [
  { name: "Pen", price: 2 },
  { name: "Book", price: 10 },
  { name: "Bag", price: 25 },
];

// Expected output:
console.log(getExpensiveNames(products, 5));   // ["Book", "Bag"]
console.log(getExpensiveNames(products, 25));  // []
console.log(getExpensiveNames(products, 0));   // ["Pen", "Book", "Bag"]
console.log(getExpensiveNames([], 5));         // []
