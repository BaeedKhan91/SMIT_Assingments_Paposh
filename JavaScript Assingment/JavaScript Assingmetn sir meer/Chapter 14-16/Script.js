// Question 1
let studentArr = [];

// Question 3

let arrStr = ["ali", "ahmed", "ubaid"];


// Question 4

let arrNum = [54, 45, 35, 38];


// Question 5

let arrBo = [true, false];


// Question 6

let arrMix = ["ali",45,true]


// Question 7

let education = ["SSC","HSC","BCS","BS","B.COM","MS","M.PHILL","PHD"];

console.log(education);


// Question 8

let studentsNames = ["ali","Ahmed","Amir"];

let score = [450,360,320];

let per1 = score[0] / 500 *100
let per2 = score[1] / 500 *100
let per3 = score[2] / 500 *100

console.log(`Score of ${studentsNames[0]} is ${score[0]}. Percantage: ${per1}%`);
console.log(`Score of ${studentsNames[1]} is ${score[1]}. Percantage: ${per2}%`);
console.log(`Score of ${studentsNames[2]} is ${score[2]}. Percantage: ${per3}%`);




// Question 9

let colorArr = ["red","blue","green","orange"];

console.log(colorArr);

let userStart = prompt("Which color you want to add in the beginning of the array");


colorArr.unshift(userStart);

console.log(colorArr);

let userEnd = prompt("Which color you want to add at the end of array");

colorArr.push(userEnd);

console.log(colorArr);


colorArr.unshift("purple","yellow");

console.log(colorArr);

colorArr.shift();

console.log(colorArr);

colorArr.pop()
colorArr.pop()

let userIndex = Number(prompt("at which index you want to add color"));
let userIndexColor = prompt("Which Color you want to add");

colorArr.splice(userIndex , 0 , userIndexColor)

console.log(colorArr);



let userIndexDS = Number(prompt("At which index you want to delete colors"));
let userIndexDE = Number(prompt("How many colors you want to delete"));

colorArr.splice(userIndexDS , userIndexDE)

console.log(colorArr);


// Question 10

let studentsScore = [452,352,451,255,365,245,120];

studentsScore.sort();
console.log(studentsScore);


// Question 11

let cities = ["Kaarachi", "Islamabad","Multan","Quetta","Lahore","Peshawar"];
let selectedCities = cities.slice(1,4);
// console.log(cities);

console.log(selectedCities);



// Question 12

let strJoin = ["This"," is"," my"," cat"];
console.log(strJoin);

let join = strJoin.join("");
console.log(join);



// Question 13

let FIFO = [];

FIFO.push("keyboard");
FIFO.push("mouse");
FIFO.push("printer");
FIFO.push("moniter");

let first =  FIFO.shift()
console.log(`Removed ${first}`);

let second =  FIFO.shift()
console.log(`Removed ${second}`);

let third =  FIFO.shift()
console.log(`Removed ${third}`);


// Question 14
let LIFO = [];

FIFO.push("keyboard");
FIFO.push("mouse");
FIFO.push("printer");
FIFO.push("moniter");

let first2 =  FIFO.pop()
console.log(`Removed ${first}`);

let second2 =  FIFO.pop()
console.log(`Removed ${second}`);

let third2 =  FIFO.pop()
console.log(`Removed ${third}`);



