// Write a program that performs different operations on an array of elements. Implement the following operations:
// •	Sum(ai) - calculates the sum of all elements from the input array
// •	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
// •	Concat(ai) - concatenates the string representations of all elements from the array
// The input comes as an array of number elements.
// The output should be printed on the console on a new line for each of the operations.

function aggregateElements(aInput) {
    console.log(sumA(aInput));
    console.log(getInverseValues(aInput))
    console.log(getJoinedValues(aInput))

    function getJoinedValues(arr) {
        let arrJoin = arr.join('');
        return arrJoin;
    }

    function getInverseValues(arr) {
        let inverseValuesSum = 0;
        for (let a of arr) {
            inverseValuesSum += 1 / a;
        } return inverseValuesSum;
    }

    function sumA(arr) {
        let sumA = 0;

        for (let a of arr) {
            sumA += a;
        } return sumA;
    }
}

aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])

