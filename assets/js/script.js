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
  mobileMenu.style.display = "block"; // FIX THIS///
  mobileMenu.style.transform = "translateX(0)";
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden"; // Prevents scrolling while menu is open
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.style.display = "none"; // FIX THIS///
  mobileMenu.style.transform = "translateX(100%)";
  overlay.classList.remove("visible");
  document.body.style.overflow = ""; // Restores scrolling
});

// Also close menu when clicking on the overlay
overlay.addEventListener("click", () => {
  mobileMenu.style.display = "none"; // FIX THIS///
  mobileMenu.style.transform = "translateX(100%)";
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
});

// For desktop nav

dropdownIconContainer.forEach((link) => {
  const icon = link.querySelector(".desktop-menu-dropdown");
  const dropdown = link.nextElementSibling;

  link.addEventListener("mouseover", () => {
    icon.src = "./assets/images/icon-arrow-up.svg";

    if (dropdown && dropdown.classList.contains("dropdown")) {
      dropdown.style.visibility = "visible";
      dropdown.style.opacity = "1";
    }
  });

  link.addEventListener("mouseout", () => {
    icon.src = "./assets/images/icon-arrow-down.svg";

    if (dropdown && dropdown.classList.contains("dropdown")) {
      dropdown.style.visibility = "hidden";
      dropdown.style.opacity = "0";
    }
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
