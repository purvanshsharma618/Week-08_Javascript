function validateEmail(email) {
    const regex = /^abc@bridgelabz\.co$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co")); // true
console.log(validateEmail("xyz@bridgelabz.co")); // false
console.log(validateEmail("abc.xyz@bridgelabz.co")); // false
console.log(validateEmail("abc@bridgelabz.com")); // false
console.log(validateEmail("abc@bridgelabz.co.in")); // false
