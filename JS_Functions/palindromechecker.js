const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if a number is a palindrome
function isPalindrome(num) {
    let strNum = num.toString();
    let reversedNum = strNum.split('').reverse().join('');
    return strNum === reversedNum;
}

// Get input from the user
readline.question("Enter first number: ", (num1) => {
    readline.question("Enter second number: ", (num2) => {
        console.log(`Is ${num1} a palindrome? `, isPalindrome(num1));
        console.log(`Is ${num2} a palindrome? `, isPalindrome(num2));
        readline.close();
    });
});
