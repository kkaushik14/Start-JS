/*
Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
function stringToNumber(input) {
    const number = Number(input);
    return isNaN(number) ? "Not a number" : number;
}
console.log(stringToNumber());

function checkNaN(check) {
    // return `this is my type: ${check}`
    if (isNaN(check)) {
        return "Not a number";
    } else {
        return check;
}
}

console.log(checkNaN(24+24));

Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBoolean(input) {
    return Boolean(input);
}

console.log(flipBoolean());

Task 3: Array Filtering-:
Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
    return arr.filter(item => typeof item === Number);
}

const filteredNumber = filterNumbers("asf",35, 43, "1332ab", "23", 7, 4, 34, 24);
console.log(filteredNumber);

Task 4: Array Reversal-:
Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([1, 3, 2, 5]));


Task 5: Sum of First N Natural Numbers-:
Write a function sumOfN(n) that returns the sum of the first n natural numbers
let sum = 0;
function naturalNumber(num) {
    for(let i = 0; i <= 10; i++) {
        sum += i;
    }
    return sum;
}
console.log(naturalNumber());


Task 6: Multiplication Table-:
Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
function printMultiplicationTable(n) {
    let table = [];
    for(let j = 2; j <= 10; j++) {
        table.push(`${n} * ${j} = ${n * j}`);
    }
    return table;
}
console.log(printMultiplicationTable(2));


Task 1: Using this in Objects-:
Create an object person with a method introduce() that uses this
additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()



*/
const person = {
    name: 'Kaushik',
    age: 21,
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old`;
    }
};

console.log(person);





// Task 2: Function within a function-:
// Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
   
  function outer() {
    function inner() {
      return 'Inner function called';
    }
    return inner();
  }

// console.log(typeof inner());
console.log(outer());
