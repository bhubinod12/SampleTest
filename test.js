console.log('This is for test purpose !!!');

// Swap two number without third variable

// let a = 5;
// let b = 10;

// a =  a+b;
// b = a-b;
// a = a-b;
// console.log('The value of a is ' + a);
// console.log('The value of a is ' + b);

// Find leap year.

let year = 2100;

if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log('The year is a leap year');
        } else {
            console.log('The year is not a leap year');
        }

    } else {
        console.log('The year is a leap year');
    }
} else {
    console.log('The year is not a leap year');
}


