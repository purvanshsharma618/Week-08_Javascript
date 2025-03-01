// Function to get the weekday name from a number (1-7)
function getWeekday(num) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    if (num >= 1 && num <= 7) {
        return weekdays[num - 1];
    } else {
        return "Invalid input: Please enter a number between 1 and 7.";
    }
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Output the result
console.log("Weekday:", getWeekday(num));
