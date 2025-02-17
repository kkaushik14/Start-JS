/* 
// 1.
let teaMenu = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTea = [];

for(let i = 0; i < teaMenu.length; i++) {
    if(teaMenu[i] === "chai") {
        break;
    }
    selectedTea.push(teaMenu[i]);
}

console.log(selectedTea);
// 2.
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let j = 0; j < cities.length; j++) {
    if(cities[j] !== "Paris") {
        visitedCities.push(cities[j]);
    }
}

console.log(visitedCities);


// 3.
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
    if(num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);


// 4.
let tea = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const teaSkip of tea) {
    if(teaSkip !== "herbal tea") {
        preferredTeas.push(teaSkip);
    }
}

console.log(preferredTeas);


// 5.
let citiesPolpulation = {
    London : 8900000,
    "New York" : 8400000,
    Paris : 2200000,
    Berlin : 3500000
};
let cityPopulation = {};

for (const cities in citiesPolpulation) {
    if(cities === "Berlin") {
        break;
    }
    cityPopulation[cities] = citiesPolpulation[cities];
}

console.log(cityPopulation);


// 6.
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities = {};

for(const city in worldCities) {
    if(worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city];
}
// OR (both will work)
for(const city in worldCities) {
    if(worldCities[city] > 3000000) {
        largeCities[city] = worldCities[city];
    }
}

console.log(largeCities);


// 7.
let teaStock = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

// forEach can be also written as: 
// array.forEach(function(element){
// });

// "function(){};" or "=>" both behave same
teaStock.forEach(tea => {
    if(tea === "chai") {
        return;
    }
    availableTeas.push(tea);
});

console.log(availableTeas);


// 9.
let numContainer = [2, 5, 7, 9];
let doubledNumber = [];

for(let l = 0; l < numContainer.length; l++) {
    if (numContainer[l] === 7) {
        continue;
    }
    doubledNumber.push(numContainer[l] * 2);
}

console.log(doubledNumber);
*/


// 10.
let teaNames = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const names of teaNames) {
    if(names.length > 10) {
        break;
    }
    shortTeas.push(names);
}

console.log(shortTeas);