// Function to perform arithmetic operations and find max/min
function findMaxMin(a, b, c) {
    let results = {
        "a + b * c": a + b * c,
        "a % b + c": a % b + c,
        "c + a / b": c + a / b,
        "a * b + c": a * b + c
    };
    
    let values = Object.values(results);
    let max = Math.max(...values);
    let min = Math.min(...values);
    
    console.log("Results:", results);
    console.log("Maximum Value:", max);
    console.log("Minimum Value:", min);
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);

// Perform operations and find max/min
findMaxMin(a, b, c);
