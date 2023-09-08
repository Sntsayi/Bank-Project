/*js for captcha*/
const captcha = document.querySelector(".captcha"),
  reloadBtn = document.querySelector(".rerload-btn"),
  inputField = document.querySelector(".inputCaptcha"),
  checkBtn = document.querySelector(".check-btn"),
  statusTxt = document.querySelector(".status-txt");

//all letters for captcha:
let allCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
//getting random 6 characters for captcha
function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    let randomChar =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerHTML += randomChar; //passing the rancdom 6 characters to the captcha label
  }
}
getCaptcha();
reloadBtn.addEventListener("click", () => {
  captcha.innerHTML = "";
  getCaptcha();
});
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  statusTxt.style.display = "block";
  //adding space after each value of users enterd captcha because I've added spaces while generation captcha;
  let inputValue = inputField.value;
  if (inputValue == captcha.innerHTML) {
    statusTxt.style.color = "white";
    statusTxt.innerHTML = "Identity Confirmed!";
    setTimeout(() => {
      statusTxt.style.display = "";
      inputField.value = "";
      captcha.innerHTML = "";
      getCaptcha();
    }, 7000); //after 7 second remove all captcha you have entered.
  } else {
    statusTxt.style.color = "white";
    statusTxt.innerHTML = " Captcha not matched .Please try again!!";
  }
});
