// Number

let balance = 120;
let anotherBal = new Number(120);

// console.log(balance);
// console.log(anotherBal.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBal);

let islogged = true;
let isReallyLoged = new Boolean(true);

// console.log(typeof islogged);
// console.log(typeof isReallyLoged);   //nor recommended


// Undefines

let firstname;
let lastname = null;
// console.log(firstname);
// console.log(lastname);


// String
let myString = "KK";
let mySecString = 'OS';

let newString = myString + mySecString;
// console.log(newString);

let newWay = `Kaushik owned ${myString + mySecString}`;
// console.log(newWay);


// Symbol
let sml1 = Symbol("Kaushik");
let sml2 = Symbol("Kaushik");

console.log(sml1 == sml2);
console.log(typeof sml1);
console.log(typeof sml2);
