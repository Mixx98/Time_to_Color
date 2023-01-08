const ul = document.querySelector(".main > .guest > .box > ul");
const guest_input = document.querySelector(
  ".main > .guest > .box > form > input"
);
const guest_form = document.querySelector(".main > .guest > .box > form");

let list = JSON.parse(localStorage.getItem("timeToColor")) || [];

// localStorage에서 값을 불러오는 구문
const guestTime = new Date();

function update() {
  ul.innerHTML = "";
  list.forEach((data) => {
    const dataList = data.split(":");
    guestTime.setHours(dataList[0], dataList[1], dataList[2], dataList[3]);
    const li = document.createElement("li");
    li.style = `color : ${timeToColor(guestTime)}`;
    li.innerText = data;
    ul.appendChild(li);
  });
}

update();

// localStorage에 값을 넣는 구문
const pattern = /[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,2}:[0-9]{1,3}/;
guest_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = guest_input.value.replace(/,/g, ":").replace(/(\s*)/g, "");

  if (pattern.test(inputValue)) {
    const valueList = inputValue.split(":");
    if (
      valueList[0] > 23 ||
      valueList[1] > 59 ||
      valueList[2] > 59 ||
      valueList[3] > 999
    ) {
      alert(over);
    } else {
      list.push(inputValue);
      guest_input.value = "";
      localStorage.setItem("timeToColor", JSON.stringify(list));
      update();
    }
  } else alert(over);
});
