function validateEmail(email) {
    const regex = /^abc@bridgelabz\.co$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co")); // true
console.log(validateEmail("abc@bridgelabzcom")); // false (missing dot)
console.log(validateEmail("abc@bridgelabz.org")); // false (wrong domain)
console.log(validateEmail("xyz@bridgelabz.co")); // false (wrong start)
console.log(validateEmail("abc@xyz.co")); // false (wrong domain)
console.log(validateEmail("abc@bridgelabz.co.in")); // false (extra part not yet handled)
