// Select elements
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const elements = document.querySelectorAll(".menu > *");

// Function to hide elements and toggle icons
hamburger.addEventListener("click", () => {
  elements.forEach((el) => el.classList.add("hidden"));
  hamburger.classList.add("hidden");
  closeIcon.classList.remove("hidden");
});

// Function to show elements and toggle icons back
closeIcon.addEventListener("click", () => {
  elements.forEach((el) => el.classList.remove("hidden"));
  closeIcon.classList.add("hidden");
  hamburger.classList.remove("hidden");
});
