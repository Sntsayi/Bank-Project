// js for cardinput box

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, " $& ");
}

document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerHTML = format(
    document.querySelector(".card-number-input").value
  );
};
// js for data box
document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerHTML = format(
    document.querySelector(".month-input").value
  );
};
//   .............
document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerHTML = format(
    document.querySelector(".year-input").value
  );
};
//   js for cvv2
document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".card-cvv2-number").innerHTML = format(
    document.querySelector(".cvv-input").value
  );
};
//css for back of bankcard
document.querySelector(".front").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};
// ..........
document.querySelector(".back").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};
// js for timer for dynamicPassword...............................
const request_btn = document.querySelector(".request-btn");
const containerDynamicPassword = document.querySelector(".container");
// get random number between 1000 and  10000
let range = { min: 1000, max: 10000 };
let delta = range.max - range.min;
const rand = Math.round(range.min + Math.random() * delta);
//timer........................
const initTimer = () => {
  //getting data-timer attribute from html page
  let timer = request_btn.dataset.timer;
  request_btn.classList.add("timeout");
  containerDynamicPassword.innerHTML = timer;
  // create initcounter
  const initCounter = setInterval(() => {
    if (timer > 0) {
      timer--;
      return (containerDynamicPassword.innerHTML = timer);
    } else {
      containerDynamicPassword.innerHTML = rand;
    }
    clearInterval(initCounter);
  }, 1000); //1000ms = 1s
};

request_btn.addEventListener("click", initTimer);
