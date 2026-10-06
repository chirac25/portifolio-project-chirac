document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-slider]").forEach(slider => {
        const slides = slider.querySelectorAll(".slide");
        const next = slider.querySelector("[data-next]");
        const prev = slider.querySelector("[data-prev]");
        const dots = slider.querySelectorAll("[data-dot]");
        let index = 0;

        function show(i) {
            index = (i + slides.length) % slides.length;
            slides.forEach((s, n) => s.hidden = n !== index);
            dots.forEach((d, n) => d.classList.toggle("active", n === index));
        }

        next?.addEventListener("click", () => show(index + 1));
        prev?.addEventListener("click", () => show(index - 1));
        dots.forEach((d, n) => d.addEventListener("click", () => show(n)));
        show(0);
        setInterval(() => show(index + 1), 5500);
    });
});
