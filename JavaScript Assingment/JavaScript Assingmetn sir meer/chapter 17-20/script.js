// Question No 1

let arr1 = [
    [],
    []
]

// Question No 2

let arr2 = [
        [0,1,2,3],
        [1,0,1,2],
        [2,1,0,1]
    ] 
    
// Question No 3

for(let i = 1; i <= 10; i++){
        console.log(i);
    
    }


    
// Question No 4


let tableNumber = Number(prompt("Give Number for Multiplication Table"));
let tableLength = Number(prompt("How many times you to multiply the table"));


if (tableLength && tableNumber ) {
    for(let i =1; i <= tableLength; i++){
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
        
    }
}else{
    alert("Please Enter Numbers");
}



// Question No 5

let fruits = ["apple", "banana", "mango", "orange","strawberry"]

for(let i = 0; i <fruits.length; i++){
    console.log(`Element at index ${i} is ${fruits[i]}`);
    
}

// Question No 6

// Counting
let counting = "";
for (let i = 1; i <= 15; i++) {
  counting += i +", "
}
console.log("Counting: " + counting);

// Reverse 
let reverseCounting = "";
for (let i = 10; i >= 1; i--) {
  reverseCounting += i + ", ";
}
console.log("Reverse Counting: " + reverseCounting);

// Even
let even = "";
// debugger
for (let i = 0; i <= 20; i++) {
    // debugger
    if (i % 2 === 0) {
        
        even += i + ", ";
    }
}
console.log("Even: " + even);

// Odd
let odd = "";
for (let i = 1; i < 20; i++) {
    if (i % 2 !== 0) {
        
        odd += i + ", ";
    }
}
console.log("Odd: " + odd);

// Series
let series = "";
for (let i = 2; i <= 20; i += 2) {
  series += i + "k" + ", " ;
}
console.log("Series: " + series);



// Question No 7

let userSearch = prompt("Welcome to ABC Bakre, What do you want to order");
let filterSearch = userSearch.trim().toLowerCase();
let arr3 = ["cake", "apple pie", "cookie", "chips", "patties"];

let ifAvailaible = false;

for(let i = 0; i < arr3.length; i++ ){
    if (filterSearch === arr3[i]) {
        alert(`${arr3[i]} is availaible at index ${i} in our bakery`)
        ifAvailaible = true;
        break
    }
}
 if (!ifAvailaible) {
    alert(`Sorry ${userSearch} is not availaible in our bakery `)
 }

// Question No 8

let arr4 = [18,33,59,99,92];
let maxNum = 0;


for(let i = 0 ; i < arr4.length ; i++){
    if (arr[i] > maxNum) {
        maxNum = arr[i]
    }
}



console.log(`The Largest Number is ${maxNum}` );


// Question No 9

let arr = [180,303,590,990,920];
let minNum = Infinity;


for(let i = 0 ; i < arr.length ; i++){
    if (arr[i] < minNum) {
        minNum = arr[i]
    }
}



console.log(`The Largest Number is ${minNum}` );


// Question No 10

let endrange = 100;

for(let i = 1; i <= endrange; i++){
    if (i % 5 === 0) {
        console.log(i);
        
    }
}


