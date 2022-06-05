// You're tasked to create and print a JSON from a text table. You will receive input as an array of strings,
//  where each string represents a row of a table, with values on the row encompassed by pipes "|"
//  and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude".
//   The Latitude and Longitude columns will always contain valid numbers. Check the examples to get
//    a better understanding of your task.
// The input comes as an array of strings – the first string contains the table’s headings,
//  each next string is a row from the table.
// •	The output should be an array of objects wrapped in JSON.stringify().
// •	Latitude and Longitude must be parsed to numbers, and represented till the second digit
//  after the decimal point!

function towns(stringArray) {
  const townsArray = [];
  for (let n = 1; n < stringArray.length; n++) {
    let [_, town, latitude, longitude] = stringArray[n].split("|").map(element=>element.trim());
    latitude = (Math.round(Number(latitude)*100))/100;
    longitude = Math.round(Number(longitude)*100)/100;
    townsArray.push({'Town': town, 'Latitude': latitude, 'Longitude': longitude})
  } console.log(JSON.stringify(townsArray))
}

towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);

towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
);