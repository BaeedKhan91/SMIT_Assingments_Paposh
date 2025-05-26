// {
//     Name : "Baeed",
//     RollNo : 343045
// }


function greeting() {
    let userinput = document.getElementById("input").value
    let heading = document.getElementById("heading")
    heading.innerText = `Hello ${userinput}`
}


function changeColor() {
    // document.body.style.backgroundColor =" black"
    let r = Math.round(Math.random() * 256)
    let g = Math.round(Math.random() * 256)
    let b = Math.round(Math.random() * 256)

    let rgb = `rgb(${r}, ${g},${b})`
    document.body.style.backgroundColor = rgb
}
