/*

ARRAY METHODS

- `length`: Returns array length.
- `toString`: Converts array to a string.
- `join`: Joins elements with a specified separator.
- `pop`: Removes the last element.
- `push`: Adds an element to the end.
- `splice`: Adds or removes elements at a specified position.
- `concat`: Combines arrays.

*/

let fruits = ["apple", "banana", "cherry"];

fruits.push("watermelon");

console.log(fruits.join(", "));


/*

SIMPLE DOM

- `getElementById`: Select element by ID.
- `getElementsByClassName`: Select elements by class.
- `querySelector`: Select the first matching CSS selector.
- `querySelectorAll`: Select all elements matching a CSS selector.


*/


// function promptingName(button){
    
// }


window.onload = function(){

    let button = document.getElementById("mybutton");

    button.addEventListener("click", () => {
        let name = prompt("Input your name, please");
        if (name) {
            button.innerHTML = "Welcome, " + name;
        }
    });

}