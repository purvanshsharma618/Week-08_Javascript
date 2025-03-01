// Function to find numbers with repeated digits in the range 0-100
function findRepeatedDigitNumbers() {
    let repeatedNumbers = [];
    
    for (let i = 10; i < 100; i++) {
        let tens = Math.floor(i / 10);
        let units = i % 10;
        
        if (tens === units) {
            repeatedNumbers.push(i);
        }
    }
    
    return repeatedNumbers;
}

// Get numbers and print
let result = findRepeatedDigitNumbers();
console.log("Numbers with repeated digits:", result);
