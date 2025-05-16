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
        rating: 5.0,
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

// {
// name : "Baeed Khan",
// rollNo : 343045
// }

// Question 1

// console.log(products.map((m)=> m.title));


// Question 2

// console.log(products.filter((m)=> m.variations.filter((v)=>v.color === "black").length > 0))


// Question 3


// let totalStock = products.map((m)=>m.variations.reduce((acc,curr)=> acc + curr.quantity ,0)).reduce((acc, curr)=> acc + curr)

// console.log(totalStock);

// Question 4

//   let avgRating = products.map((m)=>{
//     let trueReviews = m.reviews.filter((f)=> f.status === true)
//     let totalRating = trueReviews.reduce((acc,curr)=> acc + curr.rating ,0)
//     return{
//       title : m.title,
//       averageRating :   totalRating / trueReviews.length
//     }
//   })
// console.log(avgRating);

// Question 5

// let goodRating = products.filter((m)=> m.reviews.filter((f)=> f.rating === 5.0).length > 0)
// console.log(goodRating);

// Question 6

// let ques6 = products.map((m)=> {
//  return{
//   title : m.title,
//   variations : m.variations
//  }
// })

// console.log(ques6);



// // Question 7

// let totalRevenue = products.reduce((acc,curr)=>{
//   return acc + curr.variations.reduce((acc,curr)=>{
//     return acc + (curr.price * curr.quantity)
//   },0)
// },0)

// console.log(totalRevenue);


// Question 8

// let ques8 = products.filter((e)=>e.variations.filter((f)=> f.quantity > 5).length > 0)

// Question 9

// console.log(ques8);


// let ques9 = products.map((m)=> {
//   return{
//     title : m.title,
//     variations : m.variations.length,
//     totalReviews : m.reviews.length
//   }

// })
// console.log(ques9);



// Question 10

// let ques10 = products.map((m)=> {
// return{
//   title: m.title,
//   totalStock : m.variations.reduce((acc,curr)=> acc + curr.quantity,0)
// }
// }).reduce((acc,curr) =>    acc.totalStock > curr.totalStock ? acc : curr )

// console.log(ques10);
