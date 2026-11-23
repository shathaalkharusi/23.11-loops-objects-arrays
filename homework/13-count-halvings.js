// Task 13: countHalvings (Easy)
// Count how many times you can halve a number until it is 1 or less.
//
// - Use a while loop.
// - countHalvings(8): 8 -> 4 -> 2 -> 1 gives 3 halvings.
// - If start is already 1 or less, the answer is 0.

function countHalvings(start) {
  if ( start <= 1) return 0;
  let count = 0;
  while(start > 1){
    start= start / 2;
    count++;
  }
  
 return count;
}

// Expected output:
console.log(countHalvings(8));    // 3
console.log(countHalvings(1));    // 0
console.log(countHalvings(10));   // 4
console.log(countHalvings(0));    // 0
console.log(countHalvings(100));  // 7
