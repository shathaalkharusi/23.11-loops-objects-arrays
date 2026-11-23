// Task 11: findByName (Medium)
// Find a user by name.
//
// - Return the whole user object.
// - If nobody has that name, return null.
// - Stop the loop as soon as you find the user.

function findByName(users, name) {
  return users.find(u => u.name === name) || null;
  
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(findByName(users, "Bob"));  // { name: "Bob", age: 15, city: "Salalah" }
console.log(findByName(users, "Cid"));  // { name: "Cid", age: 18, city: "Muscat" }
console.log(findByName(users, "Zoe"));  // null
console.log(findByName([], "Ann"));     // null
