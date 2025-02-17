// example: 1
document.getElementById("changeTextButton").addEventListener("click", 
function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "This paragraph is changed"
});

/*
HTML is taken up from browser and internally browsers run C++ and through C++ whole document three is been generated and that generated tree is called as DOM.
*/

// example: 2
document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight");
});


// example: 3
document.getElementById("change0rder").addEventListener("click",
function(){
    let coffeeType = document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "skyblue";
    coffeeType.style.color = "#000";
});


// example: 4
document.getElementById("addNewItem").addEventListener("click", 
function() {
    let newItem = document.createElement("li");
    newItem.textContent = "Sugar";
    document.getElementById("shoppingList").appendChild(newItem);
});


// example: 5
document.getElementById("removeLastTask").addEventListener("click", 
function(){
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
});


// example: 6
document.getElementById("clickMeButton").addEventListener("dblclick", 
function(){
    alert("KKOS")
})


// example: 7
document.getElementById("cigaretteList").addEventListener("click", 
function(event) {
    if(event.target && event.target.matches(".cigaretteItems")) {
        alert("You selected: " + event.target.textContent);
    }
});


// example: 8
document
    .getElementById("feedbackForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        let feeedback = document.getElementById("feedbackInput").value;
        console.log(feeedback);

        document.getElementById("feedbackDisplay")
                .textContent = `Feedback is: ${feeedback}`;
});


// example: 9
document.addEventListener("DOMContentLoaded",
function() {
    document.getElementById("domStatus").textContent = "DOM fully loaded";
});


// example: 10
document.getElementById("toggleHighligh").addEventListener("click", 
function() {
    let changeColor = document.getElementById("descriptionText");
    changeColor.classList.toggle("highlight");
})