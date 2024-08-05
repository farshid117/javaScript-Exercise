
/* 
let customScroll = document.querySelector('#scroll')

window.addEventListener('scroll', function () {
    
    let scrollTop = window.scrollY

    let documentHeight = document.body.clientHeight

    let windowHeight = window.innerHeight

    let scrollPercent = scrollTop / (documentHeight - windowHeight)

    let scrollPercentRounded = Math.round(scrollPercent * 100)

    customScroll.style.width = scrollPercentRounded + '%'

    console.log(scrollPercentRounded);
})
 */
let customScroll = document.querySelector('#scroll')
window.addEventListener('scroll', function(){
    // console.log(document.documentElement.scrollTop)
    // console.log("scrollY is : ", window.scrollY)
    let scrollY = window.scrollY
    let clientHeight = document.body.clientHeight
    let innerHeight = window.innerHeight

    let scrollPercent = Math.round(scrollY / (clientHeight - innerHeight) * 100)
    console.log("scrollPercent: ", scrollPercent);
    customScroll.style.width = scrollPercent+ "%"
})