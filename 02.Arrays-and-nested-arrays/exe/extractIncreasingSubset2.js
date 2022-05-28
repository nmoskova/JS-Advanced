function extractIncreasingSubset2(arr2) {
  let newArray = [];
  arr2.reduce((previousNumber, currentNumber) => {
    if (currentNumber >= previousNumber) {
      newArray.push(currentNumber);
    }
    return Math.max(previousNumber, currentNumber);
  }, -Infinity);
  return newArray;
}

console.log(extractIncreasingSubset2([1, 3, 8, 4, 10, 12, 3, 2, 24]));

console.log(extractIncreasingSubset2([20, 3, 2, 20, 15, 6, 1]));

console.log(extractIncreasingSubset2([-Infinity, -100, 1]));
