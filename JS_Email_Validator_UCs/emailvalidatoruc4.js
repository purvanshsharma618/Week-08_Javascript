function validateEmail(email) {
    const regex = /^abc([_\+\-\.]xyz)?@bridgelabz\.co(\.in)?$/;
    return regex.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co"));         //  True (Mandatory parts only)
console.log(validateEmail("abc@bridgelabz.co.in"));      //  True (Optional '.in' included)
console.log(validateEmail("abc.xyz@bridgelabz.co"));     //  True (xyz with . is allowed)
console.log(validateEmail("abc_xyz@bridgelabz.co.in"));  //  True (xyz with _ is allowed)
console.log(validateEmail("abc-xyz@bridgelabz.co"));     //  True (xyz with - is allowed)
console.log(validateEmail("abc+xyz@bridgelabz.co.in"));  //  True (xyz with + is allowed)

console.log(validateEmail("abcxyz@bridgelabz.co.in"));   //  False (Missing special character before xyz)
console.log(validateEmail("abc@bridgelabz.com"));       //  False (Invalid domain)
console.log(validateEmail("abc.123@bridgelabz.co"));    //  False (Invalid characters before @)
console.log(validateEmail("abc_xyz@bridgelabz.org"));   //  False (Wrong domain)
console.log(validateEmail("xyz@bridgelabz.co.in"));     //  False (Does not start with abc)
