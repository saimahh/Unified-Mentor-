const images = document.querySelectorAll(".gallery img");
let currentIndex = 0;

// Show the first image initially
images[currentIndex].classList.add("active");

// Navigation buttons
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
});

prevButton.addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add("active");
});
