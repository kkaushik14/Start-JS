// 1.
let computer = {cpu: 10}
let Apple = {
    keyboard: "Backlit",
    __proto__: computer,
}
let hp = {}

console.log(`Apple`, Apple.__proto__);


// 2.
let newCar = {
    BMW: "series 8"
};
let oldCar = {
    EcoSport: "Xl"
};

/* Sets the prototype of a specified object "o" to object "proto" or "null". Returns the object "o". */
Object.setPrototypeOf(oldCar, newCar);

console.log(`Old Car `, Object.getPrototypeOf(oldCar));
