// Task 4: sumArray (Easy)
// Add up all numbers of an array.
//
// - Use a for...of loop and a variable outside the loop.
// - Empty array: return 0.

function sumArray(numbers) {
  let sum =0;

  for (const num of numbers) {
    sum = sum + num;
  }

  return sum;
}


// Expected output:
console.log(sumArray([1, 2, 3]));    // 6
console.log(sumArray([10]));         // 10
console.log(sumArray([-5, 5, 10]));  // 10
console.log(sumArray([2.5, 2.5]));   // 5
console.log(sumArray([]));           // 0
