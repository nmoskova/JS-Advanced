// Write a function that finds the elements at even positions in an array.
// The input comes as an array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.

function evenPosition(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result += (arr[i] + ' ')
        }
    }
    return console.log(result)
}

evenPosition(['20', '30', '40', '50', '60'])
evenPosition(['5', '10'])