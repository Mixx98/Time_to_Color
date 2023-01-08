const file = document.querySelector(
  ".main > .photo > .box > #slideShow > .slides"
);
let count = 13;

while (count != 0) {
  const item = document.createElement("li");
  item.innerHTML = `<img src="./img/slide/${count}.jpg" alt="photo" />`;
  file.appendChild(item);
  count--;
}

const slides = document.querySelector(
  ".main > .photo > .box > #slideShow > .slides"
);
const slideImg = document.querySelectorAll(
  ".main > .photo > .box > #slideShow > .slides > li"
);
let currentIdx = 0;
const slideCount = slideImg.length;
const prev = document.querySelector(".left");
const next = document.querySelector(".right");
const slideWidth = 300;
const slideMargin = 100;

slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

function moveSlide(num) {
  slides.style.left = -num * 400 + "px";
  currentIdx = num;
}

prev.addEventListener("click", function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener("click", function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});
