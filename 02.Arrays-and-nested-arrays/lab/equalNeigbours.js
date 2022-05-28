// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs you find and return it.

function equalNumbers(matrix) {
    let result = 0;

    for (let rowI = 0; rowI < matrix.length; rowI++) {
        for (let colI = 0; colI < matrix[rowI].length - 1; colI++) {
            if (matrix[rowI][colI] === matrix[rowI][colI + 1]) {
                result++;
            }
        }
    }
    let rowSize = matrix[0].length;

    for (let colI = 0; colI < rowSize; colI++) {
        for (let rowI = 0; rowI < matrix.length-1; rowI++) {
            if (matrix[rowI][colI] === matrix[rowI+1][colI]) {          
                result++;
            }
        }
    }
    return result
}

// console.log(equalNumbers(
//     [['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']]

// ))

// console.log(equalNumbers(
//     [['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']]

// ))

console.log(equalNumbers([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]))