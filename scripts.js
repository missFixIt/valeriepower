const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const hamburgerIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-xmark");
navToggle.addEventListener("click", menuFunction);
primaryNav.addEventListener("click", menuFunction);
function menuFunction() {
  const visibility = primaryNav.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    hamburgerIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
  }
}
