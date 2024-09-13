const titleElem = document.querySelector('.title')

document.addEventListener("keyup", (event)=>{
   
        let keySelected = document.getElementById(event.code)
    // let keySelected = document.querySelector(`#${event.code}`) ✔️

    appendUserSlectedKeyTODom(event, keySelected)
    
})

function appendUserSlectedKeyTODom(event, keySelected) {
    // console.log("event: ", event);
    if (event.code === "Space") {
        titleElem.innerHTML += " "
        keySelected.classList.add("hit")
        return
    } else if (event.code === "Backspace") {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        keySelected.classList.add("hit")
        
    }
    else {
        titleElem.innerHTML += keySelected.innerHTML
        keySelected.classList.add("hit")
    }

    keySelected.addEventListener("animationend", () => {
        keySelected.classList.remove("hit")
    })
}























/* document.addEventListener('keyup', function (event) {
    appendValueToDom(event)

    let userEventKey = event.key.toUpperCase() // 's a d'
    let mainKeyElem = document.getElementById(userEventKey)

    mainKeyElem.classList.add('hit')

    mainKeyElem.addEventListener('animationend', function () {
        mainKeyElem.classList.remove('hit')
    })

    console.log(mainKeyElem);
})

function appendValueToDom (event) {
    console.log(event);
    if (event.code === 'Backspace') {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }
    titleElem.innerHTML += event.key
}
 */