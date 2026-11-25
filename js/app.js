const topLink = document.querySelector(".top-button");

function updateScrollAppearance() {
  const showContent = window.scrollY > 150;
  document.body.classList.toggle("scrolled", showContent);
  topLink.style.visibility = showContent ? "visible" : "hidden";
}

window.addEventListener("scroll", updateScrollAppearance, { passive: true });
window.addEventListener("pageshow", updateScrollAppearance);
updateScrollAppearance();
