const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");

navOpen.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "0%"
});
navClose.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "-1500%"
});
window.addEventListener("scroll", () => {
    if(pageYOffset >= 100){
        document.querySelector("header").classList.add("shrink")
    } else {
        document.querySelector("header").classList.remove("shrink")
    }
})