const colorBtns = document.querySelectorAll('.btn')//NodeList

colorBtns.forEach(colorBtn => {
    colorBtn.addEventListener('click',(event) => {
        let selectedColor = event.target.dataset.color
        //Access to Css Variable in Js
        document.documentElement.style.setProperty('--theme-color', selectedColor)
        console.log(document.documentElement.style.getPropertyValue('--theme-color'))
    })
})

