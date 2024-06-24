let $ = document
const players = $.querySelectorAll('.play-icon')
const audios = $.querySelectorAll('audio')

let musicName;
let currentInon;

// Check if Playing
let isPlaying = false;

players.forEach(function (player) {

    player.addEventListener('click', function (event) {
        musicName = event.target.dataset.name
        currentIcon = event.target

        audios.forEach(function (audio) {
            if (audio.dataset.name === musicName) {
                if (audio.dataset.play === "false"){
                    console.log(audio.dataset.play)
                    audio.currentTime = 0
                    currentIcon.classList.replace("fa-pause", "fa-play");
                    console.log(currentIcon.classList)
                    audio.setAttribute("data-play", "true")
                    // audio.dataset.play = "true"
                    console.log(audio.dataset.play)
                    audio.play()
                } else {
                    currentIcon.classList.replace("fa-play", "fa-pause");
                    audio.setAttribute("data-play", "false")
                    // audio.dataset.play = "false"
                    console.log(audio.dataset.play)
                    console.log(currentIcon.classList)
                    audio.pause()
                }
            } else {
                currentIcon.classList.replace("fa-play", "fa-pause");
                console.log(currentIcon.classList)
                audio.setAttribute("data-play", "false")
                // audio.dataset.play = "false"
                console.log(audio.dataset.play)
                audio.pause()
            }
        })

    })

})
