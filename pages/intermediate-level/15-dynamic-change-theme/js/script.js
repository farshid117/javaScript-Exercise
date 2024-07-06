const colorBtns = document.querySelectorAll('.btn')//NodeList

colorBtns.forEach(colorBtn => {
    colorBtn.addEventListener('click',(event) => {
        let selectedColor = event.target.dataset.color
        document.documentElement.style.setProperty('--theme-color', selectedColor)
        console.log(document.documentElement.style.getPropertyValue('--theme-color'))
    })
})

