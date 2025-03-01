// Function to print the table of powers of 2 up to 2^n using for loop
function printPowersOfTwo(n) {
    console.log("Powers of 2 up to 2^" + n + ":");
    for (let i = 0; i <= n; i++) {
        console.log("2^" + i + " = " + Math.pow(2, i));
    }
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

// Check if the input is a valid number
if (!isNaN(n) && n >= 0) {
    printPowersOfTwo(n);
} else {
    console.log("Invalid input: Please enter a non-negative integer.");
}
