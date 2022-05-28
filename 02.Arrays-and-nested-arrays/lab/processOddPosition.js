// You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array,
//  doubled and in reverse order.
// The input comes as an array of number elements.
// The output is the return on the console on a single line, separated by space.

function processOddPosition(arr) {
    let newArr = [];
    for (let i = 1; i < arr.length; i+=2) {
        newArr.push(arr[i] * 2)
    } return (newArr.reverse()).join(' ')
}

console.log(processOddPosition([10, 15, 20, 25]))
console.log(processOddPosition([3, 0, 10, 4, 7, 3]))