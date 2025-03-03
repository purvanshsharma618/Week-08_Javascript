function generateBirthMonths() {
    // Dictionary to store individuals grouped by birth month
    let birthMonths = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] };
    
    for (let i = 1; i <= 50; i++) {
        let month = Math.floor(Math.random() * 12) + 1; // Generate a random birth month (1-12)
        birthMonths[month].push(`Person ${i}`); // Store the person in the corresponding month
    }
    
    // Print the individuals grouped by birth month
    console.log("Individuals grouped by birth month:");
    for (let month in birthMonths) {
        console.log(`Month ${month}: ${birthMonths[month].join(", ")}`);
    }
}

// Run the simulation
generateBirthMonths();
