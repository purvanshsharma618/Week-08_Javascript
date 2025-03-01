const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert temperature
function convertTemperature(choice, temp) {
    switch (choice) {
        case "1": // Celsius to Fahrenheit
            if (temp >= 0 && temp <= 100) {
                return (temp * 9/5) + 32 + " °F";
            } else {
                return "Invalid input: Temperature must be between 0°C and 100°C";
            }
        case "2": // Fahrenheit to Celsius
            if (temp >= 32 && temp <= 212) {
                return ((temp - 32) * 5/9) + " °C";
            } else {
                return "Invalid input: Temperature must be between 32°F and 212°F";
            }
        default:
            return "Invalid choice. Please enter 1 for °C to °F or 2 for °F to °C.";
    }
}

// Get input from the user
readline.question("Choose conversion: 1 for °C to °F, 2 for °F to °C: ", (choice) => {
    readline.question("Enter temperature: ", (temp) => {
        const result = convertTemperature(choice, parseFloat(temp));
        console.log("Converted Temperature: ", result);
        readline.close();
    });
});
