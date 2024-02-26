

const searchInput = document.getElementById("search");
const closeIconHeader = document.querySelector(".logoCloseHeader");

closeIconHeader.classList.add("hidden");

// Fonction pour gérer la visibilité de l'image "logoCloseHeader"
function handleIconVisibility() {
    if (searchInput.value.trim() !== "") {
        closeIconHeader.classList.remove("hidden");
    } else {
        closeIconHeader.classList.add("hidden");
    }
}

searchInput.addEventListener("input", handleIconVisibility);

closeIconHeader.addEventListener("click", () => {
    searchInput.value = ""; // Efface le contenu de l'input
    closeIconHeader.classList.add("hidden"); // Masque l'image "logoCloseHeader"
});

const closeIcons = document.querySelectorAll(".logoClose");


function handleIconVisibilityAll() {
    closeIcons.forEach((icon) => {
        const searchInput = icon.previousElementSibling;
        if (searchInput.value.trim() !== "") {
            icon.classList.remove("hidden");
        } else {
            icon.classList.add("hidden");
        }
    });
}

closeIcons.forEach((icon) => {
    const searchInput = icon.previousElementSibling;
    searchInput.addEventListener("input", handleIconVisibilityAll);
});


closeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const searchInput = icon.previousElementSibling;
        searchInput.value = "";
        icon.classList.add("hidden");
    });
});









