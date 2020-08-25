
// if else
function passwordValidation(passwordString) {
    if (passwordString.length > 7) {
        return "Strong";
    }
    else {
        return "Weak";
    }
}

console.log(passwordValidation("1111hght"));

// ternary

function passwordValidationTernary(passwordString) {
    let passwordStrength = passwordString.length > 7 ? "Strong" : "Weak";
    return passwordStrength;
}

console.log(passwordValidationTernary("7586"));

// abuse

function passwordValidationAbuse(passwordString) {
    return (passwordString.length > 7 && "Strong") || "Weak";
}

console.log(passwordValidationAbuse("dghy6tDD"));

//advance 

function advancedPasswordValidation(passwordString) {
    
    return passwordString.length > 7 && /[A-Z]/.test(passwordString) ? "Very Strong" 
    : passwordString.length > 7 ? "Strong" : "Weak";
}


console.log(advancedPasswordValidation("123hgT21"));
console.log(advancedPasswordValidation("123hgu26"));
console.log(advancedPasswordValidation("ftgJ7"));