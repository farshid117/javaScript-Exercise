let $ = document
const playericons = $.querySelectorAll('.play-icon') //NodeList
const audiosElm = $.querySelectorAll('audio')  //NodeList

let musicIconName;
let currentIcon;

// Flag: Check if Playing
let isPlaying = false;

playericons.forEach((playericon) => {
    playericon.addEventListener('click', runMusic)
})

function runMusic(event) {
    currentIcon = event.target
    musicIconName = event.target.dataset.name

    playericons.forEach((playericon) => {
        playericon.classList.remove("active")
    })
    currentIcon.classList.add("active")

    audiosElm.forEach((audio) => {
        if (audio.dataset.name == musicIconName) {
          
            if (audio.dataset.play === "false") {
                currentIcon.classList.replace("fa-play", "fa-pause");
                audio.setAttribute("data-play", "true")
                audio.play()

            } else {
                currentIcon.classList.replace("fa-pause", "fa-play");
                audio.setAttribute("data-play", "false")
                audio.pause()
            }
        } else {
            audio.pause()
            audio.currentTime = 0
            audio.previousElementSibling.classList.replace("fa-pause", "fa-play");
            audio.setAttribute("data-play", "false")
        }
    })
}
