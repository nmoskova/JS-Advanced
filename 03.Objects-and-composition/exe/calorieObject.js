// Write a function that composes an object by given properties. The input comes as an array of strings.
// Every even index of the array represents the name of the food. Every odd index is a number
//  that is equal to the calories in 100 grams of the given product.
//  Assign each value to its corresponding property, and finally print the object.
// The input comes as an array of string elements.
// The output should be printed on the console.
function calorieObject(arr) {
  const caloriesObject = {};
  for (let index = 0; index < arr.length; index += 2) {
    let food = arr[index];
    let calories = Number(arr[index + 1]);
    caloriesObject[food] = calories;
  }
  return console.log(caloriesObject);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
