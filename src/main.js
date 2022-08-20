/* eslint-disable import/no-absolute-path */
// eslint-disable-next-line import/no-unresolved
import "/scss/main.scss";

const navigationIcon = document.querySelector(".navigation__icon");
const iconClose = document.querySelector(".navigation__icon--close");
const iconOpen = document.querySelector(".navigation__icon--open");
const navigation = document.querySelector(".navigation__nav");
const overlay = document.querySelector(".navigation__overlay");

function toggleMenu() {
  overlay.classList.toggle("overlay");
  if (navigation.classList.contains("showMenu")) {
    navigation.classList.remove("showMenu");
    iconClose.style.display = "none";
    iconOpen.style.display = "block";
  } else {
    navigation.classList.add("showMenu");
    iconClose.style.display = "block";
    iconOpen.style.display = "none";
  }
}

navigationIcon.addEventListener("click", toggleMenu);
