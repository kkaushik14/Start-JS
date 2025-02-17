let a = 50;
let b = 20;
let ans = a & ((a|b)>>31);
console.log(ans);
console.log(typeof ans);