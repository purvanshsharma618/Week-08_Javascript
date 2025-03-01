// Function to convert a single-digit number to its word representation
function numberToWord(num) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    
    if (num >= 0 && num <= 9) {
        return words[num];
    } else {
        return "Invalid input: Please enter a single-digit number.";
    }
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Output the result
console.log("Number in words:", numberToWord(num));
