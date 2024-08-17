let $ = document
let autoCompleteWrapper = $.querySelector('.search-input')
let searchInpueElem = $.querySelector('input')
let autoCompleteBox = $.querySelector('.autocom-box')

searchInpueElem.addEventListener('keyup', function () {
    if(searchInpueElem.value.trim()) {
        autoCompleteWrapper.classList.add("active")
        let wordsArray = suggestions.filter((word) => {
            return word.toLowerCase().includes(searchInpueElem.value.toLowerCase())
            // return word.toLowerCase().startsWith(searchInpueElem.value)
        })
        suggestionWordsGenerator(wordsArray)
        // console.log("wordsArray: ", wordsArray);
    }else{
        autoCompleteWrapper.classList.remove("active")
    }
})

function suggestionWordsGenerator(wordsArray) {
    let listItemsArray= wordsArray.map(word => `<li>${word}</li>`)
    // console.log("listItemsArray: ", listItemsArray);
    
    if(!listItemsArray.length){
        autoCompleteBox.innerHTML = `<li>${searchInpueElem.value}</li>`
    }else{
        autoCompleteBox.innerHTML = listItemsArray.join("")
        select()
    }
}

function select () {
    let allListItems = autoCompleteBox.querySelectorAll('li') //NodeList
    // console.log("allListItems: ", allListItems);
    allListItems.forEach(li => {
        li.addEventListener("click",(event)=>{
            searchInpueElem.value = event.target.innerText
            autoCompleteWrapper.classList.remove("active")
        })
    } )
} 
/*
searchInpueElem.addEventListener('keyup', function () {
    let searchValue = searchInpueElem.value.trim()

    if (searchValue) {
        autoCompleteWrapper.classList.add('active')

        let filteredWords = suggestions.filter(function (word) {
            // return word.toLowerCase().startsWith(searchValue.toLowerCase())
            return word.toLowerCase().includes(searchValue.toLowerCase())
        })

        suggestionWordsGenerator(filteredWords)

    } else {
        autoCompleteWrapper.classList.remove('active')
    }
})

function suggestionWordsGenerator(wordsArray) {
    let listItemsArray = wordsArray.map(function (word) {
        return '<li>' + word + '</li>'
    })

    let customListItem
    if (!listItemsArray.length) {
        customListItem = '<li>' + searchInpueElem.value + '</li>'
    } else {
        customListItem = listItemsArray.join('')
    }

    autoCompleteBox.innerHTML = customListItem
    select()
}

function select () {
    let allListItems = autoCompleteBox.querySelectorAll('li') //NodeList
    allListItems.forEach(function (wordItem) {
        wordItem.addEventListener('click', function (event) {
            searchInpueElem.value = event.target.textContent
            autoCompleteWrapper.classList.remove('active')
        })
    })

}
*/