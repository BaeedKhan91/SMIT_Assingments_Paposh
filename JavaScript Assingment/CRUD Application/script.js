const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJud2dnd3lycWJ5aXJweXhweWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjQzMzIsImV4cCI6MjA3MzgwMDMzMn0.nCg4Jc7K_as_OQ36J74IPJMGy56gDsMgCgLibIlLZoU";
const SUPABASE_URL = "https://bnwggwyrqbyirpyxpyga.supabase.co";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;

const signup = document.getElementById("signup-form");
const login = document.getElementById("login-form");
const logout = document.getElementById("logout-btn");
const ul = document.querySelector(".ul");
const addBtn = document.getElementById("add-task");
const titleInput = document.getElementById("searchInput");
const contentInput = document.getElementById("input");
const form = document.getElementById("submit-form");

signup.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const { data, error } = await supabase.auth.signUp({ email, password });
  console.log("email ->", email, "password->", password);
  if (error) {
    alert("Signup Error", error.message);
  } else {
    alert("Check Your Email For confirmation link");
    console.log(data);
  }
});

login.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    alert("Login Error", error.message);
  } else {
    currentUser = data.user;
    console.log("logged in user", currentUser);
    showDashboard();
    fetchTodos();
  }
});

function toggleForms(form) {
  document.getElementById("signup-form").style.display =
    form === "signup" ? "block" : "none";
  document.getElementById("login-form").style.display =
    form === "login" ? "block" : "none";
}
async function showDashboard() {
  if (currentUser) {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  }
}

logout.addEventListener("click", async () => {
    await supabase.auth.signOut();
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
})

async function fetchTodos() {
  if (!currentUser) return;

  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .eq("user_id", currentUser.id);

  if (error) {
    console.error("Error fetching:", error);
    return;
  }

  ul.innerHTML = "";

  data.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${todo.title}</strong>: ${todo.content}`;

    const updateBtn = document.createElement("button");
    updateBtn.innerHTML = `<i class="fa-solid fa-pen-to-square edit"></i>`;
    updateBtn.addEventListener("click", () => updateTodo(todo.id));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash delete"></i>`;
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));
    li.appendChild(deleteBtn);
    li.appendChild(updateBtn);
    ul.appendChild(li);
  });
  

  console.log("session data", data);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
    if (!currentUser) {
        alert("login first")
        return
    }

  const { data, error } = await supabase
    .from("todos")
    .insert({
      title: titleInput.value,
      content: contentInput.value,
      user_id: currentUser.id,
    });
  if (error) {
    alert("error", error.message);
  } else {
    console.log(data);
    fetchTodos()
  }
});


async function updateTodo(id) {
  const newTitle = prompt("Enter new title:");
  const newContent = prompt("Enter new content:");

  const { data, error } = await supabase
    .from("todos")
    .update({ title: newTitle, content: newContent })
    .eq("id", id)
    .eq("user_id", currentUser.id);

  if (error) {
    alert("Update Error: " + error.message);
  } else {
    console.log("Updated:", data);
    fetchTodos();
  }
}

async function deleteTodo(id) {
  const { data, error } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .eq("user_id", currentUser.id);

  if (error) {
    alert("Delete Error: " + error.message);
  } else {
    console.log("Deleted:", data);
    fetchTodos();
  }
}

(async () => {
  const { data: sessionData, error } = await supabase.auth.getSession();
  if (sessionData.session) {
    currentUser = sessionData.session.user;
    console.log("Already logged in:", currentUser);
    showDashboard();
    fetchTodos();
  }
})();

// getBtn.addEventListener("click", async () => {
//     const { data: { user }, error: userError } = await supabase.auth.getUser()

//     if (userError) {
//         alert(userError.message)
//     }

//     const { data, error } = await supabase.from("todos").select("*").eq("user_id", user.id)

//     if (error) {
//         alert(error.message)
//         return
//     }

//     console.log(data)
// });

// updateBtn.addEventListener("click", async () => {
//     const { error } = await supabase.from("todos").update({ title: "Note 2" }).eq("id", 2)

//     if (error) {
//         alert(error.message)
//     }
// })

// addBtn.addEventListener("click", async () => {

// })

// supabase.auth.getSession().then(({data})=>{
//     if (data.session) {
//         currentUser = data.session.user;
//         console.log("session data ->" ,data);

//     }
//     else{
//         "Please Login First"
//     }
// })

// const addBtn = document.querySelector("#add-task");
// const ul = document.querySelector(".ul");
// const submitForm = document.querySelector("#submit-form")
// const searchInput = document.querySelector(".search-form input")

// let editindex = null
// submitForm.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const input = document.querySelector("#input");

//     const items = ul.children
//     if (editindex !== null) {
//         const li = items[editindex]
//         li.textContent = input.value.trim().toLowerCase();
//         const iconDiv = document.createElement("div");
//         iconDiv.classList.add("div-icon")
//         iconDiv.innerHTML += `<i class="fa-solid fa-pen-to-square edit"></i>`
//         iconDiv.innerHTML += `<i class="fa-solid check fa-check checkbox"></i>`;
//         iconDiv.innerHTML += `<i class="fa-solid fa-trash delete"></i>`;
//         const text = document.createElement("span")

//         li.appendChild(text)
//         li.appendChild(iconDiv)
//         addBtn.innerHTML = "ADD Todo"
//         editindex = null
//         input.value = ""
//     } else {

//         const input = document.querySelector("#input");
//         if (input.value === "") {
//             alert("Please Write Some Task");
//         } else {

//               const { data: { user }, error: userError } = await supabase.auth.getUser()

//     if (userError) {
//         alert(userError.message)
//     }

//     const { error } = await supabase.from("todos").insert({ title: titleInput.value, content: contentInput.value, user_id: user.id })

//     if (error) {
//         alert(error.message)
//     }

// if (error) {
//     alert(error.message)
// }
//             const li = document.createElement("li");
//             const iconDiv = document.createElement("div");
//             iconDiv.classList.add("div-icon")
//             iconDiv.innerHTML += `<i class="fa-solid fa-pen-to-square edit"></i>`
//             iconDiv.innerHTML += `<i class="fa-solid check fa-check checkbox"></i>`;
//             iconDiv.innerHTML += `<i class="fa-solid fa-trash delete"></i>`;
//             const text = document.createElement("span")
//             text.innerHTML = input.value.trim().toLowerCase();

//             li.appendChild(text)
//             li.appendChild(iconDiv)
//             ul.appendChild(li);
//             input.value = "";
//     }}
// });

// ul.addEventListener("click", (e) => {
//     if (e.target.classList.contains("delete")) {
//         e.target.parentElement.parentElement.remove();
//     }

//     else if (e.target.classList.contains("checkbox")) {
//         e.target.parentElement.parentElement.classList.toggle("checked");
//     }
//     else if (e.target.classList.contains("edit")) {
//         const text = e.target.parentElement.parentElement.textContent;
//         const input = document.querySelector("#input")
//         input.value = text
//         addBtn.innerHTML = " Edit Todo"
//         const item = ul.children
//         for (let i = 0; i < item.length; i++) {
//             if (item[i].textContent === text) {
//                 editindex = i

//             }

//         }
//     }
// });

// searchInput.addEventListener("keyup", () => {
//     const items = ul.children
//     const text = searchInput.value.trim().toLowerCase();
//     for (let i = 0; i < items.length; i++) {
//         const item = items[i]
//         const isMatch = item.textContent.includes(text)
//         if (!isMatch) {
//             item.classList.add("filtered")
//         } else {
//             item.classList.remove("filtered")
//         }

//     }

// })
