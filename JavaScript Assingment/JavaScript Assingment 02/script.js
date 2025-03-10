
// Excersise 1
var numberpnz = Number(prompt("Give some Number"));

if (numberpnz > 0) {
    alert("Positive");
} else if (numberpnz < 0) {
    alert("Negative");
} else {
    alert("Zero");
}

// Excersise 2


var numberoe = Number(prompt("Give some Number"));

if (numberoe % 2 === 0 ) {
    alert ("Even");
}else{
    alert("Odd");
}

// Excersise 3

var userAge = Number(prompt("Your Age"));

if (userAge >= 18) {
    alert("Your are elgible for voting");
} else {
    alert("You are not elgible for voting");
}

// Excersise 4 

var num1 = Number(prompt("1st Number"));
var num2 = Number(prompt("2nd Number"));

if (num1 > num2) {
    alert(num1 + " is greater");
} else {
    alert(num2 + " is greater");
}

// Excersis 5

var age = Number(prompt("Your Age"));
var memberShipCard = false;

if (age >= 60 || memberShipCard) {
    alert("You are Eligible for discount");
} else {
    alert("You are not Eligible for discount");
}

// Excersis 6

var userName = prompt("Username");
var userPassword = prompt("Password");

if (userName === "admin" && userPassword === "12345") {
    alert("Login Succesfully");
}else{
    alert("Invalid Credentials");
}

// Excersise 7

var studentMarks = Number(prompt("Your obtianed marks"));

if (studentMarks >= 90) {
    alert("A Grad");
}else if (studentMarks >= 80) {
    alert("B Grad");
}else if (studentMarks >= 70) {
    alert("C Grad");
}else if (studentMarks >= 60) {
    alert("D Grad");
}else{
    alert("F Grad");
}


// Excersise 8 

var trafficSignals = prompt("Traffic Light");

if (trafficSignals === "red") {
    alert("Stop");
} else if (trafficSignals === "yellow") {
    alert("Slow down");
} else if (trafficSignals === "green") {
    alert("Go");
}