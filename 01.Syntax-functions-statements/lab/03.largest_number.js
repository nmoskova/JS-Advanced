// Write a function that takes three number arguments as input and finds the largest of them. Print the following text on the console:  `The largest number is {number}.`.
// The input comes as three number arguments passed to your function.
// The output should be printed to the console.


function largestNumber(num1, num2, num3) {
    let result;
    if (num1 >= num2 && num1 >= num3) {
        result = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        result = num2;
    }
    else {
        result = num3;
    }

    console.log(`The largest number is ${result}.`)
}

function largestNumberAnotherSolution(num1, num2, num3) {
    let result = Math.max(num1, num2, num3)
    console.log(`The largest number is ${result}.`)
}

largestNumber(100, 200, 300)
largestNumberAnotherSolution(100, 200, 300)

largestNumber(-1, 5, 200)
largestNumberAnotherSolution(-1, 5, 200)