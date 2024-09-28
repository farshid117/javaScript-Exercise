const $ = document
const addTodoBtn = $.getElementById("add_btn")
const modal = $.querySelector(".dragable-modal")
const overLay = $.querySelector("#overlay")
const modalCloseBtn = $.querySelector(".close-modal")
const statusCloseBtns = $.querySelectorAll(".close") //NodeList
const modalTodoInput = $.querySelector("#todo_input")
const modalSubmitBtn = $.querySelector("#todo_submit")
const noStatusColumn = $.querySelector("#no_status")
const formTag = $.querySelector(".modal-form")

var count = 0
//todo preventDefault to form
formTag.addEventListener("submit",(event)=>{
 event.preventDefault()
})

//todo show & hide modal Event
addTodoBtn.addEventListener("click",(event)=>{
    modal.classList.add("active")
    overLay.classList.add("active")
})
modalCloseBtn.addEventListener("click",(event) => {
    modal.classList.remove("active")
    overLay.classList.remove("active")
})

// todo: add New Todo
modalSubmitBtn.addEventListener("click", (event) => {
    let newTodo = modalTodoInput.value

    noStatusColumn.insertAdjacentHTML("beforeend",
    `
        <div  id=${++count}
            class="todo"
            draggable="true"
            ondragstart="dragStartHandler(event)"
        >
            <span>${newTodo}</span>
            <span class="close" onclick="closeTodoHandler(event)">&times;</span>
      </div>
    `
    )
    
    modalTodoInput.value = ""
    modal.classList.remove("active")
    overLay.classList.remove("active")
     
})
//todo Remove Todo by &times;
function closeTodoHandler (event){
    event.target.parentElement.remove()
}

//todo dragover Func
function dragStartHandler(event){
    event.dataTransfer.setData("dragElmID", event.target.id)
}
function dragoverHandler(event){
    event.preventDefault()
}

//todo Drop Event Handler Func
function dropHandler(event) {
    let draggedElmID = event.dataTransfer.getData("dragElmID")
    const draggedTodo = document.getElementById(draggedElmID)

    event.target.append(draggedTodo)
    
}


