// -> Here I run codes which give ERROR initially.... and after success i just comment it out
/*
// 1. -> Inheritance example
class Wiskey {
    constructor(brand, quantity) {
        this.brand = brand;
        this.quantity = quantity;
    }
    
    kaushik() {
        return `Kaushik drinks ${this.brand} having quantity of ${this.quantity}.`
    }
}

class Cigarettes extends Wiskey {
    smoke() {
        return `Kaushik smokes after 6pegs of Wiskey brand ${this.brand}`;
    }
}

let mauhaul = new Cigarettes("Jim Beam", "750ml");
console.log(mauhaul.kaushik());
console.log(mauhaul.smoke());

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

// 2.

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

console.log(setCar.move());
console.log(values.getDetails());


*/

//   3.
// class Shape {
//     area() {
//         return 0;
//     }
// }

// class Circle {
//     area(pi, radius) {
//         return pi*(radius*2);
//     }
// }

// class Rectangle {
//     area(len, bre) {
//         return len * bre;
//     }
// }

// let circleArea = new Circle();
// console.log(circleArea.area(3.14, 20));

// let rectangleArea = new Rectangle();
// console.log(rectangleArea.area(10, 20));

// OR

class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        this.radius = radius;
        super ();
    }
    area() {
        return Math.PI * (this.radius ** 2);
    }
}

class Rectangle extends Shape {
    constructor(len, bre) {
        this.len = len;
        this.bre = bre;
    }
    area() {
        return this.len * this.bre;
    }
}
let circleArea = new Circle(5);
console.log(circleArea.area());

let rectangleArea = new Rectangle(10, 20);
console.log(rectangleArea.area());