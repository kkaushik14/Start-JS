// 1. -> Object litral
let indianStates = {
    Bihar: "Madhubani",
    Delhi: "Dashrathpuri",
    regions: function() {
        return `${this.Bihar} is the district in Bihar and as well ${this.Delhi} is city village in Delhi.`
    }
}
// "regions()" - this is a method 

// console.log(indianStates.regions());

// and the problem here is you can not make much copies here and that is solved by learning 'constructor function' below👇🏻


/* 2. Functional Constructor -> You can create as many copies as you want.
-> First letter of the function name is in "capital" that denotes, it is a "constructor function". */

function Brand(name, year) {
    this.name = name;
    this.year = year;
}
let apple = new Brand("Apple", 1976);

// console.log(apple);
// OR
// console.log(`${apple.name} is founded in year ${apple.year}.`);


// 3. -> Prototype and Prototypal chain
function Guy(type) {
    this.type = type;
}

Guy.prototype.kaushik = function() {
    return `${this.type} somethime, not smokee.`
}



Object.prototype.kk = function() {
    return `These are ciggrates brands ${this}`
}

let myObj = {
    American: "Marlboro"
};
// console.log(myObj.kk());

Array.prototype.kk = function() {
    return `These are Cigarettes brands ${this}`
}

let myArr = ["Marlboro"];

// console.log(myArr.kk());

//  -> this can be only done on "Array".


/* 4. -> classes a created in JS:-
-> the moment function goes inside the class it referd as method */
class Wiskey {
    constructor(brand, quantity) {
        this.brand = brand;
        this.quantity = quantity;
    }

    kaushik() {
        return `Kaushik drinks ${this.brand} having quantity of ${this.quantity}.`
    }
}
let setValue = new Wiskey("Marlboro", 20)

console.log(setValue);



// 5. -> Inheritance
class Cigarettes extends Wiskey {
    smoke() {
        return `Kaushik smokes after 6pegs of Wiskey brand ${this.brand}`;
    }
}

let mauhaul = new Cigarettes("Jim Beam", "750ml")
// console.log(mauhaul.kaushik());
// console.log(mauhaul.smoke()); 


/* 6. -> Encapsulation
-> I want to restrict the direct access to object data*/
class BankAccount {
    #balance = 0;

    deposite(amout) {
        this.#balance += amout;
        return this.#balance;
    }

    getBalance() {
        return `$${this.#balance}`
    }
}

let account = new BankAccount();
// console.log(account.getBalance());


/* 7. -> Abstraction
-> it hides the complex implementation details */
class CoffeeMachine {
    start() {
        // call DB
        // filtr value
        return `Starting the machine...`;
    }

    brewCoffee() {
        // complex calculation
        return `Brewing Coffee...`;
    }

    pressStartButton() {
        let msgOne = this.start()
        let msgTwo = this.brewCoffee();
        return `${msgOne} ${msgTwo}`;
    }
}

let myMAchine = new CoffeeMachine();
// console.log(myMAchine.pressStartButton());


/* 8. -> Polymorphism
-> It is the ability to perform a single action in multiple ways */
class Bird {
    fly() {
        return `flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `can't fly`;
    }
}

class Crow extends Bird {}

let bird = new Bird();
let nahiJanta = new Penguin();
let kala = new Crow();

// console.log(bird.fly());
// console.log(nahiJanta.fly());
// console.log(kala.fly());



/* 9. Static method 
-> It is a special method that can call only by class itself. Nobody else can call it.*/
class Calculator {
    static subs(a, b) {
        return a - b;
    }
}

// console.log(Calculator.subs(5, 2));


// 10. Getters and Setters
class Employee {
    constructor(name, salary) {
        if(salary < 0) {
            throw new Error("Cannot be in negative")
        }
        this.name = name;
        // the whole behiind the _salary is to get some Customization on that
        this._salary = salary;
    }

    get salary() {
        return `You are not allowed to see salary`;
    }

    set salary(value) {
        if(value < 0) {
             console.error("Invalid Salary")
        } else {
            this._salary = value;
        }
    }
}

let newEmployee = new Employee("Kaushik", 4000000)
// console.log(newEmployee._salary);
// console.log(newEmployee.name);
// console.log(newEmployee);
