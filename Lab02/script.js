'use strict';

let someData = prompt("Pick a number");
someData = parseInt(someData);
let testString = true;



let result = typeof(someData);

console.log("This result is a " + result);

if (someData == 42) {
    alert("ya this was 42");
}