// Write a function that takes two positive numbers as input and compute the greatest common divisor.	
// The input comes as two positive integer numbers.
// The output should be printed on the console.


function greatestCommonDivisor(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number' && num1 > 0 && num2 > 0) {
        while (num1) {
            let t = num1;
            num1 = num2 % num1;
            num2 = t;
        }
        return num2
    }
}

console.log(greatestCommonDivisor(15, 5))
console.log(greatestCommonDivisor(2154, 458))