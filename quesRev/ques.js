// JS Foundation ->
// Task 1:

// Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
function strToNum(strInput) {
    const number =  Number(strInput);
    return isNaN(number) ? "Not a number" : number;
}
let stringToNumber = strToNum("23jkj");
// console.log(stringToNumber);




// Task 2:

// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBoolean(boolInput) {
    const bool = boolInput;
    return !bool;
}
let input = flipBoolean(0);
// console.log(input);



// Task 3:

// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
// method -> 1
function whatAmI(input) {
    const type = Number(input);
    return isNaN(type) ? `${input}, I'm a string!` : `${type}, I'm a number!;`
}
let m1TypeConversionOne = whatAmI("24");
let m1TypeConversionTwo = whatAmI(24);
let m1TypeConversionThree = whatAmI("24Aug");

// console.log(typeConversionOne);
// console.log(typeConversionTwo);
// console.log(typeConversionThree);

// method -> 2
function whatAmIAgain(inputAgain) {
    if(typeof inputAgain === "number") {
        return `${inputAgain}, I'm a number!`
    } else if(typeof inputAgain === "string") {
        return `${inputAgain}, I'm a string!`
    } else {
        return `Kya hai bhootni hai.... sahi se input toh de lee`
    }
}
let m2TypeConversionOne = whatAmIAgain(24);
let m2TypeConversionTwo = whatAmIAgain("24Aug");

// console.log(m2TypeConversionOne);
// console.log(m2TypeConversionTwo);




// Task 4:

// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
function isItTruthy(checkInput) {
    return checkInput ? "It's truthy!" : "It's falsey!";
}
let truthyfalsy = isItTruthy("");
// console.log(truthyfalsy);

/*
In JavaScript, when a value is evaluated in a boolean context, certain values are considered falsy:-
* false
* 0
* "" (empty string)
* null
* undefined
* NaN
Any value not in the list above is considered truthy.

*/



/*Task 5:

Perform the following mathematical operations
on the provided variables a and b

Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder*/
let a = 24;
let b = 27;
function add() {
    return a + b;   
}
function subtract() {
    return b - a;
}
function multiply() {
    return a * b;
}
function divide() {
    return b / a;
}
function inc() {
    a++;
    return a;
}
function dec() {
    b--;
    return b;
}
function rem() {
    return b % a;
}
let mathsOps = rem();
// console.log(mathsOps);



// Arrays and Methods ->
// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:
// Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
   const numbers = arr.filter(values => typeof values === "number");
   console.log(numbers);
}
// filterNumbers(["23", 34, 45, "45ff"])



// Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
    let reversearr =  arr.reverse();
    console.log(reversearr);
}
// c


// Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array
function findMax(arr) {
    const maxNum = Math.max(...arr);
    console.log(maxNum);
}
// findMax([23, 34, 45, 32]);

// Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
let removed = removeDuplicates([23, 34, 332, 23, 24]);
// console.log(removed);




// Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array.
function flattenArray(arr) {
    return arr.flat(Infinity);
}
let flattenArr = flattenArray([1, 2, 4, 7, [5,3, 9, [10, 20, 24]]]);
// console.log(flattenArr);




// Loops ->
// Task 1: Sum of First N Natural Numbers
// Write a function sumOfN(n) that returns the sum of the first n natural numbers.
function sumOfN(n) {
    let sum = 0;
    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
let naturalNum = sumOfN(10);
// console.log(naturalNum);




// Task 2: Multiplication Table
// Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4.
function printMultiplicationTable(n) {
    let table = [];
    for(let l = 1; l <= 10; l++) {
        table.push(`${n} * ${l} = ${n * l}`);
    }
    return table;
}
// console.log(printMultiplicationTable(2));



// Task 3: Count Vowels in a String
// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0
    for (const checkVowel of str) {
        if (vowels.includes(checkVowel)) {;
            count++;
        } else {
            console.log("Vowel not found!!");
        }
    }
    return count;
}

// console.log(countVowels("Kaushik"));





// Higher-Order Functions and Arrow Functions ->
// All the following tasks must be strictly be writtern in arrow functions only.
// Task 1: Using Array Methods
// Write a function squareNumbers(arr) using map() and arrow functions only.
const squareNumbers = (arr) => arr.map(num => num * num);
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = squareNumbers(numbers)
// console.log(squaredNumbers);



// Task 2: Custom Filter Function
// Create a function filterEvenNumbers(arr) using filter() and arrow functions.
const filterEvenNumbers = (arr) => arr.filter((even) => even % 2 === 0);
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = filterEvenNumbers(number);
// console.log(evenNumber);


// Task 3: Sum of Positive Numbers
// Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions.
const sumPositiveNumbers = (arr) => arr.filter((num) => num > 0).reduce((sum, num) => sum + num);
const positiveNumber = [1, 2, 3, -5, 5, 4, 7, -8, 6];
const sumOfNumbers = sumPositiveNumbers(positiveNumber);
// console.log(sumOfNumbers);



// Task 4: Transform Array of Objects
// Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions.
const getNames = (arr) => arr.map((items) => items.name);
const giveNames = getNames([{
    name: "Kaushik",
    property: "CEO"
}]);
// console.log(giveNames);




// Task 5: Find the Longest Word
// Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function.
const findLongestWord = (arr) => arr.reduce((current, longest) => current.length > longest.length ? current : longest, "");
const longestWord = findLongestWord(["kumar", "kaushik", "CEO", "KKOS"]);
// console.log(longestWord);





// Nested Functions and Context
// Task 1: Using this in Objects
// Create an object person with a method introduce() that uses this,
// additionally add properties of name & age that will result in Hi, my name is Kaushik and I am 21 years old on calling introduce().
let personOne = {
    name:"Kaushik",
    age: 21,        
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
}
// console.log(personOne.introduce());

//additional(using constructor func with method) ->
function PersonTwo(name, age) {
    this.name = name;
    this.age = age;
}
PersonTwo.prototype.introduce = function() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
}
let persons = new PersonTwo("Kaushik", 21);
// console.log(persons.introduce());




// Task 2: Function within a function
// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer().
function outer() {
    function inner() {
        return `Inner function called!!`;
    }
    return inner();
}
console.log(outer());
