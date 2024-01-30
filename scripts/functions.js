


const searchInput = document.getElementById("search");
const closeIcon = document.querySelector(".logoCloseHeader");

// Fonction pour gérer la visibilité de l'icône
function handleIconVisibility() {
    if (searchInput.value.trim() !== "") {
        closeIcon.classList.remove("hidden");
    } else {
        closeIcon.classList.add("hidden");
    }
}

searchInput.addEventListener("input", handleIconVisibility);

// Écouter l'événement "click" sur l'icône de fermeture
closeIcon.addEventListener("click", () => {
    searchInput.value = ""; // Efface le contenu de l'input
    closeIcon.classList.add("hidden"); // Masque l'icône
});









// Sélectionnez toutes les images avec la classe "logoClose"
const closeIcons = document.querySelectorAll(".logoClose");

// Fonction pour gérer la visibilité de toutes les icônes "logoClose"
function handleIconVisibility() {
    closeIcons.forEach((icon) => {
        const searchInput = icon.previousElementSibling; // L'élément précédent (l'entrée de recherche) de l'icône de fermeture
        if (searchInput.value.trim() !== "") {
            icon.classList.remove("hidden");
        } else {
            icon.classList.add("hidden");
        }
    });
}

// Ajoutez un écouteur d'événements "input" à chaque élément d'entrée de recherche
closeIcons.forEach((icon) => {
    const searchInput = icon.previousElementSibling; // L'élément précédent (l'entrée de recherche) de l'icône de fermeture
    searchInput.addEventListener("input", handleIconVisibility);
});

// Ajoutez un écouteur d'événements "click" à chaque icône de fermeture
closeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const searchInput = icon.previousElementSibling; // L'élément précédent (l'entrée de recherche) de l'icône de fermeture
        searchInput.value = ""; // Effacez le contenu de l'entrée
        icon.classList.add("hidden"); // Masquez l'icône
    });
});
