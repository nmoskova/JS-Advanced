// Write a JavaScript function to get the number of days in a month.
// The input comes as two numeric parameters. The first element is the month, the second is the year.
// The output must return the number of days in a month for a given year.

function getDaysInAMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInAMonth(1, 2012))
console.log(getDaysInAMonth(9, 2021))
console.log(getDaysInAMonth(2, 2021))
