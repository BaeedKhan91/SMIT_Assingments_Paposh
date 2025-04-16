var products = [
    {
        id: 101,
        title: "Sony LED 40 inch",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "black", price: 50000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
            { id: 3, color: "silver", price: 55000, quantity: 8 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 4.5,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
            {
                id: 3,
                user: "Ali",
                rating: 5.0,
                title: "bad Product",
                comments: "ali It is a very good product ....",
                date: "04-02-2021",
                status: true,
            },
        ],
    },
    {
        id: 103,
        title: "Bike",
        variations: [
            { id: 1, color: "black", price: 55000, quantity: 5 },
            { id: 2, color: "red", price: 50000, quantity: 1 },
        ],
        reviews: [
            {
                id: 1,
                user: "Ahmad",
                rating: 4.0,
                title: "Good Product",
                comments: "It is a very good product ....",
                date: "06-02-2021",
                status: true,
            },
            {
                id: 2,
                user: "Zubair",
                rating: 3.0,
                title: "Very Good Product",
                comments: "zubair It is a very good product ....",
                date: "05-02-2021",
                status: false,
            },
        ],
    },
];

// for (let i = 0; i < products.length; i++){
//     let expensive = 0
//     let color = null
//     for(let v = 0;  v < products[i].variations.length; v++){
//         if(products[i].variations[v].price > expensive){
//             expensive = products[i].variations[v].price
//             color = products[i].variations[v].color
//         }
//     }
//     console.log(`Product ${products[i].id } = ${products[i].title} ${color} (${expensive})`);
    
// }


// function expensiveProducts (product) {
//     let expensive = 0 

//     for(let i = 0 ; i < product.variations.price; i++){
//         if(product.variations.price > expensive ){
//             expensive = product.variations.price
//         }
//     }
//     return expensive;

// }



//   for(let i = 0 ; i <products.length; i++){
//     let sum = 0
//     for(let r = 0 ; r < products[i].reviews.length; r++){
//         sum += products[i].reviews[r].rating
//     }
//     let avg = sum / products[i].reviews.length

//     console.log(`Product ${products[i].id } = ${products[i].title} ${avg} (${sum}) `);

//   }

let sum =(product) =>{
    let sum = 0
    for (let i = 0; i < product.reviews.length; i++) {
        sum += product.reviews[i].rating
    }
    return sum;
}


function length(product) {
    let count = 0
    for (let i = 0; i < product.reviews.length; i++) {
        count++;
    }
    return count;
}



function avg(product) {
    let total = sum(product);
    let count = length(product);
    let avg = total / count
    let ans = `Product ${product.id} avg rating is ${avg} out of ${total}`
    return ans
}

function rendering () {

for (let i = 0; i < products.length; i++) {
    console.log(avg(products[i]));

}
}


//   console.log(avg());

rendering();



