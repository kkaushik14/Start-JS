//*********************************Stack (Primitive)*****************************************

let myName = "kumar"
let mySecName = myName

mySecName = "kaushik"
// console.log(myName)
// console.log(mySecName)
//Whatever we declared, we get copy of that so copy will change original file remain same.



//*****************************Heap(Non-Premitive)*******************************************

let userOne = {
    firstName: "Kumar",
    lastName: "Kaushik"
}

let userTwo = userOne
userTwo.firstName = "Hello"

console.log(userOne.firstName)
console.log(userTwo.firstName)
//Whatever we delared, we get reference of the original valure so whatever we change here it will get changed in original value.