
// const todos = []

//  fetch("https://jsonplaceholder.typicode.com/todos").then(Response => Response.json()).then(data =>{
//         todos.push(...data)
//         todos.splice(10)
//         console.log(todos);

        
//         const table = document.querySelector("#table");


// todos.map((todo , i)=>{
//     const tr = document.createElement("tr");
// const userid = document.createElement("td")
// const id = document.createElement("td")
// const title = document.createElement("td")
// const completed = document.createElement("td");

// userid.innerHTML = todo.userId
// id.innerHTML = todo.id
// title.innerHTML = todo.title
// completed.innerHTML = todo.completed

// tr.appendChild(userid)
// tr.appendChild(id)
// tr.appendChild(title)
// tr.appendChild(completed)

// table.appendChild(tr)

// })

//     }
// ).catch(Error => console.log("can fetch api", Error))


const todos = [];

fetch("https://jsonplaceholder.typicode.com/todos").then(Response => Response.json())


