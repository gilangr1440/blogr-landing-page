const hamburgerButton = document.querySelector(".navbar__burger-button");
const headerNav = document.querySelector(".navbar");
const navbarMobile = document.querySelector(".navbar__mobile");
const dropdownMobile = document.querySelectorAll(".navbar__dropdown-text-cont");
const dropdownDesktop = document.querySelectorAll(".navbar__dropdown");

window.addEventListener("click", (e) => clickOutside(e));
window.addEventListener("click", (e) => clickOutsideDesktop(e));
hamburgerButton.addEventListener("click", (e) => mobileMenuOpen(e));

dropdownMobile.forEach((button) => {
  button.addEventListener("click", (e) => mobileDropdown(e));
});

dropdownDesktop.forEach((button) => button.addEventListener("click", (e) => desktopDropdown(e)));

function changeIcon() {
  let classArr = hamburgerButton.className.split(" ");

  if (classArr.includes("open")) {
    hamburgerButton.children[0].src = "images/icon-close.svg";
  } else if (!classArr.includes("open")) {
    hamburgerButton.children[0].src = "images/icon-hamburger.svg";
  }
}

function mobileMenuOpen(e) {
  navbarMobile.classList.toggle("open");
  hamburgerButton.classList.toggle("open");

  changeIcon();
}

function mobileDropdown(e) {
  e.target.parentElement.classList.toggle("open");
  e.target.parentElement.nextElementSibling.classList.toggle("open");
}

function desktopDropdown(e) {
  e.target.parentElement.children[1].classList.toggle("open");
  e.target.parentElement.children[2].classList.toggle("open");
}

function clickOutside(e) {
  if (!headerNav.contains(e.target)) {
    navbarMobile.classList.remove("open");
    hamburgerButton.classList.remove("open");
    changeIcon();
  }
}

function clickOutsideDesktop(e) {
  dropdownDesktop.forEach((button) => {
    if (!button.contains(e.target)) {
      button.children[1].classList.remove("open");
      button.children[2].classList.remove("open");
    }
  });
}
