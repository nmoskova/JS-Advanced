// Write a function that finds the biggest element inside a matrix.
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.

function biggestElement(arr) {
    let biggestNumber = -Infinity;
    for (let row = 0; row < arr.length; row++) {
        let maxnum = Math.max(...arr[row]);
        if (maxnum > biggestNumber) {
            biggestNumber = maxnum;
        } 
    } return biggestNumber
}

console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]]
))

console.log(biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))