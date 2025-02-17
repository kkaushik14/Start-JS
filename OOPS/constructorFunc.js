// 1.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// This constructor function ("function name") may be converted to a class declaration.

function Car(owner, model) {
    this.owner = owner;
    this.model = model;
}

// Object.setPrototypeOf(Car, Person); -> trial
// href= "OOPS/assets/OOPS/assets/Screenshot 2025-02-08 at 3.15.42 AM.png"

let newPerson = new Person("Kaushik", "23");
let newCar = new Car("Kaushik", "BMW Series 10");

// console.log(newPerson, newCar);


// 2.
// function Beer(types) {
//     this.types = types;
//     this.describe = function() {
//         return `My choice of beer is ${this.types}`;
//     }
// }
// let beerType = new Beer("Budwiser Magnunm")
// console.log(beerType.describe());



// 3.
// Constructor function && Prototype
function Animal(species) {
    this.species = species;
}
Animal.prototype.sound = function() {
    return `${this.species} makes a sound`
}
//new -> it creates a new object
let dog = new Animal("Dog")
// console.log(dog.sound());
let cat = new Animal("Cat")
// console.log(cat.sound());


// 4.
// Error functional constructor
function Beer(name) {
    if(!new.target) {
        throw new Error("Beer must be called with 'new' keyword");
    }
    this.name = name;
}

let beerName1 = new Beer("Budwiser Magnum");
let beerName2 = Beer("Bro Code");