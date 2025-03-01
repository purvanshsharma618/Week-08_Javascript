// Function to display unit, ten, hundred, etc.
function getPlaceValue(num) {
    const placeValues = {
        1: "Unit",
        10: "Ten",
        100: "Hundred",
        1000: "Thousand",
        10000: "Ten Thousand",
        100000: "Lakh",
        1000000: "Ten Lakh",
        10000000: "Crore",
        100000000: "Ten Crore"
    };
    
    return placeValues[num] || "Invalid input: Please enter a valid place value (1, 10, 100, 1000, etc.).";
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const num = parseInt(args[0], 10);

// Output the result
console.log("Place Value:", getPlaceValue(num));
