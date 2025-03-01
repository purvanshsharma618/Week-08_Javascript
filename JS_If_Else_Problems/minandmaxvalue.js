function getRandomThreeDigitNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

function findMinMax() {
    let numbers = [];
    
    // Generate 5 random three-digit numbers (100 to 999)
    for (let i = 0; i < 5; i++) {
        numbers.push(getRandomThreeDigitNumber());
    }
    
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    
    // Output the numbers, min, and max
    console.log("Generated numbers:", numbers);
    console.log("Minimum value:", min);
    console.log("Maximum value:", max);
}

findMinMax();
