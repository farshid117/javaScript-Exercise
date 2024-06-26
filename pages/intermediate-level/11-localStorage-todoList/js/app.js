const $ = document
const itemInput = $.querySelector("#itemInput") 
const UlTodoList = $.querySelector("#todoList") 
const addButton = $.querySelector("#addButton")
const clearButton = $.querySelector("#clearButton")

let todosArray = []
let count = 0
addButton.addEventListener("click",() => {
    
    const todo = {
        id: ++count,
        text: itemInput.value.trim(),
        status: "uncompleted",
    }
    todosArray.push(todo)
    console.log("todosArray: ", todosArray);
    localStorage.setItem("LocalStorageTodosArray", JSON.stringify(todosArray))

   createTodoItems()
})

function createTodoItems(){
    UlTodoList.innerHTML = ""
    let LocalStorageTodosArray = JSON.parse(localStorage.getItem("LocalStorageTodosArray"))
    LocalStorageTodosArray.forEach((todo) => {
        const li = document.createElement("li")
        li.className = todo.status === "uncompleted" ? "todoList_item uncompleted well" : "todoList_item completed well"
        li.innerHTML =
            `
            <label>${todo.text}</label>
            <div class="todoList_item__btn">
                <button class="btn btn-success status-btn " onclick="changeStatusHandler(event, ${todo.id})">${todo.status}</button>
                <button class="btn btn-danger delete-btn" onclick="deleteTodoHandler(event, ${todo.id})">Delete</button>
            </div>
          
        `
        UlTodoList.append(li)
        itemInput.value = ""
    })
}

    function changeStatusHandler(event,id) {

        let array = JSON.parse(localStorage.getItem("LocalStorageTodosArray"))
        console.log("array: ", array);
        let targetElm = event.target.parentElement.parentElement
        if (targetElm.classList.contains("completed")){
            targetElm.classList.remove("completed")
            targetElm.classList.add("uncompleted")
            event.target.innerHTML = "uncompleted"

            let todoIndex = array.findIndex(todo => todo.id === id)
            let todo = array.find(todo => todo.id === id)
            todo.status = "uncompleted"

            array[todoIndex] = todo

            localStorage.setItem("LocalStorageTodosArray", JSON.stringify(array))
        }else{
            targetElm.classList.remove("uncompleted")
            targetElm.classList.add("completed")
            event.target.innerHTML = "completed"

            let todoIndex = array.findIndex(todo => todo.id === id)
            let todo = array.find(todo => todo.id === id)
            todo.status = "completed"

            array[todoIndex] = todo

            localStorage.setItem("LocalStorageTodosArray",JSON.stringify(array))

        }
}
function deleteTodoHandler(event, id) {
    event.target.parentElement.parentElement.remove()
    let array = JSON.parse(localStorage.getItem("LocalStorageTodosArray"))

    let todoIndex = array.findIndex(todo => todo.id === id)
    array.splice(todoIndex, 1)
    localStorage.setItem("LocalStorageTodosArray", JSON.stringify(array))

}





window.onload = () =>{
    itemInput.focus()
    createTodoItems()
}