// Function to check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Function to print prime numbers in a given range
function printPrimesInRange(start, end) {
    console.log("Prime numbers between " + start + " and " + end + ":");
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const start = parseInt(args[0], 10);
const end = parseInt(args[1], 10);

// Check if the inputs are valid numbers
if (!isNaN(start) && !isNaN(end) && start > 0 && end >= start) {
    printPrimesInRange(start, end);
} else {
    console.log("Invalid input: Please enter a valid range of positive integers.");
}
