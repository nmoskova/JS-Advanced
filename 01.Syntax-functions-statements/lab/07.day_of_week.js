//Write a function that prints a number between 1 and 7 when a day of the week is passed 
// to it as a string and an error message if the string is not recognized.

function dayOfWeek(inputDay) {
    let day;

    if (inputDay == 'Monday' || inputDay == 'Tuesday' || inputDay == 'Wednesday' ||
        inputDay == 'Thursday' || inputDay == 'Friday' || inputDay == 'Saturday' || inputDay == 'Sunday') {

        switch (inputDay) {
            case 'Monday': day = 1; break;
            case 'Tuesday': day = 2; break;
            case 'Wednesday': day = 3; break;
            case 'Thursday': day = 4; break;
            case 'Friday': day = 5; break;
            case 'Saturday': day = 6; break;
            case 'Sunday': day = 7; break;
        }
    } else {
        day = 'error'
    }
    console.log(day)
}

dayOfWeek('Monday')
dayOfWeek('Tuesday')
dayOfWeek('Wednesday')
dayOfWeek('Thursday')
dayOfWeek('Friday')
dayOfWeek('Saturday')
dayOfWeek('Sunday')
dayOfWeek(5)
dayOfWeek(true)