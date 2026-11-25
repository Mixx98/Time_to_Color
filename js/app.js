const topLink = document.querySelector(".top-button");

function updateScrollAppearance() {
  const progress = Math.max(0, Math.min(window.scrollY / 150, 1));
  document.body.style.setProperty("--scroll-progress", progress);
  const showContent = progress === 1;
  document.body.classList.toggle("scrolled", showContent);
  topLink.style.visibility = showContent ? "visible" : "hidden";
}

window.addEventListener("scroll", updateScrollAppearance, { passive: true });
window.addEventListener("pageshow", updateScrollAppearance);
updateScrollAppearance();
