const addBtn = document.querySelector("#add-task");
const ul = document.querySelector(".ul");
const submitForm = document.querySelector("#submit-form")
const searchInput = document.querySelector(".search-form input")

let editindex = null
submitForm.addEventListener("submit", () => {

    const input = document.querySelector("#input");
    const items = ul.children
    if (editindex !== null) {
        const li = items[editindex]
        li.textContent = input.value.trim().toLowerCase();
        const spanC = document.createElement("span");
        spanC.classList.add("checkbox");
        const spanD = document.createElement("span");
        spanD.classList.add("delete");
        const spanE = document.createElement("span")
        spanE.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
        spanE.classList.add("edit");
        
        

        const spanM = document.createElement("span")
        spanC.innerHTML = `<i class="fa-solid check fa-check"></i>`;
        spanD.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        li.innerHTML = input.value;
        spanM.appendChild(spanE)
        spanM.appendChild(spanC);
        spanM.appendChild(spanD);
        li.appendChild(spanM)
        addBtn.innerHTML = "ADD Todo"
        editindex = null
        input.value = ""
        saveData()
    }else{

        const input = document.querySelector("#input");
        if (input.value === "") {
            alert("Please Write Some Task");
    } else {
        const li = document.createElement("li");
        const spanC = document.createElement("span");
        spanC.classList.add("checkbox");
        const spanD = document.createElement("span");
        spanD.classList.add("delete");
        const spanE = document.createElement("span")
        spanE.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`
        spanE.classList.add("edit");
        

        const spanM = document.createElement("span")
        spanC.innerHTML = `<i class="fa-solid check fa-check"></i>`;
        spanD.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        li.innerHTML = input.value.trim().toLowerCase();
        spanM.appendChild(spanE)
        spanM.appendChild(spanC);
        spanM.appendChild(spanD);
        li.appendChild(spanM)
        ul.appendChild(li);
        input.value = "";
        saveData()
    }
}
});

ul.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("delete")) {
        e.target.parentElement.parentElement.parentElement.remove();
        saveData()
    }
    
    else if (e.target.parentElement.classList.contains("checkbox")) {
        e.target.parentElement.parentElement.parentElement.classList.toggle("checked");
        saveData()
    }
    else if (e.target.parentElement.classList.contains("edit")) {
        const text = e.target.parentElement.parentElement.parentElement.textContent;
        const input = document.querySelector("#input")
        input.value = text
        addBtn.innerHTML = " Edit Todo"
        const item = ul.children
        for(let i =0 ;i < item.length; i++){
            if (item[i].textContent === text) {
                editindex = i
                
                
                
            }
            
        }
        saveData()
    }
});

searchInput.addEventListener("keyup",()=>{
    const items = ul.children
    const text = searchInput.value.trim().toLowerCase();
    for(let i = 0;  i < items.length; i++){
        const item = items[i]
        const isMatch = item.textContent.includes(text)
        if (!isMatch) {
            item.classList.add("filtered")
        }else{
            item.classList.remove("filtered")
        }
        
    }
    
    
})


function saveData () {
    localStorage.setItem("data" , ul.innerHTML)
}
function getData (){
    ul.innerHTML = localStorage.getItem("data")
}
getData()