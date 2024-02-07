const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuIcon = document.querySelector(".fa-solid");
const closeIcon = document.querySelector(".fa-xmark");

navToggle.addEventListener("click", menuFunction);
primaryNav.addEventListener("click", menuFunction);

function menuFunction() {
  const visibility = primaryNav.getAttribute("data-visible");
  // console.log(visibility);
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    menuIcon.className = "fa-solid fa-xmark";
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    menuIcon.className = "fa-solid fa-bars";
    console.log(menuIcon.className);
  }
}

// const paraGraphs = document.getElementsByClassName("paragraphs");
const seeMore = document.getElementsByClassName("see-more");

var i;
for (i = 0; i < seeMore.length; i++) {
  seeMore[i].addEventListener("click", function () {
    this.previousElementSibling.classList.toggle("expanded");
    if (this.classList.contains("fa-chevron-down")) {
      this.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      this.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
}
