// Write a function that sorts an array of numbers so that the first element is the smallest one, the second is the biggest one,
//  the third is the second smallest one, the fourth is the second biggest one, and so on.
// Return the resulting array.

function sortNumbers(arr) {
  let counter = 1;
  const newArray = [];
  let n = 0;

  while (arr.length > 0) {
    if (counter % 2 != 0) {
      n = Math.min(...arr);
    } else {
      n = Math.max(...arr);
    }
    newArray.push(n);
    arr.splice(arr.indexOf(n), 1);
    counter += 1;
  }
  return newArray;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
