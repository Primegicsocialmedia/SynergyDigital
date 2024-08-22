document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("navbarToggle");
  const menu = document.getElementById("navbarMenu");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const image = document.querySelector(".animated-image");
  if (image) {
    const scrollPosition = window.scrollY;
    // Rotate the image slightly on scroll
    image.style.transform = `rotate(${scrollPosition / 30}deg)`;
  }
});

