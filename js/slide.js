const photos = [13, 12, 11, 9, 8, 7, 6, 5, 4, 2, 1];
const photo = document.querySelector("#photo");
const count = document.querySelector("#photo-count");
const previous = document.querySelector("#previous-photo");
const next = document.querySelector("#next-photo");
let photoIndex = 0;

function showPhoto(index) {
  photoIndex = (index + photos.length) % photos.length;
  photo.src = "./img/slide/" + photos[photoIndex] + ".jpg";
  count.textContent = (photoIndex + 1) + " / " + photos.length;
}

previous.addEventListener("click", () => showPhoto(photoIndex - 1));
next.addEventListener("click", () => showPhoto(photoIndex + 1));
