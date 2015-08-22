/* javascript foundations */

// dynamically typed, not statically typed

// var color = "red";

// var myDiv = document.getElementById('myDiv');

// //document is the page, always avail.
// myDiv.style.background = "black";
// myDiv.style.color = "#FFF";

// var myVar;

// // undefined = true;

// console.log(typeof myVar === "undefined");
// console.log(myVar === undefined);

// var x = null;

// if(myVar){
// 	console.log("If");
// } else {
// 	console.log("Else");
// }

if(myVar = null){
	console.log("If");
} else {
	console.log("Else");
}

// Scope

var world = "World!"

function sayHello () {
	var hello = "Hello ";
	console.log(hello + world);
}
