const navOpen = document.getElementById("navOpen");
const navClose = document.getElementById("navClose");
const profilePassword = document.getElementById("profilePassword");
const profileName = document.getElementById("profileName");
const profileImg = document.getElementById("profileImg");
const profileNumber = document.getElementById("profileNumber");
const profileAddress = document.getElementById("profileAddress");
const profilePasswordToggle = document.getElementById("profilePasswordToggle");
const regName = document.getElementById("regName");
const regNum = document.getElementById("regNum");
const regImg = document.getElementById("regImg");
const regEmail = document.getElementById("regEmail");
const regPass = document.getElementById("regPass");
const regAddress = document.getElementById("regAddress");
const logPass = document.getElementById("logPass");
const logEmail = document.getElementById("logEmail");

function reg(){
    if(regName.value.length > 0 && regNum.value.length > 0 && regEmail.value.length > 0 && regPass.value.length > 0){
        localStorage.setItem("name", regName.value);
        localStorage.setItem("email", regEmail.value);
        localStorage.setItem("password", regPass.value);
        localStorage.setItem("address", regAddress.value);
        localStorage.setItem("number", regNum.value);
        console.log(regImg.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
        localStorage.setItem("img", reader.result);
        });
        reader.readAsDataURL(regImg.files[0]);
        window.location.replace("login.html")
    }
}
function login(){
    if(logPass.value === localStorage.getItem('password') && logEmail.value === localStorage.getItem('email')){
        window.location.replace("profile.html");
    }
}

function setDatas(){
    profileName.value = localStorage.getItem("name");
    profileNumber.value = localStorage.getItem("number");
    profileAddress.value = localStorage.getItem("address");
    profilePassword.value = localStorage.getItem("password");
    profileImg.src = localStorage.getItem("img");
}

navOpen.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "0%"
    document.querySelector("main").style.filter = "brightness(50%)";
    document.querySelector("footer").style.filter = "brightness(50%)";
    document.body.style.overflow = 'hidden';
});
navClose.addEventListener("click", () => {
    document.querySelector(".nav__menu").style.top = "-1500%"
    document.querySelector("main").style.filter = "brightness(100%)";
    document.querySelector("footer").style.filter = "brightness(100%)";
    document.body.style.overflow = 'auto';
});
window.addEventListener("scroll", () => {
    if(pageYOffset >= 100){
        document.querySelector("header").style.height = "80px";
    } else {
        document.querySelector("header").style.height = "112px";
    }
});
profilePasswordToggle.addEventListener("click", () => {
    if(profilePassword.type === "password"){
        profilePassword.type = "text";
        profilePasswordToggle.classList.remove("fa-eye-slash");
        profilePasswordToggle.classList.add("fa-eye");
    } else {
        profilePassword.type = "password"
        profilePasswordToggle.classList.remove("fa-eye");
        profilePasswordToggle.classList.add("fa-eye-slash");
    }
});