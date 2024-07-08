let $ = document
const titleInput = $.getElementById("title")
const authorInput = $.getElementById("author")
const yearInput = $.getElementById("year")
const submitBtn = $.querySelector(".submit-btn")
const tbody = $.querySelector("#book-list")


let booksArray = [];

function addNewBook(event) {
    event.preventDefault()
    let isValid = validationInputs()
    if (isValid) {
        tbody.innerHTML = ""
        let newBook = {
            title: titleInput.value,
            author: authorInput.value,
            year: yearInput.value
        }
        booksArray.push(newBook)

        localStorage.setItem("booksStorage", JSON.stringify(booksArray))

        titleInput.value = ""
        titleInput.focus()
        authorInput.value = ""
        yearInput.value = ""

    }
    showBooks()

}
function showBooks() {
    booksArray.forEach(book => (
      tbody.innerHTML += 
        `
            <tr>
            <th>${book.title}</th>
            <th>${book.author}</th>
            <th>${book.year}</th>
          </tr>
        `
        )
    )
    console.log(tbody.innerHTML)
}
function validationInputs() {
    if (titleInput.value.length > 0 && authorInput.value.length > 0 && yearInput.value.length > 0 && isFinite(yearInput.value)) {
        return true
    } else {
        alert("pls fill all inputs")
    }
}

submitBtn.addEventListener("click", addNewBook)


window.onload = () => {
    titleInput.focus()
    booksArray = JSON.parse(localStorage.getItem("booksStorage")) || []
    console.log("booksArray: ", booksArray);
    showBooks()
}
