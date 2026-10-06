document.addEventListener("DOMContentLoaded", () => {
    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: .12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    // Back to top
    const topButton = document.querySelector(".back-to-top");
    window.addEventListener("scroll", () => {
        topButton?.classList.toggle("show", window.scrollY > 500);
    });
    topButton?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Modal
    document.querySelectorAll("[data-modal-open]").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(button.dataset.modalOpen)?.classList.add("open");
            document.body.classList.add("modal-open");
        });
    });
    document.querySelectorAll("[data-modal-close]").forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal")?.classList.remove("open");
            document.body.classList.remove("modal-open");
        });
    });
    document.querySelectorAll(".modal").forEach(modal => {
        modal.addEventListener("click", e => {
            if (e.target === modal) {
                modal.classList.remove("open");
                document.body.classList.remove("modal-open");
            }
        });
    });

    // Tabs
    document.querySelectorAll(".tabs").forEach(tabs => {
        const buttons = tabs.querySelectorAll(".tab-btn");
        const panels = tabs.querySelectorAll(".tab-panel");
        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                buttons.forEach(b => b.classList.remove("active"));
                panels.forEach(p => p.classList.remove("active"));
                button.classList.add("active");
                panels[index]?.classList.add("active");
            });
        });
    });

    // FAQ accordion
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            const item = button.parentElement;
            document.querySelectorAll(".faq-item").forEach(other => {
                if (other !== item) other.classList.remove("open");
            });
            item.classList.toggle("open");
        });
    });

    // Animated counters
    const counters = document.querySelectorAll("[data-counter]");
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting || entry.target.dataset.done) return;
            const el = entry.target;
            const target = Number(el.dataset.counter);
            let value = 0;
            const step = Math.max(1, Math.ceil(target / 60));
            const timer = setInterval(() => {
                value += step;
                if (value >= target) {
                    value = target;
                    clearInterval(timer);
                    el.dataset.done = "true";
                }
                el.textContent = value.toLocaleString();
            }, 20);
        });
    }, { threshold: .5 });
    counters.forEach(c => counterObserver.observe(c));
});
