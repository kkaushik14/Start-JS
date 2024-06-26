//***********************************Number**************************************************
const score = 500
// console.log(score);   //take it directly as number

const balance = new Number(400)
// console.log(balance);   //take it with number

// console.log(balance.toString());  //it will convert into string
// console.log(balance.toString().length);  //it is a string so it we can use string function

// console.log(balance.toFixed(2));  //this will add after decimal number. we can say that it will show only precision value how much we want to show.


const otherNumber = 458.2252565
// console.log(otherNumber.toPrecision(4));  //to get the precise and desired digits

const sep = 1256987
// console.log(sep.toLocaleString('en-in'));  //it will seprate num and make it easy to read. 'en-in' stands for indian num sys.


//******************************************Maths********************************************
// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //this will give number between 0-1
console.log((Math.random()*10) + 1);   //this will give number between 0-9
console.log(Math.floor(Math.random()*10));  //this will give number between 0-9 but in roundoff (this can be '0')
console.log(Math.floor(Math.random()*10) + 1);  //this will give number between 1-9 but in roundoff with +1

const min = 20
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min);