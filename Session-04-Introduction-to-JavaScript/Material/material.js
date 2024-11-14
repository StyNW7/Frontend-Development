// Console Log

console.log("Hello, World!");



// Variable


let age = 25;


let isActive = true;


let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];


var name = "Stanley"

if (name === "Stanley"){
    let age = 30
    console.log("I'm Var");
}

// if (age != NaN){
//     console.log("I'm Age");
// }

const PI = 3.14

// PI = 7

console.log(PI)


// Looping


for (let i = 0; i < 5; i++) {
    console.log(i);
}


let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


// Foreach


const person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key + ": ", person[key]);
}



const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}


// Additional Function


let today = new Date();

console.log(today)


// Operators + Logical Operators + Comparison


// Functions


function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // "Hello, John!"



// Simple DOM


function showMessage() {
    alert("Button Clicked!");
}

window.onload = function() {
    document.getElementById("myButton").addEventListener("click", showMessage);
}