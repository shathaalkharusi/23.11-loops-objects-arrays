// Task 14: getMin (Easy)
// Find the smallest number in an array (do not use Math.min).
//
// - Start with the first number, then compare every number with it.
// - Empty array: return null.

function getMin(numbers) {
  if(numbers.length === 0) return null;

  let smallest= numbers[0];
  for(let i= 0; i < numbers.length; i++){
    if(numbers[i] < smallest){
      smallest= numbers[i];

    }
  }
  return smallest;
}

// Expected output:
console.log(getMin([3, 9, 4]));     // 3
console.log(getMin([-8, -2, -5]));  // -8
console.log(getMin([7]));           // 7
console.log(getMin([5, 1, 1]));     // 1
console.log(getMin([]));            // null
