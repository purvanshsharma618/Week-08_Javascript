function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulateDieRolls() {
    let rollCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    
    while (Math.max(...Object.values(rollCounts)) < 10) {
        let roll = rollDie();
        rollCounts[roll]++;
    }
    
    let maxRolled = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] > rollCounts[b] ? a : b);
    let minRolled = Object.keys(rollCounts).reduce((a, b) => rollCounts[a] < rollCounts[b] ? a : b);
    
    console.log("Final Roll Counts:", rollCounts);
    console.log(`Number that reached maximum times: ${maxRolled} (${rollCounts[maxRolled]} times)`);
    console.log(`Number that reached minimum times: ${minRolled} (${rollCounts[minRolled]} times)`);
}

// Run the simulation
simulateDieRolls();
