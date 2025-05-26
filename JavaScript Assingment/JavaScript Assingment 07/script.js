const addBtn = document.querySelector("#add-task")


let task = [];

const list = document.querySelector("ul")

addBtn.addEventListener("click", ()=>{
    const input = document.getElementById("input").value
    task.push(input)
    rendering()
    console.log(task);
    
})

let btn = document.querySelector("#button")




function rendering (){
    list.innerHTML = task.map((e) => `<li>  ${btn} ${e} 🗑️ </li>`).join("")
}
list.style.listStyle = "none"