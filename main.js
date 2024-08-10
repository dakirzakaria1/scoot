"use strict";
let overlayDiv = document.getElementById("overlay");
let menuButton = document.getElementById("menu-button");
let menuButtonIcon = document.getElementById("menu-button-icon");
let navMenu = document.getElementById("menu");

let closeMenu = () => {
  menuButtonIcon.src = "../images/icon-menu-open.svg";
  navMenu.classList.remove("translate-x-0");
  overlayDiv.classList.add("hidden");
};

menuButton.addEventListener("click", () => {
  if (navMenu.classList.contains("translate-x-0")) {
    closeMenu();
  } else {
    menuButtonIcon.src = "../images/icon-menu-close.svg";
    navMenu.classList.add("translate-x-0");
    overlayDiv.classList.remove("hidden");
  }
});

overlayDiv.addEventListener("click", closeMenu);
