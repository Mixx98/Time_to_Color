const mainContent = document.querySelector(".main");
const topLink = document.querySelector(".top-button");

function updateScrollAppearance() {
  const showContent = mainContent.getBoundingClientRect().top < -120;
  document.body.classList.toggle("scrolled", showContent);
  topLink.style.visibility = showContent ? "visible" : "hidden";
}

window.addEventListener("scroll", updateScrollAppearance, { passive: true });
window.addEventListener("pageshow", updateScrollAppearance);
updateScrollAppearance();
