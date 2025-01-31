const $ = document
const itemInput = $.querySelector("#itemInput")
const UlTodoList = $.querySelector("#todoList")
const addButton = $.querySelector("#addButton")
const clearButton = $.querySelector("#clearButton")

let todosArray = []

//add New Todo Function
function addNewTodo() {
    if (itemInput.value.trim()) {
        const todo = {
            id: todosArray.length + 1,
            text: itemInput.value.trim(),
            status: "uncompleted",
        }

        todosArray.push(todo)

        setLocalStorage(todosArray)
        createTodoItems(todosArray)

    } else {
        alert("آقای خان مقداری را وارد کن!!")
    }
}
function setLocalStorage(todosList) {
    localStorage.setItem("LocalStorageTodosArray", JSON.stringify(todosList))
}
function createTodoItems(todosList) {
    UlTodoList.innerHTML = "" // to Reset Ul innerHTML

    todosList.forEach((todo) => {
        const li = document.createElement("li")
        li.className = todo.status === "uncompleted" ?
            "todoList_item uncompleted well list-group-item" :
            "todoList_item completed well list-group-item"
        li.innerHTML =
            `
            <label>${todo.text}</label>
            <div class="todoList_item__btn">
                <button class="btn btn-success status-btn" 
                        onclick="changeStatusHandler(event, ${todo.id})"
                > 
                    ${todo.status === "completed" ? "uncompleted" : "completed"}
                </button>
                <button class="btn btn-danger delete-btn"  
                        onclick="deleteTodoHandler(event, ${todo.id})"
                >
                    Delete
                </button>
            </div>  
        `
        UlTodoList.append(li)
        itemInput.value = ""
        itemInput.focus()
    })
}
function changeStatusHandler(event, id) {
    // console.log("changeBtn Clicked!")

    /*    let targetElm = event.target.parentElement.parentElement
       if (targetElm.classList.contains("completed")) {
           targetElm.classList.remove("completed")
           targetElm.classList.add("uncompleted")
           event.target.innerText = "completed"
   
           let todoIndex = todosArray.findIndex(todo => todo.id === id)
           let todo = todosArray.find(todo => todo.id === id)
           todo.status = "uncompleted"
   
           todosArray[todoIndex] = todo
           setLocalStorage(todosArray)
   
       } else {
           targetElm.classList.remove("uncompleted")
           targetElm.classList.add("completed")
           event.target.innerText = "uncompleted"
   
           let todoIndex = todosArray.findIndex(todo => todo.id === id)
           let todo = todosArray.find(todo => todo.id === id)
           todo.status = "completed"
   
           todosArray[todoIndex] = todo
           setLocalStorage(todosArray)
       } */

    //approach 2
    todosArray.forEach(todo => {
        if (todo.id === id) {
            if (todo.status === "completed") {
                todo.status = "uncompleted"
                event.target.innerText = "completed"
            } else {
                todo.status = "completed"
                event.target.innerText = "uncompleted"
            }
        }
    })
    setLocalStorage(todosArray)
    createTodoItems(todosArray)
}
function deleteTodoHandler(event, id) {
    event.target.parentElement.parentElement.remove()

    let todoIndex = todosArray.findIndex(todo => todo.id === id)
    todosArray.splice(todoIndex, 1) // splice: swiss army knife & change self array
    setLocalStorage(todosArray)
}

//todo: filter todosArray
function showCompletedHandler() {
    filterTodosArray = todosArray.filter(todo => todo.status === "completed")
    console.log("filterTodosArray: ", filterTodosArray);
    createTodoItems(filterTodosArray)
}
function showUncompletedHandler() {
    filterTodosArray = todosArray.filter(todo => todo.status === "uncompleted")
    console.log("filterTodosArray: ", filterTodosArray);
    createTodoItems(filterTodosArray)
}
function showAllTodosHandler() {
    createTodoItems(todosArray)
}

//todo: EvenListeners
addButton.addEventListener("click", addNewTodo)
clearButton.addEventListener("click", () => {
    todosArray = []
    setLocalStorage(todosArray)
    createTodoItems(todosArray)
    // localStorage.removeItem("LocalStorageTodosArray")
    itemInput.focus()
})
itemInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        addNewTodo()
    }
})

// todo: Sync Other open Tab
window.addEventListener("storage", function (event) {
    if (event.storageArea === localStorage) {
        console.log(`تغییر در localStorage: کلید ${event.key}، مقدار جدید: ${event.newValue}`);
        alert("داده در لوکال استوریج تغییر کرد");
    }
});

//todo: get todos from LocalStorage in onload Event
window.onload = () => {
    itemInput.focus()
    let localStorageTodosArray = JSON.parse(localStorage.getItem("LocalStorageTodosArray"))
    if (localStorageTodosArray.length > 0) {
        todosArray = localStorageTodosArray

    } else {
        todosArray = []
        alert("Haven't Any Todos in LocalStorage")
    }

    createTodoItems(todosArray)
}