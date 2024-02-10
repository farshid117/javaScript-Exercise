//todo: show nav_menu with toggle hamberger menu 
const navMenu = document.querySelector(".nav__menu");
const hambergurMenu = document.querySelector(".nav__toggle");

hambergurMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
});
//todo: Hidden nav__menu by Click on nav__menu in mobile-first`
navMenu.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
})

//todo: navbar scroll behavior 
const nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    // console.log("scroll:", window.scrollY)
    if (window.scrollY > 30) {
        nav.classList.add("nav-scroll");
    } else {
        nav.classList.remove("nav-scroll")
    }
}) 

//todo: Move .active-link between nav-items by js
const navItems = document.querySelectorAll(".nav__item ");
//navItem is NodeList simular to Array.accept forEach and reject split or join method
// console.log("navItems: ", navItems);
navItems.forEach(navItem => {
    navItem.addEventListener("click", () => {
        for (let j = 0; j < navItems.length; j++) {
            navItems[j].classList.remove("active-link");
        }

        navItem.classList.add("active-link")
    })
})

/*Two approach to convert NodeList to Array*/
/*
   1 : const navItemsArr = Array.from(navItems)
   2: const navItemsArr = Array.prototype.slice.call(navItems) 
*/