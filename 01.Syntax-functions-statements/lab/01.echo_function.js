// Write a JS function that takes one string parameter and prints on two lines the length of the parameter 
// and then the unchanged parameter itself.

function echo(stringInput) {
    let stringLength = stringInput.length;

    console.log(stringLength);
    console.log(stringInput);
}

echo('Hello, JavaScript!');
echo('strings are easy')