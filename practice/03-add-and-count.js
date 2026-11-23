// Task 3: addAndCount (Warm-up)
// Add an item to the end of an array and return the new length.
//
// - Use push.
// - addAndCount(["a", "b"], "c") returns 3.

function addAndCount(items, newItem) {
  return items.push(newItem);
}

// Expected output:
console.log(addAndCount(["a", "b"], "c"));  // 3
console.log(addAndCount([], 5));            // 1
console.log(addAndCount([1, 2, 3, 4], 5));  // 5
