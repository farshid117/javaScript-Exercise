const $ = document;
const prev = $.querySelector(".prev")
const next = $.querySelector(".next")
let sliderItem = $.querySelector(".slider-item")
let imgSlider = $.querySelector(".img-slider")


let index = 0;
let timer = null

const imageSrc = ["image/1.jpg", "image/2.png", "image/3.jpg"]
//todo : Load image Function
function loadImg(index) {
  imgSlider.src = imageSrc[index]
 
}

function setAnimation() {
  sliderItem.classList.remove("active")
  setTimeout(() => {
    loadImg(index)
    sliderItem.classList.add("active")
    clearIntervalear(timer)
    timer = setInterval(nextItem, 3000)

  }, 100);
}
//todo: next & Prev Function
function nextItem() {
  index++
  if (index <= imageSrc.length - 1) {
    setAnimation()
  } else {
    index = 0
    setAnimation()
  }
  resetInterval(); // هنگام تغییر تصویر تایمر را ریست می‌کنیم
}

function prevItem() {
  index--
  if (index < 0) {
    index = imageSrc.length - 1
    setAnimation()
  } else {
    setAnimation()
  }
  resetInterval(); // هنگام تغییر تصویر تایمر را ریست می‌کنیم
}

//todo: متد برای متوقف کردن تایمر و تنظیم مجدد آن
function resetInterval() {
  clearInterval(timer); // توقف تایمر قبلی
  timer = setInterval(nextItem, 3000); // راه‌اندازی مجدد تایمر
}

//todo eventListeners section
prev.addEventListener("click", prevItem)
next.addEventListener("click", nextItem)
window.addEventListener("keyup", (event) => {
  if (event.keyCode === 39) nextItem()
  if (event.keyCode === 37) prevItem()
})

window.onload = () => {
  loadImg(0)
  timer = setInterval(nextItem, 3000)
}
