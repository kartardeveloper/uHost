const hamburger = document.getElementById("hamburger");
const mobileNav = document.querySelector(".mobile-nav");

let menuOpen = false;
hamburger.addEventListener("click", function () {
  if (!menuOpen) {
    hamburger.classList.remove("hamburger-close");
    hamburger.classList.add("hamburger-open");
    menuOpen = true;

    mobileNav.classList.add("mobile-nav__open");
  } else {
    hamburger.classList.remove("hamburger-open");
    hamburger.classList.add("hamburger-close");
    menuOpen = false;

    mobileNav.classList.remove("mobile-nav__open");
  }
});
