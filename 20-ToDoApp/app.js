let card = document.querySelector(".card");
let inputField = document.querySelector(".inputField");
let input = document.querySelector("input");
let addBtn = document.querySelector(".addBtn");
let taskContainer = document.querySelector(".taskContainer");
let deleteBtns = document.querySelectorAll(".deleteBtn");
let doneBtns = document.querySelectorAll(".doneBtn");
let summary = document.querySelector(".summary");
let sumText = document.querySelector(".sumText");
let clearBtn = document.querySelector(".clearBtn");
let errorText = document.querySelector(".errorText");
let count = 0;

sumText.textContent = "No ToDo Item";
clearBtn.style.display = "none";

addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (input.value) {
        taskContainer.innerHTML += `<div class="task">
            <div class="taskText">${input.value}</div>
            <button class="doneBtn"><i class="fa-solid fa-check"></i></button>
            <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>
        </div>`;
        count++;
        sumText.innerText = `You have ${count} pending tasks`;
        input.value = "";
        addBtn.style.backgroundColor = "#9049E5";
        errorText.style.display = "none";
        clearBtn.style.display = "block";
        deleteBtns = document.querySelectorAll(".deleteBtn");
        doneBtns = document.querySelectorAll(".doneBtn");
        attachDeleteEventListeners();
        attachDoneEventListeners();
    } else {
        addBtn.style.backgroundColor = "#9049E5";
        errorText.style.display = "block";
    }
});

function attachDeleteEventListeners() {
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function (e) {
            e.preventDefault();
            let task = deleteBtn.closest(".task");

            if (window.confirm("Are you sure to delete?")) {
                task.remove();
                count--;
                sumText.innerText = `You have ${count} pending tasks`;
            }
        });
    });
}

function attachDoneEventListeners() {
    doneBtns.forEach((doneBtn) => {
        doneBtn.addEventListener("click", function (e) {
            e.preventDefault();
            let taskText = doneBtn.previousElementSibling; // Assuming the taskText is always before the doneBtn
            taskText.style.textDecoration = "line-through";
        });
    });
}

clearBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (count == 0) {
        alert("List is empty");
    } else {
        if (window.confirm("Remove all todos?")) {
            let tasks = document.querySelectorAll(".task");
            tasks.forEach(function (task) {
                task.remove();
            });
            count = 0;
            sumText.innerText = `No ToDo Item`;
            clearBtn.style.display = "none";
        }
    }
});
