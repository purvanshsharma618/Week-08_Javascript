// Function to compute the prime factors of a number using prime factorization
function primeFactors(n) {
    if (n <= 1) return "Invalid input: Please enter an integer greater than 1.";
    
    let factors = [];
    
    // Divide by 2 until n is odd
    while (n % 2 === 0) {
        factors.push(2);
        n /= 2;
    }
    
    // Check for odd factors from 3 to sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    
    // If n is still a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }
    
    return factors;
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const n = parseInt(args[0], 10);

// Check if the input is a valid number
if (!isNaN(n) && n > 1) {
    console.log("Prime factors of " + n + " are: " + primeFactors(n).join(", "));
} else {
    console.log("Invalid input: Please enter an integer greater than 1.");
}
