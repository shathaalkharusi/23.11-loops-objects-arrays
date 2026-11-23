// Task 8: getNames (Easy)
// Collect the names of all users into a new array.
//
// - users is an array of { name, age, city }.
// - Create an empty array, then push every name into it.
// - Empty array: return [].

function getNames(users) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getNames(users));    // ["Ann", "Bob", "Cid"]
console.log(getNames(oneUser));  // ["Tim"]
console.log(getNames([]));       // []
