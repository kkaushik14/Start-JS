/* Synchronous ->
console.log("KKOS");

for (let k= 0; k < 10; k++) {
    console.log(k);
}  */

// asynchronous ->
console.log("KKOS");

function installedNotify() {
    console.log("KKOS is installed successfully");
}

setTimeout(() => {
    installedNotify();
}, 2000);

for (let k= 0; k < 10; k++) {
    console.log(k);
}