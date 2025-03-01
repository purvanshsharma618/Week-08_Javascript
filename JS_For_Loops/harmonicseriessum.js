// Function to calculate the nth harmonic number
function harmonicNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += 1 / i;
    }
    return sum;
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

// Check if the input is a valid number
if (!isNaN(n) && n > 0) {
    console.log("The " + n + "th Harmonic Number is: " + harmonicNumber(n));
} else {
    console.log("Invalid input: Please enter a positive integer.");
}
