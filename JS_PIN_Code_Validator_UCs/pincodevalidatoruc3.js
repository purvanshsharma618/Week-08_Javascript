function validatePinCode(pin) {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pin);
}

// Valid Test Cases
console.log(validatePinCode("400088")); // True (Valid PIN code)
console.log(validatePinCode("110001")); // True (Valid PIN code)

// Invalid Test Cases
console.log(validatePinCode("A400088")); //  False (Starts with an alphabet)
console.log(validatePinCode("400088#")); //  False (Starts with a special character)
console.log(validatePinCode("400088B")); // False (End with an alphabet)
 
