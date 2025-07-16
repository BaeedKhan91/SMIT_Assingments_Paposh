const todos = [];

fetch("https://jsonplaceholder.typicode.com/todos").then(Response => Response.json()).then((data) => {
    // console.log(data)
    todos.push(...data)
    todos.splice(20)
    console.log(todos);
    todos.map((todo)=>{
        const table = document.querySelector("#table")
        const tr = document.createElement("tr")

        const userId = document.createElement("td")
        const id = document.createElement("td")
        const title = document.createElement("td")
        const completed = document.createElement("td")

        userId.innerHTML = todo.userId
        id.innerHTML = todo.id
        title.innerHTML = todo.title
        completed.innerHTML = todo.completed

        tr.appendChild(userId)
        tr.appendChild(id)
        tr.appendChild(title)
        tr.appendChild(completed)

        table.appendChild(tr)
    })
    
}
).catch(Error => console.log("cant fecth API",Error))


