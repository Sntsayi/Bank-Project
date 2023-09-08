// js for toggles of faq
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
// js for nav bar
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
// js for btn of login
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
