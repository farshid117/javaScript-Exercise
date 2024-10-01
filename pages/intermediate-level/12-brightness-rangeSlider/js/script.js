const bgImg = document.querySelector(".range-slider-container")
const inputRange = document.querySelector("#range")

inputRange.addEventListener("mousemove",(event) => {
    console.log(event.target.value)
    bgImg.style.filter = `brightness(${event.target.value}%)`

})

