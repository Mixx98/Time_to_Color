const timeError = "시 0–23, 분·초 0–59, 밀리초 0–999 범위에서 입력해 주세요.";

function parseTime(value) {
  const parts = value.trim().split(/\s*[:,]\s*/);
  if (parts.length !== 4 || parts.some((part, index) => {
    return !/^\d{1,3}$/.test(part) || part.length > (index === 3 ? 3 : 2)
      || Number(part) > [23, 59, 59, 999][index];
  })) return null;
  return parts.map(Number);
}

function formatTime(parts) {
  return parts.map((part, index) => String(part).padStart(index === 3 ? 3 : 2, "0")).join(":");
}

function clockTime() {
  const now = new Date();
  return [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()];
}

function timeToColor([hours, minutes, seconds, milliseconds]) {
  const elapsed = ((hours * 60 + minutes) * 60 + seconds) * 1000 + milliseconds;
  const color = Math.floor(elapsed / 1.02996826171875);
  const rgb = Math.floor(color / 5).toString(16).padStart(6, "0");
  const alpha = (color % 5 + 1) * 20;
  return "#" + rgb + (alpha === 100 ? "" : String(alpha));
}

const liveSwatch = document.querySelector("#live-swatch");
const liveTime = document.querySelector("#live-time");
const selectedSwatch = document.querySelector("#selected-swatch");
const colorResult = document.querySelector("#color-result");
const timeInput = document.querySelector("#inputTime");
const colorError = document.querySelector("#color-error");

function updateLiveColor() {
  const time = clockTime();
  liveSwatch.style.setProperty("--sample", timeToColor(time));
  liveTime.textContent = formatTime(time).slice(0, 8);
}

function showColor(time) {
  const color = timeToColor(time);
  selectedSwatch.style.setProperty("--sample", color);
  colorResult.textContent = formatTime(time) + " · " + color.toUpperCase();
}

updateLiveColor();
setInterval(updateLiveColor, 1000);
showColor(clockTime());

document.querySelector("#color-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const time = parseTime(timeInput.value);
  colorError.textContent = time ? "" : timeError;
  if (!time) {
    timeInput.setAttribute("aria-invalid", "true");
    return;
  }
  timeInput.removeAttribute("aria-invalid");
  showColor(time);
});
