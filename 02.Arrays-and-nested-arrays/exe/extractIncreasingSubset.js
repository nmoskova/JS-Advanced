// Write a function that extracts only those numbers that form a non-decreasing subset. In other words,
//  you start from the first element and continue to the end of the given array of numbers.
//   Any number which is LESS THAN the current biggest one is ignored, alternatively if it’s equal or higher
//    than the current biggest one you set it as the current biggest one and you continue to the next number.
// The input comes as an array of numbers.
// The output is the processed array after the filtration, which should be a non-decreasing subset. Return the array of numbers.

function extractIncreasingSubset(arr) {
  let increasingSubset = [];
  let biggestNumber = -Infinity;

  for (let index = 0; index < arr.length; index++) {
    let currentNumber = arr[index];
    if (currentNumber >= biggestNumber) {
      increasingSubset.push(currentNumber);
      biggestNumber = currentNumber;
    }
  }
  return increasingSubset;
}


console.log(extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log(extractIncreasingSubset([20, 3, 2, 15, 20, 6, 1]));

console.log(extractIncreasingSubset([1, 2, 3, 4]));




