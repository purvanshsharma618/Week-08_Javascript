// Function to generate a random 3-digit number
function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100;
}

// Generate 10 random 3-digit numbers and store them in an array
let numbers = Array.from({ length: 10 }, getRandomNumber);
console.log("Generated Numbers:", numbers);

// Function to find the 2nd largest and 2nd smallest without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbers);
console.log(`Second Largest: ${secondLargest}, Second Smallest: ${secondSmallest}`);
