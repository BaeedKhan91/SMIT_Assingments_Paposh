// Question 1

var num1 = Number(prompt("1st Number For Addition"));
var num2 = Number(prompt("2nd Number For Addition"));

console.log(num1 + num2);

// Question 2

// Subtraction
var num1 = Number(prompt("1st Number Subtractin"));
var num2 = Number(prompt("2nd Number Subtractin"));

console.log(num1 - num2);

// Multiplication
var num1 = Number(prompt("1st Number multiplication"));
var num2 = Number(prompt("2nd Number multiplication"));

console.log(num1 * num2);

// Division
var num1 = Number(prompt("1st Number division"));
var num2 = Number(prompt("2nd Number division"));

console.log(num1 / num2);


// Question 3

var value;

console.log("Value after variable declaration is " + value);

var userValue = Number(prompt("Give some value to variable"));

value = userValue;

console.log("Initial value " + value);

value = ++userValue;

console.log("value after increement is " + value);

userValue = userValue + 7

value = userValue

console.log("value after addition is " + value);



value = --userValue;

console.log("value after decreement is " + value);



value = userValue %3;

console.log("The Remainder is: " + value);



// Question 4

var movieCost = 600;

var numberOfTickets = Number(prompt("How many Ticket you have to buy (One ticket Cost 600 PKR)"));
var totalCost = movieCost * numberOfTickets;

console.log("Total Cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");


// Question 5

var userNumber = Number(prompt("Give a Number For Multiplication table"));

console.log("Table of " + userNumber);

console.log(userNumber + " x 1 = " + userNumber * 1);
console.log(userNumber + " x 2 = " + userNumber * 2);
console.log(userNumber + " x 3 = " + userNumber * 3);
console.log(userNumber + " x 4 = " + userNumber * 4);
console.log(userNumber + " x 5 = " + userNumber * 5);
console.log(userNumber + " x 6 = " + userNumber * 6);
console.log(userNumber + " x 7 = " + userNumber * 7);
console.log(userNumber + " x 8 = " + userNumber * 8);
console.log(userNumber + " x 9 = " + userNumber * 9);
console.log(userNumber + " x 10 = " + userNumber * 10);


// Question 6

var userTempratureFara = Number(prompt("Temprature in Fahrenheit"));
var toConvertInCelsius = (userTempratureFara - 32) * 5 / 9;
console.log( userTempratureFara +"°F is " + toConvertInCelsius +"°C");


var userTempratureCel = Number(prompt("Temprature in Celsius"));
var toConvertInFara = (userTempratureCel * 9 / 5) + 32;
console.log( userTempratureCel +"°C is " + toConvertInFara +"°F");


// Question 7

var priceItem1 = Number(prompt("Price of Item 1"));
var priceItem2 = Number(prompt("Price of Item 2"));

var orderQuantity1 = Number(prompt("Order Quantity of item 1"));
var orderQuantity2 = Number(prompt("Order Quantity of item 2"));

var shippingcharge = 100;

var totalCost = priceItem1 * orderQuantity1 + priceItem2 * orderQuantity2 + shippingcharge;

console.log("Price of item 1 is " + priceItem1);
console.log("Order Quantity of item 1 is " + orderQuantity1);
console.log("Price of item 2 is " + priceItem2);
console.log("Order Quantity of item 2 is " + orderQuantity2);
console.log("Shipping Charge is " + shippingcharge);
console.log("Total Cost is " + totalCost);

// Question 8

var totalMarks = Number(prompt("Total Marks"));
var marksObtained = Number(prompt("Marks Obtained"));
var percentage = (marksObtained / totalMarks) * 100;

console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage);


// Question 9 

var userDollars = Number(prompt("How may USD you have"));
var userRiyal = Number(prompt("How many Saudi Riyal you have"));

var exchangeRateUSD = userDollars * 278.93;
var exchangeRateRiyal = userRiyal * 74.57;

console.log("Total Currency in PKR: " + (exchangeRateRiyal + exchangeRateUSD));

// Question 10

var number = Number(prompt("value for calculation"));

var calculation = ((number + 5) * 10) / 2;

console.log(calculation);

// Question 11

var birthYear = Number(prompt("Enter your birth year"));
var currentYear = 2025;
var age = currentYear - birthYear;
var age2 = currentYear - birthYear

console.log("Current Year:" + currentYear);
console.log("Birth Year" + birthYear);
console.log("Your are either " + --age2 + " or " + age +"years old");

// Question 12

var snacks = prompt("Your Favorite snack");
var currentAge = Number(prompt("Your Current Age"));
var maxAge = Number(prompt("Estimated maximum age"));
var estimatedAmountSnacks = Number(prompt("Amount Of Snacks Per day"));
var totalSnacks = (maxAge - currentAge) * 365 * estimatedAmountSnacks;

console.log("You will need " + totalSnacks + " " + snacks + "to last you until the rip old age of " + maxAge);










