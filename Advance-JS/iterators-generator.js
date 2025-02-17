function* numGenerator() {
    yield 101;
    yield 202;
    yield 303;
}

let gen = numGenerator();
let genO = numGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log("----");

console.log(genO.next().value);
console.log(genO.next().value);
console.log(genO.next().value);