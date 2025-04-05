// let userName = prompt("What is your name").toUpperCase();


// let userAge = +prompt("What is your Age");

// if (userAge >= 18 ) {
//     alert("YOur Are eligble for voting");
// }else{
//     alert("your are not eligible for voting");
// }

// let userData ={
//     name : userName,
//     Age : userAge,
// }

// console.log(userData);


// let products =[
//     {
//         name : "airpods",
//         price : 10000,
//         quantity : 8
//     },
//     {
//         name : "laptop",
//         price : 80000,
//         quantity : 5
//     },
//     {
//         name : "mobile",
//         price : 50000,
//         quantity : 16
//     },
// ]


// let userProduct = prompt("which product you have to search");
// let found = false;
// userProduct = userProduct.toLowerCase();

// debugger

// for (let i = 0; i < products.length; i++ ){
//     if (products[i].name === userProduct) {
//         console.log(products[i].price);
//         console.log(products[i].quantity);
//         found = true;
//         break;
//     }
//     }

//     if (!found) {
//         alert("prodcut not found ")
//     }
    

// let firstD = +prompt("Age kia hai tumhari");

// let brothers = +prompt("kitne bhai hai tere ");

// if (brothers === 0) {
       
// }
// let secondD = +prompt("Second number");

// console.log(firstD+secondD);



// let students = [
//     {
//         name: "ahmed",
//         marks: 65
//     },
//     {
//         name: "ali",
//         marks: 95
//     },
//     {
//         name: "umar",
//         marks: 46
//     },
//     {
//         name: "asad",
//         marks: 78
//     }
// ]


// // console.log("Passed students");

// let sum = 0;

// let highstMarks = students[0].marks;
// let topper = students[0];


// for(let i = 0; i<students.length; i++){
//     if (students[i].marks >= 50) {
        
//         console.log(students[i]);
        
//     }
//     sum += students[i].marks 

//     if (students[i].marks > highstMarks) {
//         highstMarks = students[i].marks;
//         topper = students[i]
//     }
// }

// let avg = sum / students.length


// console.log("Sum of marks " + sum);
// console.log("Average " + avg);

// // console.log("highest marks " + highstMarks);
// // console.log("topper "+ topper.name);


// console.log(topper.name + " got the higher marks " +highstMarks);



// let cart = [];

// while (true){
//     let userResponse = prompt("Do you want to add a product in the cart yes/no").toLowerCase();
//     if (userResponse === "no") {
//         break
//     }else if(userResponse === "yes"){
//         let userProduct = prompt("which product you have to add");
//         cart.push(userProduct);
       

//     }
//     else{
//         alert("envalid response please enter yes or no ");
//     }

// }


// console.log(cart);
let userItems = [];

for (let i =0; i<5; i++){

  
 userItems.push(prompt("enter your favorite item"))   
} 

for(let i =0; i< userItems.length;i++){
    
    if (userItems[i] === "pizza") {
        console.log(userItems[i] + "i also like this");
        
    }
}





// console.log(userItems);


