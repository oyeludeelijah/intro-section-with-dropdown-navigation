"use strict";

const overlay = document.getElementById("overlay");
const dropdownIconContainer = document.querySelectorAll(
  ".dropdown-icon-container"
);
const pageContainer = document.getElementById("page-container");
const mobileMenu = document.getElementById("mobile--menu");
const mobileMenuOpen = document.getElementById("mobile--menu_open");
const mobileMenuClose = document.getElementById("mobile--menu_close");

mobileMenuOpen.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
});

function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
}

mobileMenuClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// For desktop nav

dropdownIconContainer.forEach((link) => {
  const icon = link.querySelector(".desktop-menu-dropdown");
  const dropdown = link.nextElementSibling;

  link.addEventListener("mouseenter", () => {
    icon.src = "./assets/images/icon-arrow-up.svg";
    dropdown?.classList.add("dropdown-visible");
  });

  link.addEventListener("mouseleave", () => {
    icon.src = "./assets/images/icon-arrow-down.svg";
    dropdown?.classList.remove("dropdown-visible");
  });
});

// for mobile nav
const MobileDropdownIconContainer = document.querySelectorAll(
  ".mobile-dropdown-icon-container"
);

MobileDropdownIconContainer.forEach((link) => {
  const icon = link.querySelector(".mobile-menu-dropdown");
  const dropdown = link.nextElementSibling;

  let active = false;

  link.addEventListener("click", () => {
    active = !active;
    icon.src = active;

    if (active) {
      icon.src = "./assets/images/icon-arrow-up.svg";
      dropdown.classList.toggle("hidden");
    } else {
      icon.src = "./assets/images/icon-arrow-down.svg";
      dropdown.classList.toggle("hidden");
    }
  });
});
