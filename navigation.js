document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuToggle.setAttribute("aria-expanded", navMenu.classList.contains("open"));
        });
    }

    document.querySelectorAll(".nav-dropdown > .nav-link").forEach(link => {
        link.addEventListener("click", event => {
            if (window.innerWidth <= 820) {
                event.preventDefault();
                link.parentElement.classList.toggle("open");
            }
        });
    });

    window.addEventListener("scroll", () => {
        header?.classList.toggle("scrolled", window.scrollY > 20);
    });

    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link[data-page]").forEach(link => {
        if (link.dataset.page === current) link.classList.add("active");
    });
});
