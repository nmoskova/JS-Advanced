// You are given two integers n and k. Write a JS function that generates and return the following sequence:
// •	The first element is 1
// •	Every following element equals the sum of the previous k elements
// •	The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is the return value of your function and should be an array of numbers.

function lastKNUmbers(n, k) {
    let arr = [1,];
    for (let i = 0; i<n-1; i++) {
        arr[i+1] = 0;
        if (arr.length <= k ) {
            for (let ind = 0; ind < arr.length-1; ind++) {
                arr[i+1] += arr[ind];

            }
        }else {
            for (let ind= i - k + 1; ind <arr.length-1; ind++) {
                arr[i+1] += arr[ind];
            }
        }
    } return arr;
}

console.log(lastKNUmbers(6, 3))
console.log(lastKNUmbers(8, 2))