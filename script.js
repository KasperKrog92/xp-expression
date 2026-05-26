const form = document.querySelector("[data-contact-form]");
const confirmation = document.querySelector("[data-form-confirm]");
const navToggle = document.querySelector("[data-nav-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const videoLinks = document.querySelectorAll("[data-video-id]");

if (form && confirmation) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    confirmation.hidden = false;
  });
}

if (navToggle && mobileNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.hidden = isOpen;
  });

  mobileNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
    }
  });
}

videoLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const videoId = link.getAttribute("data-video-id");
    const videoTitle = link.getAttribute("data-video-title") || "XP Expression video";

    if (!videoId) {
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.className = "video-embed";
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = videoTitle;
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    link.replaceWith(iframe);
    iframe.focus();
  });
});
