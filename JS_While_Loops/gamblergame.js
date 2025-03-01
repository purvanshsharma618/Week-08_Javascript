const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to simulate the gambler's game
function gamblerGame() {
    let money = 100;
    let goal = 200;
    let bets = 0;
    let wins = 0;

    while (money > 0 && money < goal) {
        bets++;
        let betResult = Math.random() < 0.5 ? -1 : 1; // 50% chance to win or lose
        money += betResult;
        
        if (betResult === 1) {
            wins++;
        }
    }

    console.log("Game Over!");
    console.log("Total Bets Made: " + bets);
    console.log("Total Wins: " + wins);
    console.log(money === 0 ? "Gambler went broke!" : "Gambler reached the goal!");
    readline.close();
}

console.log("Starting the gambler game...");
gamblerGame();
