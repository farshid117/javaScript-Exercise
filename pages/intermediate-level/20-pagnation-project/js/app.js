const listItems = [
    { id: 1, name: 'farshid', family: 'khayatpur' },
    { id: 2, name: 'afshin', family: 'khayatpur' },
    { id: 3, name: 'abbas', family: 'khayatpur' },
    { id: 4, name: 'simin', family: 'smaeili' },
    { id: 5, name: 'zahra', family: 'mirzaei' },

    { id: 6, name: 'maryam', family: 'khayapur' },
    { id: 7, name: 'farima', family: 'khayatpour' },
    { id: 8, name: 'rayan', family: 'esmaeili' },
    { id: 9, name: 'mohsen', family: 'pahlavan' },
    { id: 10, name: 'mamad', family: 'seyedi' },

    { id: 11, name: 'Saeed', family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika', family: 'Ehsani' },
    { id: 18, name: 'Qadir', family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan', family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
    
];

let userListContainer = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let currentPage = 1
let rowsCount = 5

function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
    usersContainer.innerHTML = ''

    let endIndex = rowsCount * currentPage
    let startIndex = endIndex - rowsCount

    let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)

    paginatedUsers.forEach(function (user) {
        let userElement = document.createElement('div')
        userElement.classList.add('item')
        userElement.innerHTML = user.name + ' ' + user.family

        usersContainer.appendChild(userElement)
    })

}

function setupPagination (allUesrsArray, pagesContainer, rowsCount) {
    // Codes

    pagesContainer.innerHTML = ''

    let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

    for (let i = 1 ; i < pageCount + 1 ; i++) {
        let btn = paginationButtonGenerator(i, allUesrsArray)
        pagesContainer.appendChild(btn)
    }

}

function paginationButtonGenerator (page, allUesrsArray) {
    let button = document.createElement('button')
    button.innerHTML = page

    if (page === currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage)

        let prevPage = document.querySelector('button.active')
        prevPage.classList.remove('active')

        button.classList.add('active')


    })

    return button
}

displayUesrsList(listItems, userListContainer, rowsCount, currentPage)
setupPagination(listItems, paginationContainer, rowsCount)