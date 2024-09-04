let $ = document
const registerForm = $.querySelector('.register-form')
const nameInput = $.querySelector('.name-input')
const passwordInput = $.querySelector('.password-input')
const emailInput = $.querySelector('.email-input')
const domTable = $.querySelector('table')

let db = null
let objectStore = null

window.addEventListener('load', () => {
    let DBOpenReq = indexedDB.open('bimehap', 2)

    DBOpenReq.addEventListener('error', (err) => {
        console.warn('DBOpenReq Error', err);
    })
    
    DBOpenReq.addEventListener('success', (event) => {
        db = event.target.result
        getUsers()
        console.log('DBOpenReq Success', event.target.result);
    })

    DBOpenReq.addEventListener('upgradeneeded', (event) => {

        db = event.target.result

        console.log('Old V:', event.oldVersion);
        console.log('New V:', event.newVersion);
        
        if (!db.objectStoreNames.contains('users')) {
            objectStore = db.createObjectStore('users', {
                keyPath: 'userID'
            })
        }

        // if (db.objectStoreNames.contains('courses')) {
        //     db.deleteObjectStore('courses')
        // }

        // db.createObjectStore('courses')

        console.log('upgrade', db.objectStoreNames);

    })
})

registerForm.addEventListener('submit', event => {
    event.preventDefault()

    let newUser = {
        userID: Math.floor(Math.random() * 9999),
        name: nameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
    }

    let tx = db.transaction('users', 'readwrite') //connect to users objectStore

    tx.addEventListener('error', (err) => {
        console.warn('Tx Error:', err)
    })

    tx.addEventListener('complete', (event) => {
        console.log("Tx Complete :",event)
    })

    let store = tx.objectStore('users')
    let request = store.add(newUser)
    clearInputs()

    request.addEventListener('error', (err) => {
        console.warn('add Request Error:', err)
    })

    request.addEventListener('success', (event) => {
        console.log("add request success", event)
    })
})

function clearInputs () {
    nameInput.value = ''
    passwordInput.value = ''
    emailInput.value = ''
}

function getUsers(){
    let tx = db.transaction('users', 'readonly') //connect to users objectStore

    tx.addEventListener('error', (err) => {
        console.warn('Tx Error:', err)
    })

    tx.addEventListener('complete', (event) => {
        console.log("Tx :", event)
    })

    let store = tx.objectStore('users')
    let request = store.getAll()

    request.addEventListener('error', (err) => {
        console.warn('getAll Request Error:', err)
    })

    request.addEventListener('success', (event) => {
        console.log("getAll Request success", event)
        let allUsers = event.target.result //is Array
        console.log("allUsers: ", allUsers);

        allUsers.map(user => {
            domTable.insertAdjacentHTML("beforeend", 
                `<tr>
                   <td>${user.userID}</td>
                   <td>${user.name}</td>
                   <td>${user.password}</td>
                   <td>${user.email}</td>
                 <tr>
                `
            )
        })
    })
}