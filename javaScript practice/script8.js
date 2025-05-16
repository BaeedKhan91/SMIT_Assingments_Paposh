// let result = [
//     { team: "A", score: 50 },
//     { team: "B", score: 70 },
//     { team: "C", score: 20 },
//     { team: "D", score: 60 }
// ]

// let sum = 0;

// for (let i = 0; i < result.length; i++){
//     sum += result[i].score 
// }
// console.log(sum)

let marks = [20, 30, 40, 50];

// let result = marks.filter((m) => m < 40).map((m) => m*2)
// console.log(result)


// function myMap  (arr, callback){
//     let copyarr = []
//     for(let i =0; i < arr.length; i++){
//         copyarr.push(callback(arr[i], i, arr))
//     }
//     return copyarr
// }

// console.log(myMap(marks, (m)=> m + 10 )) 
// console.log(marks.filter((m)=> m < 40));

// function myFilter (arr ,callback){
//     let coptarr =[];
//     for(let i =0; i < arr.length; i++){
//         let val = callback(arr[i], i , arr)
//         if (val) {
//             coptarr.push(arr[i])
//         }
//     }
//     return coptarr
// }

// // console.log(myFilter(marks, (m)=> m < 40));

// marks.map((m, pata, poraarray) =>
//   console.log(`Index: ${pata}, Value: ${m}, Array:`, poraarray)
// );



// let result = [
//     { team: "A", score: 50 },
//     { team: "B", score: 70 },
//     { team: "C", score: 20 },
//     { team: "D", score: 60 }
// ]

// let sum = result.reduce((acc,curr)=> acc + curr.score,0)

// console.log(sum);


// const numbers = [5, 10, 15]

// console.log(numbers.reduce((acc, curr) => acc + curr));

// const arr = [11, 45, 100, 99, 4]

// console.log(arr.reduce((acc,curr)=> {
    
//     if (acc  > curr) {
//        return acc 
//     }
//     else{
//         return curr
//     }
// }));


// const words = ["cat", "tiger", "lion"];

// console.log(words.reduce((acc , curr)=>{
//     return acc + curr.length
// },0))


// const nested = [[1, 2], [3, 4], [5]];

// console.log(nested.reduce((acc,curr)=>{
    
    
//     return [...acc , ...curr]
// }));


const people = [
  { name: "Ali", age: 22 },
  { name: "Sara", age: 25 },
];



let result = people.reduce((acc, curr)=> {
    acc[curr.name] = curr.age
    
    return acc
},{})

console.log(result);
