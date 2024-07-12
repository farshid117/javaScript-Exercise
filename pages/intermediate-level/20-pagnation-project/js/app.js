const usersList = [
    { id: 1, name: 'alireza', family: 'khaypour' },
    { id: 2, name: 'abbas',   family: 'khayatpur' },
    { id: 3, name: 'simin',   family: 'esmaeili' },
    { id: 4, name: 'maryam',  family: 'khayatpour' },
    { id: 5, name: 'farima',  family: 'khayatpour' },

    { id: 6, name: 'afshin', family: 'khayatpour' },
    { id: 7, name: 'zahra',  family: 'mirzaei' },
    { id: 8, name: 'rayan',  family: 'khayatpour' },
    { id: 9, name: 'mohsen', family: 'pahlavan' },
    { id: 10, name: 'seyedi',family: 'mohamad' },

    { id: 11, name: 'Saeed',  family: 'Ehsani' },
    { id: 12, name: 'Siamak', family: 'Modiri' },
    { id: 13, name: 'Mohsen', family: 'Ansari' },
    { id: 14, name: 'Mehran', family: 'Ali Pour' },
    { id: 15, name: 'Amir ',  family: 'Mahtabi' },

    { id: 16, name: 'Hossein', family: 'Amino' },
    { id: 17, name: 'Melika',  family: 'Ehsani' },
    { id: 18, name: 'Qadir',   family: 'Yolme' },
    { id: 19, name: 'Fatemeh', family: 'Alilou' },
    { id: 20, name: 'Ehsan',   family: 'Tayyebi' },

    { id: 21, name: 'Zahra', family: 'Gholami' },
    { id: 22, name: 'Matin', family: 'Sahebi' },
];

let userListContainer   = document.querySelector('#list')
let paginationContainer = document.querySelector('#pagination')

let pageNumber = 1
let pageSize = 4

function displayUesrsList(targetElm) {
    console.log("targetElm: ", targetElm);
    if (targetElm) {
        pageNumber = targetElm.innerHTML
        userListGenerator()

    } else {
        pageNumber = 1
        userListGenerator()

    }
}

function userListGenerator() {
    userListContainer.innerHTML = ""
    let sliceArray = usersList.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)

    sliceArray.forEach(item => {
        userListContainer.innerHTML +=
            `
                <div class="item fw-bold">${item.name} ${item.family}</div>
            `
    });
}

function setupPagination() {
    let numberBtn = Math.ceil(usersList.length / pageSize)
    for (let i = 0; i < numberBtn; i++) {
        paginationContainer.innerHTML +=
         `
            <button onclick="displayUesrsList(this)">${i + 1}</button>
         `
    }
}

window.onload = () => {
    displayUesrsList()
    setupPagination()
}
