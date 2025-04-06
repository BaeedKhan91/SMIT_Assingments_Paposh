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


// //   1. Find a Product by ID

//   let userInput = Number(prompt("give product id"));

//   for(let i =0 ; i < products.length; i++){
//     if (userInput === products[i].id) {
//         console.log(products[i]);

//     }
//   }


// // 2. List All Product Titles

//   for(let i = 0 ;i< products.length ; i++){
//     console.log(products[i].title);

//   }


// // 3. Find Available Colors of a Product


// let userId = Number(prompt("Product Id").trim());

// for(let i = 0; i< products.length; i++){
//     if (userId === products[i].id) {
//       for(let v = 0; v < products[i].variations.length; v++){
//         console.log(products[i].variations[v].color);

//       }
//     }
// }



// // 4. Get Total Quantity of a Product

// let productId = Number(prompt("product Id"));
// let sum = 0


// for(let i = 0 ;i< products.length; i++){
//   if (productId === products[i].id) {
//     for(let v =0; v< products[i].variations.length; v++){
//       sum += products[i].variations[v].quantity
//     }
//   }
// }

// console.log(`Total Quantity:${sum}`);



// // 5. Filter Products with Low Stock

// // debugger
// // let lessStockProducts = [];

// for(let i = 0; i< products.length; i++){
//   for(let v =0 ;v< products[i].variations.length; v++){
//     if (products[i].variations[v].quantity < 2) {
//       console.log(products[i].title);
//       // lessStockProducts.push(products[i])

//     }
//   }
// }


// // console.log(lessStockProducts);



// // 6. Find the Highest Rated Product

// let highestavgRating = 0;
// let highestRatedProduct =null;


// for (let i = 0; i < products.length; i++) {
//   let sumOfReviews = 0;
//   let totalReviews = products[i].reviews.length
//   // debugger
//   for (let r = 0; r < products[i].reviews.length; r++){
//     sumOfReviews += products[i].reviews[r].rating

//   }
//   let avgRating = sumOfReviews / totalReviews
//   // console.log(`Avg rating of ${products[i].title} is ${avgRating}`);

//   if ( avgRating >  highestavgRating ) {
//     highestavgRating = avgRating
//     highestRatedProduct = products[i]
//   }


// }

// // console.log(highestRatedProduct);
// console.log(`Highest Rated Product: ${highestRatedProduct.title}`);


// // 7. Filter Active Reviews for a Product

// for (let i = 0; i < products.length; i++) {
//   for (let r = 0; r < products[i].reviews.length; r++) {
//     if (products[i].reviews[r].status === true) {
//       console.log(products[i].reviews[r]);

//     }
//   }
// }


// // 8. Find the Most Expensive Variation of Each Product

// for (let i = 0; i < products.length; i++) {
//   let expensiveVariation = 0;
//   let expensiveProduct = null;
//   let expensiveColor = null
//   for (let v = 0; v < products[i].variations.length; v++) {
//     // console.log(`${products[i].title} is color ${products[i].variations[v].color} ${products[i].variations[v].price}`);
//     if (products[i].variations[v].price > expensiveVariation) {
//       expensiveVariation = products[i].variations[v].price
//       expensiveProduct = products[i]
//       expensiveColor = products[i].variations[v].color
//     }

//   }
//   console.log(`ProductId ${expensiveProduct.id } = ${expensiveProduct.title} - ${expensiveColor} (${expensiveVariation})`);

// }


// // 9. Calculate Total Stock Value

// let sumOfPrice = 0;
// let qtyOfAllVaraition = 0;
// for (let i = 0; i < products.length; i++) {
//   for (let v = 0; v < products[i].variations.length; v++) {
//     sumOfPrice += products[i].variations[v].price
//     qtyOfAllVaraition += products[i].variations[v].quantity
//   }
// }
// let totalStock = sumOfPrice * qtyOfAllVaraition ;

// console.log(totalStock);
