const switchElement = document.querySelector('.switch')
const moonIcon = document.querySelector('.moon')
const flicker = document.querySelector('.flicker')

switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  document.body.classList.toggle('dark')

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
})

window.addEventListener("DOMContentLoaded", () => {
  let localStorageTheme = localStorage.getItem('theme')
  if (localStorageTheme === "dark") {
    document.body.classList.add('dark')
  }
})