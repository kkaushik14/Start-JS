/*
// 1.
function makeTea (typeOfTea) {
    return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("kadak chai")

console.log(teaOrder);


// 2.
function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea();

console.log(orderConfirmation);


// Arrow Function
// 3.
// syntax:- const calculateTotal = () => {}
// Implicit return:- (without hittingENTER, just one line of code)
const calculateTotal = (price, quantity)=> {
    return price * quantity;
}
let totalCost = calculateTotal(299, 50);
    
console.log(totalCost);
    
    
    
// 4.
function makeTea (orderPlaced){
    return `Order Placed: ${orderPlaced}`
}
function processTeaOrder(teaType) {
    return teaType("Earl Gray");
}
    
let order = processTeaOrder(makeTea);
console.log(order);
*/


// 5.
function createTeaMaker() {
    return function(teaType) {
        return `Making ${teaType}`;
    }
}
    
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));