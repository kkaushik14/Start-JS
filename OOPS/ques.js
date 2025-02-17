/*
Task:1. Prototype Chaining

Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal.
*/
//sol ->
function Animal() {
}

Animal.prototype.speak = function() {
    return `Animal speaking`;
};

function Dog() {
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
    return `Woof!`;
};

Dog.prototype.constructor = Dog;


/*
Task 2.1: Create a Functional Constructor

Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".


Task 2.2: Handle Errors

Modify the Person constructor to throw an error if the age is not a positive number.
*/
// sol -> 
function Person(name, age) {
    if(age < 0) {
        throw new Error("Age must be a positive number");
    }
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};
// OR
function Person(name, age) {
    if (age <= 0) {
      throw new Error('Age must be a positive number');
    }
   
    this.name = name;
    this.age = age;
   
    this.greet = function() {
      return `Hello, my name is ${this.name}`;
    };
  }


/* 
Task 3.1: Class Inheritance
Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

Task 3.2: Method Overriding in Inheritance
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".

Task 3.3: Static Methods in Classes
Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/
// sol ->
class Vehicle {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    
    getDetails() {
        return `Make:${this.make}, Model:${this.model}`;
    }
    
    move() {
        return `The vehicle is moving`;
    }
    
    static isVehicle(obj) {
        return obj instanceof Vehicle;
    }
  }
  
  class Car extends Vehicle {
      startEngine() {
          return `Engine started`;
      }
      
      move() {
        return `The car is driving`;
    }
  }

  let values = new Vehicle("BMW", "Series 10")
  let setCar = new Car();

  // console.log(setCar.move());
  // console.log(values.getDetails());



/*
Task 4.1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.

Task 4.2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively. 
*/

// sol ->
// Task 1
class BankAccount {
  constructor(balance) {
    if (balance < 0) {
      throw new Error("Balance is not accessible to you");
    }
    this._balance = balance;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
    return amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
    return amount;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    console.error("Balance cannot be negative");
  }
}
let callValue = new BankAccount();
console.log(callValue);



// Task 2
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}