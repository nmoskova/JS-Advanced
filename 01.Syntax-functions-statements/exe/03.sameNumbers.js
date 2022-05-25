// Write a function that takes an integer number as an input and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function sameNumbers(num) {
    let numToString = String(num);
    let is_same = true

    let firstNum = Number(numToString[0]);
    let result = firstNum;
    
    for (let i = 1; i < numToString.length; i++) {
        let curr_number = Number(numToString[i])
        result += curr_number
        if (firstNum != curr_number) {
            is_same = false
        }
    }
    console.log(is_same)
    console.log(result)
}

sameNumbers(2222222)
sameNumbers(1234)