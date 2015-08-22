// console.log("hello from first.js");
// console.log("hello again"); // not needed

// var name = prompt("What is your name?");

// alert("Hello " + name);

// name = "Nick";

// console.log("The user's name is " + name);

// console.log("Before");

// var name = prompt("What is your name?")

// if ("ari") {
// 	console.log("If block");
// } else {
// 	console.log("Else block")
// }

// console.log("After");

//console.log 10 times

/*
var counter = 10;
while (counter) {
	console.log('Hello World!');
	console.log('hi')
	counter = counter - 1;
} 

while (prompt("what is your name?")) {
	console.log ("Got your name ")
}
*/
// for (var counter=10; counter; counter = counter - 1) {
// 	console.log("Hello World", counter)
// }
// console.log("after")

/*
var friends = ["Nick","Michael", "Amit", [true, 1] ]
console.log(friends.length);
console.log(friends[0])

var friendNumber = 1;

for(i=0; i < friends.length; i+=1) {
	console.log(friends[i]);
}
*/

/* objects, key value pairs */
/*
var me = {
	first_name: "Ari",
	last_name: "Akerstein",
	"Employee_number": 1
}

me[first_name] = "James"

console.log(me.first_name);
console.log(me["Employee_number"]);
console.log(me);

var key = "first_name"
*/

var sayHello = function () {
	var message = "Hello";
	mesage = message + "world";
	console.log("message")
}

var debug = function (message) {
	console.log("Debug", message);
}

var doubleNumber = function (num) {
	return num * 2;
}

debug(doubleNumber(450));

sayHello();

var x = 1;

debug("x has been set");
sayHello();

x += 10;
var y = 100;

console.log("x has been increased. y has been set");

sayHello();

















