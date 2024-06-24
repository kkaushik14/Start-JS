//*************************************Primitive*********************************************
//Data we get as copy.
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;
let secUserEmail = undefined
// both line:11 & 12 are undifined, no matter how will we write. Both are correct.


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
// In JS, symbols are unique and immutable data types that are often used to create unique property keys for objects. Each time we create a symbol using the Symbol() function, even if we pass the same description, a new and unique symbol is created.


const bigNumber = 3456543576654356754n



//*****************************Reference (Non primitive)*************************************
//Data we get as reference.
// Array, Objects, Functions

const heros = ["shaktiman", "superman", "salesman"];
let myObj = {
    name: "kaushik",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//In JS we no need to define type of the language, so it is a DYNAMICALLY typed language.