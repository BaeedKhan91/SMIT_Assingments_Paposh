const btn = document.querySelector("#add-btn")

btn.addEventListener("click",()=>{
    const todo = document.querySelector("#add-form .input").value
    const list = document.querySelector("#list")
    const span = document.createElement("span")
    span.textContent = todo
    const li = document.createElement("li")
    li.appendChild(span)
    list.appendChild(li)
})