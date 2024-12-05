// Array Destructuring

const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); // Output: Apple
console.log(secondFruit); // Output: Banana
console.log(thirdFruit); // Output: Cherry


// Object Destructuring

const person = { name: "Alice", age: 25, city: "Wonderland" };
const { name, age, city } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(city); // Output: Wonderland


// Spread Operator


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]


// Rest Parameter


function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}


console.log(sum(1, 2, 3, 4)); // Output: 10


// Async/Await


async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


fetchData();


// function fetchData2() {
//     try {
//         console.log("Data 2")
//         const response = fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }


// fetchData2();


// Callback Function


function processOrder(order, callback) {
    console.log("Processing order:", order);
    callback();
}

processOrder("Order #1", function() {
    console.log("Order completed!");
});


// Promises


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Task completed"), 1000);
});

myPromise.then((message) => console.log(message));


// Closure


function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2