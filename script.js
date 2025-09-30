document.addEventListener("DOMContentLoaded", function () {
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

  const slides = document.querySelector(".slides");
  const slideCount = document.querySelectorAll(".slide").length;
  let index = 0;

  document.getElementById("#next").addEventListener("click", () => {
    index = (index + 1) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });

  document.getElementById("#prev").addEventListener("click", () => {
    index = (index - 1 + slideCount) % slideCount;
    slides.style.transform = `translateX(-${index * 100}%)`;
  });
});
