// let num = [1,2,3,4,5,6];

// function newarr (arr){
//     let evenarr =[];
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] % 2 === 0){
//             evenarr.push(arr[i] * 2)
//         }
//     }
//     return evenarr
// }

// console.log(newarr(num));


// let str = "A man a plan a canal Panama";

// let strValid = str.replace(/\s/g, "")

// console.log(strValid);


// // debugger
// function isPalindrome(str) {
//     // debugger
//     let reverse = "" ;
//     for (let i = str.length - 1; i >= 0; i--) {
//         // console.log(str);
//         reverse += str[i]
//     }
//     if (reverse === str) {
//         return true
//     }else{
//         return false
//     }
// }
// console.log(

//     isPalindrome(strValid)
// );


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");

        }
        else if (i % 5 == 0) {
            console.log("Buzz");

        }
        if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);

        }
    }
}
console.log(fizzBuzz());
