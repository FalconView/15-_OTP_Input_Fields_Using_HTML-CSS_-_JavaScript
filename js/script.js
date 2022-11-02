const carouselContainer = document.querySelector(".carouselContainer");
const slides = document.querySelectorAll(".slides");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let counter = 1;
const size = slide[0].clientWidth;
carouselContainer.style.transform = "translateX(" + -size * counter + "px";
next.addEventListener("click", () => {
  if (counter >= slides.length) return;
  carouselContainer.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselContainer.style.transform = "translateX(" + -size * counter + "px";
});
