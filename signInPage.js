// js for menu bar
var navLinks = document.getElementById("navLinks");
var menuBar_Open = document.getElementById("menubar");
var menuBar_close = document.getElementById("closemenu");
menuBar_Open.addEventListener("click", () => {
  navLinks.style.right = "0";
  // navLinks.classList.add("open");
});
menuBar_close.addEventListener("click", () => {
  navLinks.style.right = "-200px";
});

// button of login
const login = document.querySelector(".login");
const btnPopLogin = document.querySelector(".btnLogin");
const closeLogin = document.getElementById("closeLogin");
// const body = document.querySelector(".body");

btnPopLogin.addEventListener("click", () => {
  login.classList.add("active-pop");
});

closeLogin.addEventListener("click", () => {
  login.classList.remove("active-pop");
});
