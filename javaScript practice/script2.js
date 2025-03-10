// let product = {
//     id : 102,
//     title: "Smartwatch",
//     variation : [
//         {color: "black", price: 5000, quantity: 3},
//         {color: "silver", price: 8000, quantity: 5},
//         {color: "gold", price: 6000, quantity: 4}
//     ]
// };

// let sum = 0;

// for (let i = 0; i < product.variation.length ;i++ ){
//     // console.log(product.variation[i].price);

//     sum += product.variation[i].price * product.variation[i].quantity
// }

// console.log(sum);


// let student = [
//     { name: "ahmed", marks: 78 },
//     { name: "sara", marks: 86 },
//     { name: "ali", marks: 92 },
//     { name: "hassan", marks: 88 },
// ];

// for(let i = 0; i< student.length; i++ ){
//     console.log(student[i].marks);


// }


// let numbers = [0, 20, 90, 30];

// numbers.push(50);

//  console.log(numbers.pop());


// numbers.shift();
// numbers.unshift(10);




// console.log(numbers);


// let vechils = [ "car " , "bike"];

// vechils.push("bus")

// console.log(vechils);


// let animals = ["lion", "tiger", "elephant", "giraffe"];

// // "tiger" ko remove kar ke "cheetah" daal do
// animals.splice(1, 1, "cheetah");

// console.log(animals);


// let numbers = [2220, 500, 850, 99, 750, 210, 22];

// // console.log(numbers.slice(2,4));
// numbers.splice(1,1, 120)

// console.log(numbers);


// let students = [
//     {name: "Zain" , marks: 55},
//     {name: "Hira" , marks: 60},
//     {name: "Farhan" , marks: 75},
//     {name: "Sana" , marks: 30},
//     {name: "ali" , marks: 42},
// ]

// for(let i = 0; i< students.length; i++){
//     if(students[i].marks >= 50 ){
//         console.log(students[i])
//     }
// }


var store = [
    {
        category: "Electronics",
        products: [
            {
                id: 201,
                name: "Smartphone",
                variations: [
                    { color: "black", price: 50000, quantity: 5 },
                    { color: "blue", price: 52000, quantity: 3 }
                ]
            },
            {
                id: 202,
                name: "Laptop",
                variations: [
                    { color: "silver", price: 90000, quantity: 2 },
                    { color: "gray", price: 88000, quantity: 4 }
                ]
            }
        ]
    },
    {
        category: "Clothing",
        products: [
            {
                id: 301,
                name: "T-Shirt",
                variations: [
                    { color: "red", price: 1500, quantity: 10 },
                    { color: "black", price: 1700, quantity: 8 }
                ]
            },
            {
                id: 302,
                name: "Jeans",
                variations: [
                    { color: "blue", price: 3000, quantity: 6 },
                    { color: "black", price: 3200, quantity: 5 }
                ]
            }
        ]
    }
];


// let totalQty = 0;

// for(let s = 0; s< store.length; s++){
//     if (store[s].category === "Electronics") {
//         for(let p = 0; p< store[s].products.length; p++){
//             for(let v =0; v<store[s].products[p].variations.length; v++){
//                 console.log(store[s].products[p].variations[v].quantity);
                
//                 totalQty += store[s].products[p].variations[v].quantity
//             }
//         }
//     }
// };

// console.log(totalQty);


// debugger

let totalPrice = 0;
let totalVariation = 0;


for (let s = 0; s < store.length; s++) {
    if (store[s].category === "Electronics") {
         for(let p= 0; p<store[s].products.length; p++){
            if (store[s].products[p].name === "Laptop") {
                for(let v =0; v<store[s].products[p].variations.length; v++){
                    // console.log(store[s].products[p].variations[v].price);
                    
                    totalPrice += store[s].products[p].variations[v].price
                    totalVariation++;
                   
                }
            }
         }
    }
    
}

let avg = totalPrice / totalVariation

console.log(totalPrice);
console.log(avg);





// for(let i =0; i< store.length; i++){
//     console.log(store[i].category);
    
// }

// for(let s = 0 ; s< store.length ; s++){
//     for( let i = 0; i< store[s].products.length; i++){
//         console.log(store[s].products[i].name);
        
//     }
// }

// let sum =0;


// for ( let s = 0; s<store.length; s++){
//     for(let p =0; p< store[s].products.length; p++){
//         for(let v = 0; v<store[s].products[p].variations.length; v++){
//             console.log(store[s].products[p].variations[v].price);
            
//             sum =+ store[s].products[p].variations[v].price
            
//         }
//     }
// }

// console.log("Total proce" + sum);



