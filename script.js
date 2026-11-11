
/* =================================
   HURZA — JAVASCRIPT
================================= */

// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.textContent = isOpen ? "✕" : "☰";

  });

  // Close menu after clicking a navigation link

  navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.textContent = "☰";

    });

  });

}


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// PREVENT EMPTY LINKS FROM JUMPING TO THE TOP

document.querySelectorAll('a[href="#"]').forEach(link => {

  link.addEventListener("click", event => {
    event.preventDefault();
  });

});
