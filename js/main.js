const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");

navOpen.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "0%"
});
navClose.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "-1500%"
});
