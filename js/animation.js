// 스크롤시 밝아지는 구문
const bgColor = document.querySelector("body");
const mainDiv = document.querySelectorAll(".main > div:not(:first-child)");
const titleDiv = document.querySelector(".main > div:first-child");
const headerDiv = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  if (value > 150) {
    bgColor.style.backgroundColor = "#FFF";
    // titleDiv.style.opacity = 0;
    // titleDiv.style.transform = "translateY(20px)";
    titleDiv.style.animation = "slideOut 1s ease-out forwards";
    // headerDiv.style.opacity = 0;
    // headerDiv.style.transform = "translateY(20px)";
    headerDiv.style.animation = "slideOut 1s ease-out forwards";
    animation();
  } else {
    bgColor.style.backgroundColor = "#000";
    mainDiv.forEach((item) => {
      item.style.animation = "slideOut 1s ease-out forwards";
      // item.style.opacity = 0;
      // item.style.transform = "translateY(20px)";
      // titleDiv.style.opacity = 1;
      // titleDiv.style.transform = "translateY(0px)";
      titleDiv.style.animation = "slideIn 1s ease-in forwards";
      // headerDiv.style.opacity = 1;
      // headerDiv.style.transform = "translateY(0px)";
      headerDiv.style.animation = "slideIn 1s ease-in forwards";
    });
  }
});

// 각각 애니메이션 구문
function animation() {
  let observer = new IntersectionObserver((list) => {
    list.forEach((item) => {
      if (item.isIntersecting) {
        item.target.style.animation = "slideIn 1s ease-in forwards";
      } else {
        item.target.style.animation = "slideOut 1s ease-out forwards";
      }
    });
  });

  mainDiv.forEach((item) => {
    observer.observe(item);
  });
}
