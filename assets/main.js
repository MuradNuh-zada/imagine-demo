let burgerMenu = document.querySelector(".burger-menu"),
  mobileMenu = document.querySelector(".mobile-menu"),
  exitMobileMenu = document.querySelector(".exit i"),
  overlay = document.querySelector(".overlay");

burgerMenu.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(0px)";
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
});

function animationMenu(element) {
  element.addEventListener("click", function () {
    mobileMenu.style.transform = "translateX(100%)";
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
  });
}

animationMenu(exitMobileMenu);
animationMenu(overlay);
