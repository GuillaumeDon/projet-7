
// Sélectionnez l'élément d'entrée de recherche et l'image "logoCloseHeader"
const searchInput = document.getElementById("search");
const closeIconHeader = document.querySelector(".logoCloseHeader");

// Assurez-vous que l'image "logoCloseHeader" est initialement cachée
closeIconHeader.classList.add("hidden");

// Fonction pour gérer la visibilité de l'image "logoCloseHeader"
function handleIconVisibility() {
    if (searchInput.value.trim() !== "") {
        closeIconHeader.classList.remove("hidden");
    } else {
        closeIconHeader.classList.add("hidden");
    }
}

// Ajoutez un écouteur d'événements "input" à l'élément d'entrée de recherche
searchInput.addEventListener("input", handleIconVisibility);

// Écouter l'événement "click" sur l'image "logoCloseHeader"
closeIconHeader.addEventListener("click", () => {
    searchInput.value = ""; // Effacez le contenu de l'input
    closeIconHeader.classList.add("hidden"); // Masque l'image "logoCloseHeader"
});

// Sélectionnez toutes les images avec la classe "logoClose"
const closeIcons = document.querySelectorAll(".logoClose");

// Fonction pour gérer la visibilité de toutes les icônes "logoClose"
function handleIconVisibilityAll() {
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
    searchInput.addEventListener("input", handleIconVisibilityAll);
});

// Ajoutez un écouteur d'événements "click" à chaque icône de fermeture
closeIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const searchInput = icon.previousElementSibling; // L'élément précédent (l'entrée de recherche) de l'icône de fermeture
        searchInput.value = ""; // Effacez le contenu de l'entrée
        icon.classList.add("hidden"); // Masquez l'icône
    });
});









