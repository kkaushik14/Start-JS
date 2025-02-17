/* 
let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < marks.length; i++) {
    if(marks[i] > 90) {
        console.log("AA");
    } else if(marks[i] > 80 && marks[i] <= 90){
        console.log("AB");
    } else if(marks[i] > 70 && marks[i] <= 80){
        console.log("BB");
    } else if(marks[i] > 60 && marks[i] <= 70){
        console.log("BC");
    } else if(marks[i] > 50 && marks[i] <= 60){
        console.log("CC");
    } else if(marks[i] > 40 && marks[i] <= 50){
        console.log("CD");
    } else if(marks[i] > 30 && marks[i] <= 40){
        console.log("DD");
    } else {
        console.log("FF");
}
}
let a = 18;
let b = 24;

function add() {
    return b%a;
}


let total = add()
console.log(total);


let arr = [3, 5, 24, "KKOS", "HP", 4, 2];

function filterNumbers() {
    return arr.filter(item => typeof item === 'string');
}
let getAns = filterNumbers();

console.log(getAns);

// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

*/
let arr = [3, 5, 24, "KKOS", "HP", 4, 2];

function arrayReverse() {
    return arr.reverse();
}
let reversed = arrayReverse();
console.log(reversed);