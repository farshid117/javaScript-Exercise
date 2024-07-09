let $ = document
const titleInput = $.getElementById("title")
const authorInput = $.getElementById("author")
const yearInput = $.getElementById("year")
const submitBtn = $.querySelector(".submit-btn")
const tbody = $.querySelector("#book-list")
const clearBtn = $.querySelector(".clear-btn")


let booksArray = [];

function addNewBook(event) {
    event.preventDefault()
    let isValid = validationInputs()
    if (isValid) {
        tbody.innerHTML = ""
        let newBook = {
            id: Math.floor(Math.random() * 100),
            title: titleInput.value,
            author: authorInput.value,
            year: yearInput.value
        }
        booksArray.push(newBook)
        updateLocalStorage(booksArray)
    }
}
function makeEmptyInputs() {
    titleInput.value = ""
    titleInput.focus()
    authorInput.value = ""
    yearInput.value = ""
}
function showBooks() {
    tbody.innerHTML = ""
    booksArray.forEach(book => (
        tbody.innerHTML +=
        `
            <tr>
                <th>${book.title}</th>
                <th>${book.author}</th>
                <th>${book.year}</th>
                <th>
                    <i class="fa fa-trash trash-icon text-danger fs-4" onclick="deleteBook(${book.id})"></i>
                    <i class="fa fa-edit trash-icon text-success ms-4 fs-4" onclick="deleteBook(${book.id})"></i>
                </th>
            </tr>
        `
    )
    )
}

function validationInputs() {
    if (titleInput.value.length > 0 && authorInput.value.length > 0 && yearInput.value.length > 0 && isFinite(yearInput.value)) {
        return true
    } else {
        alert("pls fill all inputs")
    }
}

function deleteBook(id) {
    let arrayBooksFitered = booksArray.filter(book => book.id !== id)
    booksArray = arrayBooksFitered
    showBooks()
    updateLocalStorage(booksArray)
}

function updateLocalStorage(allBooksArray) {
    localStorage.setItem("booksStorage", JSON.stringify(allBooksArray))
    makeEmptyInputs()
    showBooks()
}

function clearBookList() {
    booksArray = []
    localStorage.clear()
    showBooks()
}

/* todo:  addEventListener Section */
submitBtn.addEventListener("click", addNewBook)
clearBtn.addEventListener("click", clearBookList)
window.onload = () => {
    booksArray = JSON.parse(localStorage.getItem("booksStorage")) || []
    titleInput.focus()
    showBooks()
}
