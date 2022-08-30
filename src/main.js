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

const wrapper = document.querySelector(".testimonials__wrapper");
const indicators = [...document.querySelectorAll(".indicators button")];

let currentTestimonial = 0; // Default 0

function testimonialSlider(matchMedia) {
  if (matchMedia.matches) {
    window.setInterval(() => {
      if (wrapper.classList.contains("second")) {
        wrapper.classList.remove("second");
        wrapper.classList.add("third");
      }
    }, 2000);
    window.setInterval(() => {
      if (wrapper.classList.contains("first")) {
        wrapper.classList.remove("first");
        wrapper.classList.add("second");
      }
    }, 4000);
    window.setInterval(() => {
      if (wrapper.classList.contains("third")) {
        wrapper.classList.remove("third");
        wrapper.classList.add("fourth");
      }
    }, 6000);

    window.setInterval(() => {
      if (wrapper.classList.contains("fourth")) {
        wrapper.classList.remove("fourth");
        wrapper.classList.add("first");
      }
    }, 8000);
  } else {
    indicators.forEach((item, i) => {
      item.addEventListener("click", () => {
        indicators[currentTestimonial].classList.remove("active");
        wrapper.style.marginLeft = `-${200 * i}%`;
        item.classList.add("active");
        currentTestimonial = i;
      });
    });
  }
}

const matchMedia = window.matchMedia("(min-width: 1440px)");
testimonialSlider(matchMedia);
