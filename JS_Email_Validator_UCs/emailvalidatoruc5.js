function validateEmail(email) {
    const regex = /^abc([_\+\-\.]xyz)?@bridgelabz\.co(\.in)?(\.[a-zA-Z]{2})?$/;
    return regex.test(email);
}

// ✅ Valid Test Cases
console.log(validateEmail("abc@bridgelabz.co"));         //  True (Mandatory parts only)
console.log(validateEmail("abc@bridgelabz.co.in"));      //  True (Optional .in included)
console.log(validateEmail("abc.xyz@bridgelabz.co"));     //  True (xyz with . is allowed)
console.log(validateEmail("abc_xyz@bridgelabz.co.in"));  // True (xyz with _ is allowed)
console.log(validateEmail("abc-xyz@bridgelabz.co"));     //  True (xyz with - is allowed)
console.log(validateEmail("abc+xyz@bridgelabz.co.in"));  //  True (xyz with + is allowed)
console.log(validateEmail("abc.xyz@bridgelabz.co.uk"));  //  True (Optional TLD with 2 characters)
console.log(validateEmail("abc@bridgelabz.co.us"));      //  True (Optional TLD with 2 characters)
console.log(validateEmail("abc-xyz@bridgelabz.co.in.au"));//  True (Optional TLD .au added)

// ❌ Invalid Test Cases
console.log(validateEmail("abcxyz@bridgelabz.co.in"));   //  False (Missing special character before xyz)
console.log(validateEmail("abc@bridgelabz.com"));       //  False (Invalid domain)
console.log(validateEmail("abc.123@bridgelabz.co"));    //  False (Invalid characters before @)
console.log(validateEmail("abc_xyz@bridgelabz.org"));   //  False (Wrong domain)
console.log(validateEmail("xyz@bridgelabz.co.in"));     // False (Does not start with abc)
console.log(validateEmail("abc@bridgelabz.co.in.abc")); //  False (TLD should be exactly 2 characters)
console.log(validateEmail("abc@bridgelabz.co.i"));      // False (TLD should be exactly 2 characters)
