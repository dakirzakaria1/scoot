"use strict";

const overlay = document.querySelector(".overlay");
const menuButton = document.querySelector(".menu-button");
const menuButtonIcon = menuButton.querySelector(".menu-button-icon");
const navMenu = document.querySelector(".nav-menu");

const toggleMenu = () => {
  navMenu.classList.toggle("close-nav-menu");
  overlay.classList.toggle("hidden");
  menuButtonIcon.src = `../images/icon-menu-${
    navMenu.classList.contains("close-nav-menu") ? "open" : "close"
  }.svg`;
};

menuButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

document.addEventListener("DOMContentLoaded", function () {
  const lazyBgElements = document.querySelectorAll(".lazy-bg");
  const lazyLoadBg = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const bgImage = element.getAttribute("data-bg");
        element.style.backgroundImage = `url(${bgImage})`;
        observer.unobserve(element);
      }
    });
  };
  const observer = new IntersectionObserver(lazyLoadBg, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  lazyBgElements.forEach((element) => observer.observe(element));
});
