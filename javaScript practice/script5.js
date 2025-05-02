// let greeting = (name)=>{
//     console.log(`hello ${name} welcome to our website`);

// }

// greeting(prompt("Your name"))



// function oddEven (num) {

//     if (isNaN(num)) {
//         return console.log("Enter a Valid Number ");

//     }else{

//         if (num % 2 === 0) {
//             return console.log(`${num} is even`);

//         }
//         else {

//             return console.log(`${num} is odd`);
//         }
//     }
// }

// oddEven(Number( prompt("Give Number to check even or odd")))


// function multiply (arr) {
//     let newarr = []
//     for(let i =0 ; i < arr.length; i++){
//         newarr.push(arr[i]*2)
//     }
//     return newarr
// }

//  console.log(multiply([2,4,5,6,8]));


// function highestNum (arr) {
//     let high = 0
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] > high) {
//             high = arr[i]
//         }
//     }
//     return high
// }


// console.log(highestNum([24,68,65,33,64,52,54]));


// let str = "hello world";

// console.log(

//     str.length
// );

// let splitstr = str.split("")
// // console.log(splitstr);


// for(let i =0; i < splitstr.length; i++){
//     console.log(splitstr[i]);

// }

// function countvowels (str){
//     let count = 0;
//     let splitstr = str.split("")
//     for(let i =0; i < splitstr.length; i++){
//         if (splitstr[i] === "a" || splitstr[i] === "e" || splitstr[i] === "i" ||splitstr[i] === "o" ||splitstr[i] === "u" ) {
//            count++ 
//         }
//     }
//     return count;
// }

// console.log(

//     countvowels("")
// );


// const sum = (a,b) => a + b;


// console.log( sum( 5,9));


// function postiveNumber (arr) {
//     let newarr = [];
//     for(let i =0; i < arr.length; i++){
//         if (arr[i] > 0) {
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }

// console.log(postiveNumber([2,-5,45,-6,87,-4,-6,-5,-5,64,35,69]));


// function calculator(a = 0, b = 0, op = "+") {
//     if (op === "+") {
//         return a + b;
//     }
//     else if (op === "-") {
//         return a - b
//     }
//     else if (op === "*") {
//         return a * b
//     }
//     else if (op === "/") {
//         return a / b
//     }
// }

// console.log(calculator());

// function reverseStr (str){
//     let splitStr = str.split("");
//     let reverse = splitStr.reverse();
//     let join = reverse.join("");
//     return join;
// }
// console.log(

//     reverseStr("Hello World")
// );

// debugger
// function reverseLoop (str) {
//     let reverseStr ="";
//     // debugger
//     for(let i = str.length -1; i >= 0 ; i--){
//         reverseStr += str[i]
//     }
//     return reverseStr
// }

// console.log(reverseLoop("hello world"));
