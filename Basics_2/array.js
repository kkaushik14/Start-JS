const myArray = [0, 9, 5, 7, 3, 1, 6]
const superHeros = ["superman","spiderman","batman"]

const myArray2 = new Array(0, 1, 8, 4)
// console.log(myArray[2]);


// Methods:-
// myArray.push(6)  //add number after 
// myArray.push(10)
// myArray.pop()  //remove num from last

// myArray.unshift(14)  //add num in starting
// myArray.shift()  //remove num from starting 

// console.log(myArray);

// console.log(myArray.includes(12)); //check whether element is present or not then give result as boolean.

// console.log(myArray.indexOf(5));  //tell index as usual

// const newArray = myArray.join()  //convert array into string
// console.log(myArray);
// console.log(newArray);


//slice & splice         -:const myArray = [0, 9, 5, 7, 3, 1, 6]
console.log("A", myArray);

const myNum1 = myArray.slice(1, 3)  //same initial array just take the values
console.log(myNum1);
console.log("B", myArray);

const myNum2 = myArray.splice(1, 3)  //manipulate the array andd take array outside
console.log(myNum2);
console.log("C", myArray);