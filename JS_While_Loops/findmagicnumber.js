const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the magic number using binary search
function findMagicNumber(low, high) {
    if (low >= high) {
        console.log("Your magic number is: " + low);
        readline.close();
        return;
    }
    
    let mid = Math.floor((low + high) / 2);
    readline.question("Is your number less than or equal to " + mid + "? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
            findMagicNumber(low, mid);
        } else {
            findMagicNumber(mid + 1, high);
        }
    });
}

console.log("Think of a number between 1 and 100");
findMagicNumber(1, 100);
