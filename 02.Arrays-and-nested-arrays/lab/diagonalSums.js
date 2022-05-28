// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated).
// The input comes as an array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main diagonal,
//  then the sum at the secondary diagonal.

function diagonalSums(matrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        mainDiagonal += matrix[i][i];
        secondaryDiagonal += matrix[matrix.length - 1 - i][i];
    }   
        console.log(mainDiagonal + ' ' + secondaryDiagonal);
}

diagonalSums([
    [20, 40],
    [10, 60]]
)

diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
)