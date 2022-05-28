// You will receive an array of names. Sort them alphabetically in ascending order and print a numbered list of all the names, 
// each on a new line.

function listOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b))
    for (let index = 0; index < arr.length; index++) {
        console.log(`${index + 1}.${arr[index]}`);        
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"])
