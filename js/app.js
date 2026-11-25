const profileSection = document.querySelector("#profile");
const topLink = document.querySelector(".top-button");

function updateScrollAppearance() {
  const showContent = profileSection.getBoundingClientRect().top < window.innerHeight;
  document.body.classList.toggle("scrolled", showContent);
  topLink.style.visibility = showContent ? "visible" : "hidden";
}

window.addEventListener("scroll", updateScrollAppearance, { passive: true });
window.addEventListener("resize", updateScrollAppearance);
window.addEventListener("pageshow", updateScrollAppearance);
updateScrollAppearance();
