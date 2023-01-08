//JSON파일에서 profile 불러와서 집어넣기

const profileLocate = document.querySelector(
  ".main > .profile > .box > div > div"
);
const profileJson = await fetch("./json/profile.json").then((res) =>
  res.json()
);

let profileValue = "";
async function getProfile() {
  for (let i = 0; i < profileJson.length; i++) {
    profileValue += "<p>" + profileJson[i].profile + "</p>";
  }
  profileLocate.innerHTML = profileValue;
}

getProfile();
