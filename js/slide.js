const photos = [13, 12, 11, 9, 8, 7, 6, 5, 4, 2, 1];
const slides = document.querySelector(".slides");
const count = document.querySelector("#photo-count");
const previous = document.querySelector(".left");
const next = document.querySelector(".right");

photos.forEach((number, index) => {
  const item = document.createElement("li");
  const photo = new Image();
  photo.src = "./img/slide/" + number + ".jpg";
  photo.alt = "사진 " + (index + 1);
  photo.loading = "lazy";
  item.append(photo);
  slides.append(item);
});

function movePhoto(direction) {
  const step = slides.children[1].offsetLeft - slides.children[0].offsetLeft;
  const max = slides.scrollWidth - slides.clientWidth;
  const target = slides.scrollLeft + direction * step;
  slides.scrollLeft = target > max + 1 && slides.scrollLeft >= max - 1
    ? 0
    : target < 0 && slides.scrollLeft <= 1 ? max : target;
}

slides.addEventListener("scroll", () => {
  const step = slides.children[1].offsetLeft - slides.children[0].offsetLeft;
  count.textContent = (Math.round(slides.scrollLeft / step) + 1) + " / " + photos.length;
}, { passive: true });

previous.addEventListener("click", () => movePhoto(-1));
next.addEventListener("click", () => movePhoto(1));
