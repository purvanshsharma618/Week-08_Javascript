// Function to simulate a coin flip
function coinFlip() {
    // Generate a random number: 0 or 1
    let result = Math.random() < 0.5 ? "Heads" : "Tails";
    return result;
}

// Output the result of the coin flip
console.log("Coin Flip Result:", coinFlip());
