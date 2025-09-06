import "./style.css";

const body = document.body;
const slides = document.querySelectorAll<HTMLElement>(".slide");
const left = document.getElementById("left") as HTMLDivElement;
const right = document.getElementById("right") as HTMLDivElement;

let active = 0;

right.addEventListener("click", () => {
  active++;

  if (active > slides.length - 1) {
    active = 0;
  }
  setBg();
  setActiveSlide();
});

left.addEventListener("click", () => {
  active--;

  if (active < 0) {
    active = slides.length - 1;
  }
  setBg();
  setActiveSlide();
});

setBg();
function setBg() {
  body.style.backgroundImage = slides[active].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[active].classList.add("active");
  });
}
