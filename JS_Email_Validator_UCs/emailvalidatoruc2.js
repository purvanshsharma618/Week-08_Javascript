function validateEmail(email) {
    const regex = /^abc@bridgelabz$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz")); // true
console.log(validateEmail("abc@xyz")); // false
console.log(validateEmail("abc@bridgelabz.com")); // false
console.log(validateEmail("xyz@bridgelabz")); // false
console.log(validateEmail("abc123@bridgelabz")); // false
