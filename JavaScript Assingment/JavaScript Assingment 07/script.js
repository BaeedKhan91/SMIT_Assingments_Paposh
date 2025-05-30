const addBtn = document.querySelector("#add-task");
const ul = document.querySelector(".ul");

addBtn.addEventListener("click", () => {
    const input = document.querySelector("#input");
    if (input.value === "") {
        alert("Please Write Some Task");
    } else {
        const li = document.createElement("li");
        const spanC = document.createElement("span");
        spanC.classList.add("checkbox");
        const spanD = document.createElement("span");
        spanD.classList.add("delete");

        spanC.innerHTML = `<i class="fa-solid fa-check"></i>`;
        spanD.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        li.textContent = input.value;
        li.appendChild(spanC);
        li.appendChild(spanD);
        ul.appendChild(li);
        input.value = "";
    }
});

ul.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }

    else if (e.target.parentElement.classList.contains("checkbox")) {
        e.target.parentElement.parentElement.classList.toggle("checked");
    }
});
