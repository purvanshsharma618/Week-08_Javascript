// Function to display the weekday name using switch-case
function getWeekday(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input: Please enter a number between 1 and 7.";
    }
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Output the result
console.log("Weekday:", getWeekday(num));
