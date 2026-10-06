document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-filter-group]").forEach(group => {
        const buttons = group.querySelectorAll(".filter-btn");
        const items = group.querySelectorAll("[data-category]");

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                buttons.forEach(b => b.classList.remove("active"));
                button.classList.add("active");
                const filter = button.dataset.filter;

                items.forEach(item => {
                    const match = filter === "all" || item.dataset.category.split(" ").includes(filter);
                    item.style.display = match ? "" : "none";
                });
            });
        });
    });

    document.querySelectorAll("[data-search-target]").forEach(input => {
        const target = document.querySelector(input.dataset.searchTarget);
        if (!target) return;
        input.addEventListener("input", () => {
            const query = input.value.toLowerCase().trim();
            target.querySelectorAll("[data-search-item]").forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none";
            });
        });
    });
});
