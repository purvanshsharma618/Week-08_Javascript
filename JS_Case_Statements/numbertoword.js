// Function to convert a single-digit number to its word representation using switch-case
function numberToWord(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid input: Please enter a single-digit number.";
    }
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Output the result
console.log("Number in words:", numberToWord(num));
