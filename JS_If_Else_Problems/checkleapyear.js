function isLeapYear(year) {
    if (year >= 1000 && year <= 9999) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            return "Leap Year";
        } else {
            return "Not a Leap Year";
        }
    } else {
        return "Invalid input: Please enter a 4-digit year.";
    }
}

const args = process.argv.slice(2);
const year = parseInt(args[0], 10);

console.log(isLeapYear(year));
