// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.getElementById("search");
//     const closeIcon = document.querySelector(".header-form-close");

//     searchInput.addEventListener("input", () => {
//         if (searchInput.value.trim() !== "") {
//             closeIcon.classList.remove("hidden");
//         } else {
//             closeIcon.classList.add("hidden");
//         }
//     });
// });


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
