// Function to compute the factorial of a number
function factorial(n) {
    if (n < 0) return "Invalid input: Please enter a non-negative integer.";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

// Check if the input is a valid number
if (!isNaN(n) && n >= 0) {
    console.log(n + "! = " + factorial(n));
} else {
    console.log("Invalid input: Please enter a non-negative integer.");
}
