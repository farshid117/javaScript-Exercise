const $ = document
const addTodoBtn = $.getElementById("add_btn")
const modal = $.querySelector(".modal")
const overLay = $.querySelector("#overlay")
const modalCloseBtn = $.querySelector(".close-modal")
const statusCloseBtns = $.querySelectorAll(".close") //NodeList
const modalTodoInput = $.querySelector("#todo_input")
const modalSubmitBtn = $.querySelector("#todo_submit")
const noStatusColumn = $.querySelector("#no_status")

var count = 0

//show & hide modal
addTodoBtn.addEventListener("click",(event)=>{
    modal.classList.add("active")
    overLay.classList.add("active")
})
modalCloseBtn.addEventListener("click",(event) => {
    modal.classList.remove("active")
    overLay.classList.remove("active")
})


// add New Todo
modalSubmitBtn.addEventListener("click", (event) => {
    let newTodo = modalTodoInput.value
    const div = document.createElement("div")
    div.id = ++count
    div.className="todo"
    div.draggable="true"
    div.setAttribute("ondragstart", "dragStartHandler(event)")

   div.innerHTML = 
   `
    ${newTodo}
    <span class="close" onclick="closeTodoHandler(event)">&times;</span>
   `
    noStatusColumn.append(div)
    
    modalTodoInput.value = ""
    modal.classList.remove("active")
    overLay.classList.remove("active")
     
})
//Remove Todo by &times;
function closeTodoHandler (event){
    event.target.parentElement.remove()
}

//preventDefault dragover for drop Elm
function dragStartHandler(event){
    // console.log(event.target)
    event.dataTransfer.setData("dragElement", event.target.id)
}
function dragoverHandler(event){
    event.preventDefault()
    // console.log("dragover")
}

//Drop Event Handler Func
function dropHandler(event) {
    console.log("Drop")
    console.log("is : ",event.dataTransfer.getData("dragElement"))
    let draggedElmID = event.dataTransfer.getData("dragElement")
    const draggedTodo = document.getElementById(draggedElmID)
    console.log("draggedTodo: ", draggedTodo);

    event.target.append(draggedTodo)
    
}


