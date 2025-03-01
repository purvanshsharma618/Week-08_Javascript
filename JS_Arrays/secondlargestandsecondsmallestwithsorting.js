// Function to generate a random 3-digit number
function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

// Generate 10 random 3-digit numbers and store them in an array
let numbers = Array.from({ length: 10 }, getRandomNumber);
console.log("Generated Numbers:", numbers);

// Sorting the array
numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);

// Finding second largest and second smallest using sorting
console.log("Second Smallest:", numbers[1], "Second Largest:", numbers[numbers.length - 2]);
