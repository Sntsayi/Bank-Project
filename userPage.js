// first:create mousemove liseteners for images:
const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

const dragStart = (e) => {
  //   updating global variables value on mouse down event;
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
carousel.addEventListener("mouseleave", dragStop);

// add listener for click icon
const arrowIcon = document.querySelectorAll(".wrapper i");
firstImg = carousel.querySelectorAll("img")[0];

const showHideIcons = () => {
  // showing and hiding prev/next  icon  according to carousel scroll left value.
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //getting max scrolable width.
  arrowIcon[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcon[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};

arrowIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    //if clicked icon is leftt ,reduce width value from the carousel scroll left else add to it
    let firstImgWidth = firstImg.clientWidth + 800; //getting first image and adding 14 marging value.
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); //calling showHideIcons after 60ms
  });
});
