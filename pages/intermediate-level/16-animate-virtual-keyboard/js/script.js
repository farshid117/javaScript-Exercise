const titleElem = document.querySelector('.title')

document.addEventListener("keyup", (event)=>{
    let userSelectedkey = event.code
    let virtualUserSelectedElm = document.getElementById(userSelectedkey)

    appendUserSlectedKeyTODom(event, virtualUserSelectedElm)
    
})

function appendUserSlectedKeyTODom(event, virtualUserSelectedElm) {
    console.log("event: ", event);
    if (event.code === "Space") {
        titleElem.innerHTML += " "
        return
    } else if (event.code === "Backspace") {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return
    }
    else {
        titleElem.innerHTML += virtualUserSelectedElm.innerHTML
        virtualUserSelectedElm.classList.add("hit")
    }

    virtualUserSelectedElm.addEventListener("animationend", () => {
        virtualUserSelectedElm.classList.remove("hit")
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