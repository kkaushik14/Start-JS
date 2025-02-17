// object
// let obj = {};
//const can also be used,  here it fixed the memory space still we can change the internal primitive data.
const username = {
    'first name': "Kumar",
    lastName: "Kaushik",
    isLoggedin: true,
};

username ['first name'] = "Kaushik";
username.lastName = "Kumar";

// console.log(username ['first name']);
// console.log(username);

let today = new Date();
// console.log(today.getMonth());


// Array
let heros = ['A', 'B', 'C'];
// console.log(heros[1]);


// Type conversion
// i. Implicit Conversion
// i. Explicit Conversion
let isValue = "3hash";
console.log(isValue + 1);  // 3hash1
console.log(Number(isValue));  // NaN -> Not a Number
console.log(typeof Number(isValue));  //Number