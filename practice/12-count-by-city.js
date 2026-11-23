// Task 12: countByCity (Medium)
// Count how many users live in each city.
//
// - Return an object like { Muscat: 2, Salalah: 1 }.
// - If the city is not in the object yet, set it to 1. Otherwise add 1.

function countByCity(users) {
  let result = {};
  for (const user of users) {
    if (result[user.city] === undefined) {
      result[user.city] = 1;
    } else {
      result[user.city]++;
    }
  }
  return result;
}

const users = [
  { name: "Ann", age: 25, city: "Muscat" },
  { name: "Bob", age: 15, city: "Salalah" },
  { name: "Cid", age: 18, city: "Muscat" },
];
const oneUser = [{ name: "Tim", age: 10, city: "Sohar" }];

// Expected output:
console.log(countByCity(users));    // { Muscat: 2, Salalah: 1 }
console.log(countByCity(oneUser));  // { Sohar: 1 }
console.log(countByCity([]));       // {}
