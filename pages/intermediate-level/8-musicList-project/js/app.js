let $ = document
const players = $.querySelectorAll('.play-icon') //NodeList
const audiosElm = $.querySelectorAll('audio')  //NodeList

let musicName;
let currentIcon;

// Flag: Check if Playing
let isPlaying = false;

players.forEach((player) => {

    player.addEventListener('click', (event) => {
        currentIcon.nextElementSibling
        musicName = event.target.dataset.name
        currentIcon = event.target

        audiosElm.forEach((audio) =>  {
            if (audio.dataset.name === musicName) {
                if (audio.dataset.play === "false"){
                    audio.currentTime = 0
                    currentIcon.classList.replace("fa-play", "fa-pause");
                    audio.setAttribute("data-play", "true")
                    audio.play()

                } else {
                    currentIcon.classList.replace("fa-pause", "fa-play");
                    audio.pause()
                    audio.setAttribute("data-play", "false")
                }
            }
        })

    })

})
