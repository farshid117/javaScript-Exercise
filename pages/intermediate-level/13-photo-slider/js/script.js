const $ = document;
const prev = $.querySelector(".prev")
const next = $.querySelector(".next")
let sliderItem = $.querySelector(".slider-item")
let imgSlider  = $.querySelector(".img-slider")


let index = 0;

const imageSrc = ["image/1.jpg", "image/2.png", "image/3.jpg"]

function loadImg(index) {
  imgSlider.src = imageSrc[index]
}

function setAnimation(){
  sliderItem.classList.remove("active")
  setTimeout(() => {
    loadImg(index)
    sliderItem.classList.add("active")
  }, 100);
}

function nextItem() {
  index++
  if (index <= imageSrc.length - 1) {
    setAnimation()
  } else {
    index = 0
    setAnimation()
  }
}

function prevItem() {
   index--
   if(index < 0){
      index = imageSrc.length - 1
     setAnimation()
   }else{
     setAnimation()
   }
}




// setInterval(nextItem , 4000)
prev.addEventListener("click", prevItem)
next.addEventListener("click", nextItem)
window.addEventListener("keyup", (event)=>{
  if (event.keyCode === 39) nextItem()
  if (event.keyCode === 37) prevItem()
})

window.onload = ()=>{
  loadImg(0)
  setInterval(nextItem, 3000)
}
