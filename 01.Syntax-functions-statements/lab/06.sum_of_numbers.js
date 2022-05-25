// Write a JS function that takes two numbers n and m as an input and prints the sum of all numbers from n to m.
//The input comes as two string elements that need to be parsed as numbers.
//The output should return the sum.

function sumOfNumbers(n1, n2) {
    let num1 = Number(n1);
    let num2 = Number(n2);
    let result = 0;

    for (let i = num1; i<= num2; i++) {
        result += i;
    }
    console.log(result)
}

sumOfNumbers('1', '5' )
sumOfNumbers('-8', '20')