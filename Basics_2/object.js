// 2 ways of defining:- i).Litrals, ii).Constructor

// singleton (if we use comstructor all get singleton not in Litrals)

// object-litrals
const symb = Symbol("hastag1")
const firstUser = {
    name: "Kaushik",
    "full name": "Kumar Kaushik",
    [symb]: "hastag1",
    age: 21,
    location: "Banagalore",
    email: "setkk@bang.fax",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(firstUser.email)
// console.log(firstUser["email"])
// console.log(firstUser["full name"])
// console.log(firstUser[mySym])

firstUser.email = "kk@nowok.com"
// Object.freeze(JsUser)
firstUser.email = "kk@saxmail.com"
// console.log(JsUser);

firstUser.greeting = function(){
    console.log("Hello First user");
}
firstUser.greetingTwo = function(){
    console.log(`Hello First user, ${this.email}`);
}

console.log(firstUser.greeting());
console.log(firstUser.greetingTwo());