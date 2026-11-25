const guestForm = document.querySelector("#guest-form");
const guestInput = document.querySelector("#guest-time");
const guestError = document.querySelector("#guest-error");
const guestList = document.querySelector("#guest-list");
const guestKey = "timeToColor";

function appendGuestTime(time) {
  const item = document.createElement("li");
  const swatch = document.createElement("span");
  swatch.className = "guest-swatch";
  swatch.setAttribute("aria-hidden", "true");
  swatch.style.backgroundColor = timeToColor(time);
  item.append(swatch, formatTime(time));
  guestList.append(item);
}

function loadGuestTimes() {
  try {
    const saved = JSON.parse(localStorage.getItem(guestKey));
    return Array.isArray(saved) ? saved.filter((entry) => typeof entry === "string" && parseTime(entry)) : [];
  } catch {
    return [];
  }
}

const guestTimes = loadGuestTimes();
guestTimes.forEach((entry) => appendGuestTime(parseTime(entry)));

guestForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const time = parseTime(guestInput.value);
  if (!time) {
    guestInput.setAttribute("aria-invalid", "true");
    guestError.textContent = timeError;
    return;
  }
  guestInput.removeAttribute("aria-invalid");
  const nextTimes = [...guestTimes, formatTime(time)];
  try {
    localStorage.setItem(guestKey, JSON.stringify(nextTimes));
  } catch {
    guestError.textContent = "이 브라우저에서 기록을 저장할 수 없습니다.";
    return;
  }
  guestTimes.push(nextTimes.at(-1));
  appendGuestTime(time);
  guestInput.value = "";
  guestError.textContent = "";
});
