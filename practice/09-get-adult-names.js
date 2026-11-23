// Task 9: getAdultNames (Easy)
// Collect the names of users who are 18 or older.
//
// - Same as the previous task, but add an if.
// - No adults: return [].

function getAdultNames(users) {
  // your code
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(getAdultNames(users));    // ["Ann", "Cid"]
console.log(getAdultNames(oneUser));  // []
console.log(getAdultNames([]));       // []
