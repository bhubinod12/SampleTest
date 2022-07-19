
(function() {
    console.log('Hiiiiiii This is VSC')
})();
// add = (function() {
//     let count = 0;
//         return function() {
//             count++; return count;
//         }
// })();

// let promise1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Hello");
//     },4000)
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("World");
//     }, 6000)
// });
// let giveMePromise = async () => {
//     for (let promise of [promise1, promise2]) {
//         try {
//             const message = await promise;
//             console.log(message);
//         } catch(err){
//             console.log(err.message);
//         }
//     }
// }
// giveMePromise();

// let multiply = function(x,y){
//     console.log(x*y);
// }
// const multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(3);
// multiplyByTwo(5);

// // Pure function does not depends on outside value.
// function pure(prodCost){
//     let calculate = prodCost*10;
//     console.log(calculate);
// }
// pure(100);
// // UnPure function since this function outside the value tax also.
// let tax = 80;
// function UnPure(prodCost){
//     let calculate = tax*prodCost*10;
//     console.log(calculate);
// }
// UnPure(100);
// Copy Object

// Higher order function start.
/*const radius = [3,2];
const Area = (radius) => {
    return Math.PI*radius*radius;
}
const circumference = (radius) => {
    return 2**radius;
}
const diaMeter = (radius) => {
    return 2*Math.PI*radius;
}
const calculate = (radius, logic) => {
    const outPut = [];
    for (let i = 0; i< radius.length; i++) {
        outPut.push(logic(radius[i]));
    }
    return outPut;
}

console.log(calculate(radius, Area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diaMeter));
Higher order function End.
*/


// Form Validation:

const form = document.getElementById('form');
const fcontrol = document.getElementById('form-control');
const username = document.getElementById('username');
const Email = document.getElementById('Email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validation();
});

// Email Validation
const isEmail = (EmailVal) => {
    var atSymbol = EmailVal.indexOf('@');
    var dotPos = EmailVal.lastIndexOf('.');
    if (atSymbol < 1) {
        setErrorMsg(EmailVal, 'Invalid emaild id');
        return false;
    } else if (dotPos < atSymbol +2) {
        setErrorMsg(EmailVal, 'Invalid email id');
        return false;
    } else if (dotPos === EmailVal.length -1) {
        setErrorMsg(EmailVal, 'Invalid email id');
        return false;
    } else {
        return true;
    }

    return true;
}
// Validation Success
const validationSuccess = (userData) => {
    console.log(userData);
    location.href = "demo.html"
}

const validation = () => {
    const usernameVal = username.value.trim();
    const EmailVal = Email.value.trim();
    const phonenumberVal = phonenumber.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();

    const userProfile = {}
    // UserName Validation
    if (usernameVal === '') {
        setErrorMsg(usernameVal, 'User can not be empty');
        return;

    } else if(usernameVal.length <= 3) {
        setErrorMsg(usernameVal, 'User Name length can not be less than 4 char');
        return;
    } else {
        setSuccessMsg(usernameVal);
        userProfile.userName = usernameVal;
    }
    // Email Id Validation
    if (EmailVal === '') {
        setErrorMsg(EmailVal, 'Email id can not be empty');
        return;
        
    } else if (!isEmail(EmailVal)) {
        setErrorMsg(EmailVal, 'Not a valid email');
        return;
    } else {
        setSuccessMsg(EmailVal);
        userProfile.emailId = EmailVal;
    }
    // Phone number Validation
    if (phonenumberVal == '') {
        setErrorMsg(phonenumberVal, 'Phone number should not be empty');
        return;
    }
    else if (phonenumberVal.length !== 10) {
        setErrorMsg(phonenumberVal, 'Phone number not proper');
        return;
    } else {
        setSuccessMsg(phonenumberVal);
        userProfile.phoneNumber = phonenumberVal;
    }
    // Password validation
    if (passwordVal == '') {
        setErrorMsg(passwordVal, 'password should not be empty');
        return;
    }
    else if (passwordVal.length < 5) {
        setErrorMsg(passwordVal, 'password length should not be less than 5');
        return;
    } else {
        setSuccessMsg(passwordVal);
    }
    // Confirm Password validation
    if (cpasswordVal == '') {
        setErrorMsg(cpasswordVal, 'Confirm password should not be empty');
        return;
    }
    else if (cpasswordVal !== passwordVal) {
        setErrorMsg(cpasswordVal, 'Password are not matching');
        return;
    } else {
        setSuccessMsg(cpasswordVal);
        userProfile.password = cpasswordVal;
    }

    validationSuccess(userProfile);
}
const setErrorMsg = (input, msg) => {
    // const formContrl = input.parentElement;
    // formContrl.classList.add('error');
    
    alert(input + " " + msg);
    return true;
}
const setSuccessMsg = () => {
    // const fcontrol = document.getElementById('form-control');
    // fcontrol.classList.add('success');
    return false;
}

// Test

let a =12;
let b = '12'
if (a ===b) {
    var c = a +b;
}
console.log('Value of C is = ' + c);

const script = document.createElement("script");
script.src = 'http://your-script.js';
script.async = true;
// document.body.appendChild(script);




