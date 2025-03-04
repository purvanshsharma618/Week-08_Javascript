function validatePinCode(pin) {
    const regex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;
    return regex.test(pin);
}

// Valid Test Cases
console.log(validatePinCode("400088"));  // True (Valid PIN code)
console.log(validatePinCode("400 088")); // True (Valid with a space)
console.log(validatePinCode("110001"));  // True (Valid PIN code)
console.log(validatePinCode("110 001")); // True (Valid with a space)

// Invalid Test Cases
console.log(validatePinCode("4000-88"));  // False (Contains special character)
console.log(validatePinCode("400  088")); // False (Multiple spaces)
console.log(validatePinCode("400 088 ")); // False (Trailing space)
console.log(validatePinCode("400 0 88")); // False (Multiple spaces in between)
