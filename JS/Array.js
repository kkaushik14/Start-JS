/* Different way to write an array:
let teaFl = new Array("green tea", "black tea", "oolong tea");*/

// 1.
let teaFlavour = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavour[0];
// console.log(firstTea);

// 2.
let cities = ["London", "Tokyo", "Paris", "New York"];

let favoriteCity = cities[2];
// console.log(favoriteCity);

// 3.
let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

// console.log(teaTypes);


// 4.
let citiesVisted = ["Mumbai", "Sydney"];

// citiesVisted[citiesVisted.length] = "Berlin";  //This is also a way
citiesVisted.push("Berlin");
// console.log(citiesVisted);


// 5. 
let teaOrder = ["chai", "ice tea", "matcha", "earl grey"];

let changedOrder = teaOrder.pop();
// console.log(teaOrder);
// console.log(changedOrder);


// 6.
let popularTeas = ["green tea","oolong tea", "chai"];

let softCopiesTea = popularTeas;
// console.log(softCopiesTea);


// 7.
let topCities = ["Berlin", "Singapore", "New York"];

// let hardCopyCities = [...topCities]; //1st way to do(rest & spred operation)

let hardCopyCities = topCities.slice();//2nd way to do

topCities.pop(); //just to check

// console.log(topCities);
// console.log(hardCopyCities);


// 8.
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];

// let worldCities = europeanCities + asianCities; //not a real way and turns into a string

// let worldCities = [europeanCities, asianCities]; // this will make 2d array(array inside the array)

let worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);


// 9.
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl tea"];

let menuLength = teaMenu.length;
// console.log(menuLength);


// 10.
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London"); 


// 11. -> spred operator
const allTeaAvailability = [...teaMenu, ...popularTeas];
console.log(allTeaAvailability);


// 12.
let a = 12;
let b = 15;
let c = 14;
let d = 13;
Array.of(a, b, c, d);


// Extra ->
Array.isArray("Kaushik");
Array.from("Kaushik");
Array.from({name: "Kaushik"});