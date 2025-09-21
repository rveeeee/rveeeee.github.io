document.addEventListener("DOMContentLoaded", function () {
  const closeSidebar = document.getElementById("close-sidebar");

  closeSidebar.addEventListener("click", function () {
    const sidebarMenu = document.querySelector(".sidebar-menu");
    sidebarMenu.classList.add("hidden");
  });

  const logo = document.querySelector(".portfolio-logo");
  const menuIcon = document.querySelector(".menu-icon svg");
  const navLinks = document.querySelector(".nav-links");

  const homeLink = document.querySelector('.nav-links a[href="/index.html"]');
  const aboutLink = document.querySelector('.nav-links a[href="#about-me"]');

  const homeSection = document.getElementById("home");
  const aboutSection = document.getElementById("about-me");

  function isSectionMostlyVisible(section) {
    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;
    const visibleHeight =
      Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);

    return visibleHeight >= sectionHeight * 0.6; // 60% visible = "active"
  }

  window.addEventListener("scroll", () => {
    if (isSectionMostlyVisible(aboutSection)) {
      // About Me section active
      logo.classList.replace("text-[#FFDE59]", "text-black");
      menuIcon.classList.replace("text-white", "text-black");
      navLinks.classList.replace("text-white", "text-black");

      // Home goes black in About Me
      homeLink.classList.remove("text-[#FFDE59]", "text-white");
      homeLink.classList.add("text-black");

      // About link highlight
      aboutLink.classList.remove("text-white");
      aboutLink.classList.add("text-[#078EFD]");
    } else if (isSectionMostlyVisible(homeSection)) {
      // Landing Page active
      logo.classList.replace("text-black", "text-[#FFDE59]");
      menuIcon.classList.replace("text-black", "text-white");
      navLinks.classList.replace("text-black", "text-white");

      // ✅ Home link highlight restored
      homeLink.classList.remove("text-black", "text-white");
      homeLink.classList.add("text-[#FFDE59]");

      // Reset About link
      aboutLink.classList.remove("text-[#078EFD]");
      aboutLink.classList.add("text-white");
    } else {
      // Other sections (Projects, Contact, etc.)
      logo.classList.replace("text-black", "text-[#FFDE59]");
      menuIcon.classList.replace("text-black", "text-white");
      navLinks.classList.replace("text-black", "text-white");

      // Home reset to white
      homeLink.classList.remove("text-[#FFDE59]", "text-black");
      homeLink.classList.add("text-white");

      aboutLink.classList.remove("text-[#078EFD]");
      aboutLink.classList.add("text-white");
    }
  });
});
