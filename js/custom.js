console.log(`Hey this is custom js file`);
/* 1Find unique number frmom the array*/
// [2,1,2,5,3,5,3]

// *Method 1 -> Using Set method
/* const array = [2,1,2,5,3,5,3];

const uniqueArr = new Set(array);
console.log([...uniqueArr]);*/

/*Method 2 -> using filter method*/

/*const array = [2,1,2,5,3,5,3];

const filteredArr = array.filter((ele, index, arr) => {
    return arr.indexOf(ele) === index;
});
console.log(filteredArr);*/

/*Method 3 -> using for loop*/

/* const array = [2,1,2,5,3,5,3];
const newArr = [];
    for (let i = 0; i < array.length; i ++) {
    if (array.indexOf(array[i]) === i) {
        newArr.push(array[i]);
    }
}
console.log(newArr);*/

/*2. Find the frequency of elements in array*/

// Using for loop
/*let arr = ["hello", "world", "java", "hello", "java"];

const count = {};
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (count[num]) {
        count[num] ++;
    } else {
        count[num] = 1;
    }
}
console.log(count);*/

// Using reduce method

/*let arr = ["hello", "world", "java", "hello", "java"];

const newArr = arr.reduce((allName, name) => {
    if (allName[name]) {
        allName[name] ++;
    } else {
        allName[name] = 1;
    }

    return allName;
}, {});
console.log(newArr);*/

// Recursion
// Program to count down numbers to 1.
/*const countDown = (a) => {
    console.log(`This is recursion method ${a}`);
    a = a - 1;
    if (a > 0) {
        countDown(a);
    } else {
        return;
    }
}

countDown(4);*/

// Find prime numnber of the givne number.
/*let fact = 1;
const factorial = (n) => {
    for (let i =1; i <= n; i++) {
        fact = fact*i;
    }
    return fact;
}

console.log(factorial(4));*/

// Using recursion.

/*const factorial = (n) => {
    if (n > 1) {
        return n*factorial(n-1);
    } else {
        return 1;
    }
}
let fact = factorial(5);
console.log(fact);*/

// Array flatten
const array = [1, 1, [2, 2], [[3, [4], 3], 2]];

console.log(array.flat(Infinity));







