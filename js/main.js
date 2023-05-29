<<<<<<< HEAD
// Initialization for ES Users
import {
  Collapse,
  initTE,
} from "tw-elements";

initTE({ Collapse });
=======
const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");

navOpen.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "0%"
});
navClose.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "-150%"
});
>>>>>>> 0612e257827f8f90bea352826f51f24c14172935
