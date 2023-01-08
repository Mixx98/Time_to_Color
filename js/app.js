//선언구문
const navList = document.querySelectorAll(".header > ul > li");
const profile = document.querySelector(".main > .profile");
const photo = document.querySelector(".main > .photo");
const career = document.querySelector(".main > .career");
const change = document.querySelector(".main > .color");
const guest = document.querySelector(".main > .guest");
const topButton = document.querySelector(".top-button");
const titleLocate = document.querySelector(".main > .title > h1");

const title = "YUNHYUNSUE";
const elementList = [profile, photo, career, change, guest];

// 헤더바 클릭시 이동구문
elementList.forEach((item, index) => {
  navList[index].addEventListener("click", () => {
    item.scrollIntoView({ behavior: "smooth" });
  });
});

// top버튼 관련 구문
topButton.style.visibility = "hidden";

window.addEventListener("scroll", () => {
  if (window.scrollY < 200) topButton.style.visibility = "hidden";
  else topButton.style.visibility = "visible";
});

topButton.addEventListener("click", () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});

// title 글자 입력
let titleValue = "";
const titleList = title.split("");
titleList.forEach((char) => {
  titleValue += "<p>" + char + "</p>";
});
titleLocate.innerHTML = titleValue;
