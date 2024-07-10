let $ = document
const hourElem = $.querySelector('#hour')
const minuteElem = $.querySelector('#minute')
const secondElem = $.querySelector('#seconds')


setInterval(() => {
    let timeNow =new Date()
    let hour = timeNow.getHours()
    let minutes = timeNow.getMinutes()
    let seconds = timeNow.getSeconds()
    hourElem.innerHTML   = hour < 10 ? '0' + hour : hour
    minuteElem.innerHTML = minutes < 10 ? '0' + minutes : minutes
    secondElem.innerHTML = seconds < 10 ? '0' + seconds : seconds

}, 1000)























/* setInterval(function () {
    let myDate = new Date()

    let nowHour = myDate.getHours()
    let nowMinute = myDate.getMinutes()
    let nowSecond = myDate.getSeconds()

    if (nowHour < 10) {
        nowHour = '0' + nowHour
    }
    if (nowMinute < 10) {
        nowMinute = '0' + nowMinute
    }
    if (nowSecond < 10) {
        nowSecond = '0' + nowSecond
    }

    hourElem.innerHTML = nowHour
    minuteElem.innerHTML = nowMinute
    secondElem.innerHTML = nowSecond

    console.log(myDate);
}, 1000); */