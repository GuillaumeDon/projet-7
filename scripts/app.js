document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const closeIcon = document.querySelector(".header-form-close");

    searchInput.addEventListener("input", () => {
        if (searchInput.value.trim() !== "") {
            closeIcon.classList.remove("hidden");
        } else {
            closeIcon.classList.add("hidden");
        }
    });
});
