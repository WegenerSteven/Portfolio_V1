document.addEventListener("DOMContentLoaded", () => {
  // Initialize AOS (Animate On Scroll) library

  AOS.init({
    duration: 1000, // Animation duration
    offset: 100, // Trigger animation when element is 100px in viewport
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

//typing animation
const texts = [
  "A Passionate Web Developer",
  "A Cloud Enthusiast",
  "Software Engineer",
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

const type = () => {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else {
    setTimeout(type, 100);
  }
};
document.addEventListener("DOMContentLoaded", type);
