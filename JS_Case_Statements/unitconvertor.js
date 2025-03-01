// Function to perform unit conversion using switch-case
function unitConversion(choice, value) {
    switch (choice) {
        case 1: return value + " Feet = " + (value * 12) + " Inches";
        case 2: return value + " Feet = " + (value * 0.3048).toFixed(2) + " Meters";
        case 3: return value + " Inches = " + (value / 12).toFixed(2) + " Feet";
        case 4: return value + " Meters = " + (value * 3.28084).toFixed(2) + " Feet";
        default: return "Invalid input: Please select a valid option (1-4).";
    }
}

// Get input from the command line arguments
const args = process.argv.slice(2);
const choice = parseInt(args[0], 10);
const value = parseFloat(args[1]);

// Output the result
console.log("Conversion Result:", unitConversion(choice, value));
