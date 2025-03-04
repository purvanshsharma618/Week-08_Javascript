function validatePinCode(pin) {
    const regex = /^[1-9][0-9]{5}$/;
    return regex.test(pin);
}

// ✅ Valid Test Cases
console.log(validatePinCode("400088")); // ✅ True (Valid PIN code)
console.log(validatePinCode("110001")); // ✅ True (Valid PIN code)

// ❌ Invalid Test Cases
console.log(validatePinCode("40088"));  // ❌ False (Less than 6 digits)
console.log(validatePinCode("040088")); // ❌ False (Cannot start with 0)
console.log(validatePinCode("4000889"));// ❌ False (More than 6 digits)
console.log(validatePinCode("40A088")); // ❌ False (Contains a letter)
console.log(validatePinCode("4000-88"));// ❌ False (Contains special character)
console.log(validatePinCode("400 088"));// ❌ False (Contains space)
