// clousers are Function
function outer() {
    let value = 24;
    return function() {
        value++;
        return value;
    }
}

let inner = outer();
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());
console.log(inner());