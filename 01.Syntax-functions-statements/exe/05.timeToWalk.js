// Write a function that calculates how long it takes a student to get to university. 
// The function takes three numbers:
// •	The first is the number of steps the student takes from their home to the university
// •	Тhe second number is the length of the student's footprint in meters
// •	Тhe third number is the student speed in km/h
// Every 500 meters the student rests and takes a 1-minute break.
// Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
// The input comes as three numbers.
// The output should be printed on the console.

function getToUniversity(steps, footprintMeters, speedKmH) {
    let distanceMeters = steps * footprintMeters;
    let restMinutes = Math.floor(distanceMeters / 500);
    let speedMetersSecs = speedKmH * (1000 / 3600);
    let timeSecs = distanceMeters / speedMetersSecs + restMinutes * 60;

    let hours = Math.floor(timeSecs / 3600);
    let minutes = Math.floor(timeSecs / 60);
    let seconds = Math.round(timeSecs - minutes * 60);

    console.log(
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds
    )
}



getToUniversity(4000, 0.60, 5)
getToUniversity(2564, 0.70, 5.5)

