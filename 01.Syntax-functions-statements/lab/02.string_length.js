// Write a JS function that takes three string arguments as an input. Calculate the sum of the length of the strings and the average length of the strings rounded down to the nearest integer.
// The input comes as three string arguments passed to your function.
// The output should be printed on the console in two lines.

function threeStrings(a, b, c) {
    let sumLength = a.length + b.length + c.length;
    let average = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(average);
}

threeStrings('chocolate', 'ice cream', 'cake')
threeStrings(5, '5', 2)

