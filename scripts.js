"use strict";

const overlay = document.querySelector(".overlay");
const menuButton = document.querySelector(".menu-button");
const menuButtonIcon = menuButton.querySelector(".menu-button-icon");
const navMenu = document.querySelector(".nav-menu");

const toggleMenu = () => {
  navMenu.classList.toggle("close-nav-menu");
  overlay.classList.toggle("hidden");
  menuButtonIcon.src = `../images/icon-menu-${navMenu.classList.contains("close-nav-menu") ? "open" : "close"}.svg`;
};

menuButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

