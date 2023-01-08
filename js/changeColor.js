/*
하루를 ms로 변환하면 86,400,000(ms)가 됩니다.
24(H) * 60(M) * 60(S) * 1000(ms) = 86,400,000 ms

그리고 RGB로 만들수 있는 색상의 종류는 16,777,216개 입니다.
256(R) * 256(G) * 256(B) = 16,777,216

1ms당 색상을 하나씩 배정하기 위해서
Alpha값(투명도)를 5가지 추가해서 종류를 늘려줍니다.
16,777,216 * 5 = 83,886,080

완전히 일치하지 않아서 1ms당 하나씩은 힘들어도 
1.02996826171875 ms당 하나씩 배정되도록 합니다.
(1.02996826171875는 이후 밸런스값이라고 칭하겠습니다.)
86,400,000 / 83,886,080 = 1.02996826171875 

00시 00분 00초 000ms 부터 현재 시간까지의 ms를 구한다음 밸런스값으로 나눠줍니다.
5가지 Alpha값을 구하기 위해 나눠준 값을 5로 나눴을때의 나머지값을 구합니다.
그럼 0~4까지의 숫자중 하나가 나올텐데 Alpha값은 0~99를 입력해 줘야 하므로
20을 곱하고 20을 더하여 [20, 40, 60, 80, 100]의 Alpha값을 만듭니다.

RGB값을 만들기 위해 위에서 밸런스값으로 나눈 값을 5로 나누고 16진수 코드로 변환합니다.
색상코드는 6자리이기 때문에 자리수가 부족하면 앞에 0을 추가하여 자리수를 채워줍니다.
Alpha값은 99까지만 입력이 되기 때문에 100일때는 입력이 안되도록 합니다.
마지막으로 완성된 컬러코드에 #을 붙이고 마무리합니다.
*/

const form = document.querySelector(".main > .color > .box > form");
const input = document.querySelector("#inputTime");
const over =
  "다시 입력해 주세요!!\n( H, M, S, ms )\n\nH : 0 ~ 23\nM : 0 ~ 59\nS : 0 ~ 59\nms : 0 ~ 999";
const p = document.querySelectorAll(".main > .title > h1 > p");
const data = document.querySelector("#data");

const today = new Date();

// 시간을 컬러코드로 변경해주는 함수.
function timeToColor(today) {
  let color_code = "";
  let rgb = "";
  const standard = new Date();
  standard.setHours(0, 0, 0, 0);

  const ms = today - standard;
  const balance = 1.02996826171875;
  const color = Math.floor(ms / balance);
  const alpha = (color % 5) * 20 + 20;
  rgb = Math.floor(color / 5).toString(16);

  if (rgb.length < 6) {
    while (rgb.length != 6) {
      rgb = "0" + rgb;
    }
  }

  if (alpha != 100) color_code = "#" + rgb + alpha.toString();
  else color_code = "#" + rgb;

  return color_code;
}

function dataChange(today) {
  color_code = timeToColor(today);
  const str = `Time : ${today.getFullYear()}/${
    today.getMonth() + 1
  }/${today.getDate()}\t
                        ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}.${today.getMilliseconds()}<br>
                 Color : ${color_code}`;
  data.innerHTML = str;
  data.style.color = color_code;
  hover(color_code);
}

dataChange(today);

// hover을 구현
function hover(color_code) {
  p.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.color = color_code;
    });
    item.addEventListener("mouseout", () => {
      item.style.color = "white";
    });
  });
}

// 시간 수정 관련 코드
function timeChange() {
  const time = inputTime.value;
  let list = [0, 0, 0, 0];
  const timeList = time.replace(/,/g, ":").split(":");
  timeList.forEach((item, i) => {
    list[i] = Math.floor(item);
  });
  today.setHours(list[0], list[1], list[2], list[3]);

  if (list[0] > 23 || list[1] > 59 || list[2] > 59 || list[3] > 999)
    alert(over);
  else dataChange(today);
}

// 버튼 클릭, 엔터 기능 구현
form.addEventListener("submit", (event) => {
  event.preventDefault();
  timeChange();
  input.value = "";
});
