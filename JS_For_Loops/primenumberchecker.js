// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

// Check if the input is a valid number
if (!isNaN(n) && n > 0) {
    console.log(n + " is " + (isPrime(n) ? "a Prime Number" : "not a Prime Number"));
} else {
    console.log("Invalid input: Please enter a positive integer.");
}
