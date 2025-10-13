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

  // Slideshow Functionality large viewport and above
  let slideIndexLarge = 1;
  showSlidesLarge(slideIndexLarge);

  const previousButtonLarge = document.querySelectorAll(".previous-button2");
  const nextButtonLarge = document.querySelectorAll(".next-button2");

  function plusSlidesLarge(n) {
    showSlidesLarge((slideIndexLarge += n));
  }

  previousButtonLarge.forEach((button) => {
    button.addEventListener("click", () => plusSlidesLarge(-1));
  });
  nextButtonLarge.forEach((button) => {
    button.addEventListener("click", () => plusSlidesLarge(1));
  });

  function showSlidesLarge(n) {
    const slideContainersLarge = document.querySelectorAll(
      ".slide-container-large"
    );

    if (n > slideContainersLarge.length) slideIndexLarge = 1;
    if (n < 1) slideIndexLarge = slideContainersLarge.length;

    // Hide all slides
    slideContainersLarge.forEach((slide) => {
      slide.classList.add("hidden");
      slide.classList.remove("block", "md:flex");
    });

    // Show only the current slide
    const currentSlideLarge = slideContainersLarge[slideIndexLarge - 1];
    currentSlideLarge.classList.remove("hidden");
    currentSlideLarge.classList.add("block", "md:flex");
  }
});
