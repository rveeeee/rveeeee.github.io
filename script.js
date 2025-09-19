document.addEventListener('DOMContentLoaded', function() {
    const closeSidebar = document.getElementById('close-sidebar')

    closeSidebar.addEventListener('click', function() {
        const sidebarMenu = document.querySelector('.sidebar-menu');
        sidebarMenu.classList.add('hidden');
    });

    const logo = document.querySelector(".portfolio-logo");
    const menuIcon = document.querySelector(".menu-icon svg");
    const aboutSection = document.getElementById("about-me");

  window.addEventListener("scroll", () => {
    const aboutTop = aboutSection.offsetTop;
    const aboutHeight = aboutSection.offsetHeight;
    const scrollPos = window.scrollY + window.innerHeight / 2; // middle of viewport

    if (scrollPos >= aboutTop && scrollPos <= aboutTop + aboutHeight) {
      // Inside About Me section → turn black
      logo.classList.remove("text-[#FFDE59]");
      logo.classList.add("text-black");

      menuIcon.classList.remove("text-[#FFDE59]");
      menuIcon.classList.add("text-black");
    } else {
      // Outside About Me section → stay white
      logo.classList.remove("text-black");
      logo.classList.add("text-[#FFDE59]");

      menuIcon.classList.remove("text-black");
      menuIcon.classList.add("text-[#FFDE59]");
    }
  });







});