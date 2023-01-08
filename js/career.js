//JSON파일에서 career 불러와서 집어넣기

const careerLocate = document.querySelector(".main > .career > .box > ul");
const careerJson = await fetch("./json/career.json").then((res) => res.json());

let careerValue = "";
async function getcareer() {
  for (let i = 0; i < careerJson.length; i++) {
    careerValue += "<li>" + careerJson[i].career + "</li>";
  }
  careerLocate.innerHTML = careerValue;
}

getcareer();
