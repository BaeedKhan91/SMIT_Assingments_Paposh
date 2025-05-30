console.log("hello world");


let arr = [2, 4, 6, 8, 10];

let [a,b, ...rest] = arr

console.log(a,b, rest);


let obj = {
    name: "Baeed",
    rollno : 354548,
    age : 18
}

let {name, ...s} = obj;

console.log(name, s);
console.log("name",name );
