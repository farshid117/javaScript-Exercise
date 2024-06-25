const $ = document
const addTodoBtn = $.getElementById("add_btn")
const modal = $.querySelector(".modal")
const overLay = $.querySelector("#overlay")
const modalCloseBtn = $.querySelector(".close-modal")
const statusCloseBtns = $.querySelectorAll(".close") //NodeList
const modalTodoInput = $.querySelector("#todo_input")
const modalSubmitBtn = $.querySelector("#todo_submit")
const noStatusColumn = $.querySelector("#no_status")

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
    div.className="todo"
    div.draggable="true"

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

function closeTodoHandler (event){
    event.target.parentElement.remove()
}

/* //remove todo
statusCloseBtns.forEach((closeBtn) => {
    console.log(statusCloseBtns)
    closeBtn.addEventListener("click", (event) => {
        event.target.parentElement.remove()

    })
}) */
