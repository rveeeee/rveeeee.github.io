document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Menu Functionality
  const menuIcon = document.querySelector(".menu-icon");
  const sidebarMenu = document.querySelector(".sidebar-menu");
  const closeIcon = document.querySelector(".close-icon svg");
  const sidebarLinks = document.querySelectorAll(".sidebar-menu a");

  function openSidebar() {
    sidebarMenu.classList.remove("translate-x-full", "opacity-0");
    sidebarMenu.classList.add("translate-x-0", "opacity-100");
  }

  function closeSidebar() {
    sidebarMenu.classList.add("translate-x-full", "opacity-0");
    sidebarMenu.classList.remove("translate-x-0", "opacity-100");
  }

  menuIcon.addEventListener("click", openSidebar);
  closeIcon.addEventListener("click", closeSidebar);

  for (var i = 0; i < sidebarLinks.length; i++) {
    sidebarLinks[i].addEventListener("click", closeSidebar);
  }

  // Slideshow Functionality
  let slideIndex = 1;
  showSlides(slideIndex);

  const previousButton = document.querySelectorAll(".previous-button");
  const nextButton = document.querySelectorAll(".next-button");

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  previousButton.forEach((button) => {
    button.addEventListener("click", () => plusSlides(-1));
  });
  nextButton.forEach((button) => {
    button.addEventListener("click", () => plusSlides(1));
  });

  function showSlides(n) {
    const slideContainers = document.querySelectorAll(".slide-container");

    if (n > slideContainers.length) slideIndex = 1;
    if (n < 1) slideIndex = slideContainers.length;

    // Hide all slides
    slideContainers.forEach((slide) => {
      slide.classList.add("hidden");
      slide.classList.remove("block", "md:flex");
    });

    // Show only the current slide
    const currentSlide = slideContainers[slideIndex - 1];
    currentSlide.classList.remove("hidden");
    currentSlide.classList.add("block", "md:flex");
  }
});
