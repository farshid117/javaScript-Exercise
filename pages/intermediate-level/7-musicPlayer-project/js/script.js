const imgCover = document.querySelector("#cover");
const title = document.querySelector(".music-titlee");
const artist = document.getElementById("music-artist");
const audioElm = document.querySelector("audio");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const backgroundImage = document.getElementById("background-img");

// Current Song
let songIndex = 0;

// audioElm
const songs = [
  {
    path:"media/html.m4a",
    displayName: "Html Padcast",
    artist: "Ozbi",
    cover: "images/cover1.jpg"
  },
  {
    path: "media/kar.m4a",
    displayName: "Developing",
    artist: "Flora Cash",
    cover: "images/peakpx.jpg",
  },
  {
    path:"media/bazar.m4a",
    displayName: "Earn",
    artist: "Linkin Park",
    cover: "images/cover2.jpg"
  },
];
// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  audioElm.src = song.path;
  changeCover(song.cover);
}

function changeCover(cover) {
  imgCover.classList.remove("active")

  setTimeout(() => {
    imgCover.src = cover
    imgCover.classList.add("active")
  }, 100)

  backgroundImage.src = cover
}

// Flag :Check Playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");
  audioElm.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");
  audioElm.pause();
}

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Update Progress Bar & Time
function updateProgressBar(event) {
  if (isPlaying) {
    const duration = event.srcElement.duration; //? refer to audio Tag ~ event.target

    const currentTime = event.target.currentTime // update by user - read /write Property

    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width  = progressPercent + "%";

    // Calculate display for duration
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds   = Math.floor(duration % 60);
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    // Delay switching duration Element to avoid NaN
    if (durationSeconds) {
      durationEl.textContent = durationMinutes + ":" + durationSeconds;
    }
    // Calculate display for currentTime --> convert second to Minutes
    const currentMinutes = Math.floor(currentTime / 60);
    let   currentSeconds = Math.floor(currentTime % 60);
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    currentTimeEl.innerText = currentMinutes + ":" + currentSeconds;
  }
}

// Set Progress Bar
function setProgressBar(event) {
  
  const width = this.clientWidth; // ~ event.target.clientWidth in pixels
  const currentWithX = event.offsetX; //width of point that click in progressbar from left in pixels
  const duration = audioElm.duration; //in seconds
  audioElm.currentTime = (currentWithX / width) * duration //accure timeupdate event in seconds --> happen timeupdate Event
  
  console.log("duration: ", duration)
  console.log("currentWithX: ", currentWithX)
  console.log("clientWidth: ", width)
}

// Event Listeners
// Play or Pause Event Listener
playBtn.addEventListener("click", function () {
  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
progressContainer.addEventListener("click", setProgressBar);
audioElm.addEventListener("timeupdate", updateProgressBar);
audioElm.addEventListener("ended", nextSong);

// On Load - Select First Song
loadSong(songs[songIndex]);
