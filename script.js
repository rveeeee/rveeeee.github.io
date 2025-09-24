document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const sidebarMenu = document.querySelector(".sidebar-menu");
  const closeIcon = document.querySelector(".close-icon svg");

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
});
