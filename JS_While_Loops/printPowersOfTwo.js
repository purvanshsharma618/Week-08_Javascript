// Function to print the table of powers of 2 up to 2^n or until 256 is reached using while loop
function printPowersOfTwo(n) {
    let i = 0;
    let power = 1;
    console.log("Powers of 2 up to 2^" + n + " or until 256:");
    
    while (i <= n && power <= 256) {
        console.log("2^" + i + " = " + power);
        power *= 2;
        i++;
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
