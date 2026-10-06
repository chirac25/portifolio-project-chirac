document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form[data-demo-form]").forEach(form => {
        const message = form.querySelector(".form-message");

        form.addEventListener("submit", event => {
            event.preventDefault();
            const required = form.querySelectorAll("[required]");
            let valid = true;

            required.forEach(input => {
                input.style.borderColor = "";
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = "#d33";
                }
            });

            if (!valid) {
                message?.classList.remove("success");
                message?.classList.add("error");
                if (message) message.textContent = "Please complete all required fields.";
                return;
            }

            message?.classList.remove("error");
            message?.classList.add("success");
            if (message) message.textContent = "Thank you! Your form has been submitted successfully.";
            form.reset();
        });
    });

    const billing = document.querySelector("[data-billing-toggle]");
    if (billing) {
        const monthly = document.querySelectorAll("[data-monthly]");
        const yearly = document.querySelectorAll("[data-yearly]");
        billing.addEventListener("change", () => {
            const yearlyMode = billing.checked;
            monthly.forEach(el => el.hidden = yearlyMode);
            yearly.forEach(el => el.hidden = !yearlyMode);
        });
    }
});
