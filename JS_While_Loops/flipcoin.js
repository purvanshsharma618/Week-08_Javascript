const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to simulate coin flips until either Heads or Tails wins 11 times
function flipCoinGame() {
    let headsCount = 0;
    let tailsCount = 0;
    
    while (headsCount < 11 && tailsCount < 11) {
        let flip = Math.random() < 0.5 ? "Heads" : "Tails";
        console.log("Flip result: " + flip);
        
        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }
    }
    
    console.log((headsCount === 11 ? "Heads" : "Tails") + " wins the game!");
    readline.close();
}

console.log("Starting the coin flip game...");
flipCoinGame();
