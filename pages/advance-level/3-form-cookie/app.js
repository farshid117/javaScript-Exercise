

function getCookie(cookieName) {
    let cookiesArray = document.cookie.split(';')

    let CookieValue = null
    cookiesArray.some(cookie => {
        if (cookie.includes(cookieName)) {
            CookieValue = cookie.substring(cookie.indexOf('=') + 1)
            return true
        }
    })

    return CookieValue
}

window.onload = () => {
    if (!getCookie("login-token")){
        location.href = "http://127.0.0.1:5504/pages/advance-level/3-form-cookie/form-cookie.html"
    }
}