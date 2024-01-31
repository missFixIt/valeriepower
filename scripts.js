const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const menuIcon = document.querySelector(".fa-solid");
const closeIcon = document.querySelector(".fa-xmark");
const seeMore = document.querySelector(".see-more");

navToggle.addEventListener("click", menuFunction);
primaryNav.addEventListener("click", menuFunction);
seeMore.addEventListener("click", expandFunction);

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

function expandFunction() {
  const expanded = seeMore.getAttribute("expanded");
  // console.log(visibility);
  if (expanded === "false") {
    primaryNav.setAttribute("data-expanded", true);
    navToggle.setAttribute("aria-expanded", true);
    seeMore.className = "fa-solid fa-chevron-down see-more";
  } else {
    primaryNav.setAttribute("data-expanded", false);
    navToggle.setAttribute("aria-expanded", false);
    seeMore.className = "fa-solid fa-chevron-up see-more";
    // console.log(menuIcon.className);
    //write something here to remove the cut off from the text so it expands and takes up the whole screen with all the text and photos.
  }
}
