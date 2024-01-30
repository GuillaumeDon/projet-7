// Importez la variable recipes depuis le fichier recipes.js
import recipes from './recipes.js';

// Fonction pour ajouter des éléments à une liste
function addItemsToList(ulElement, itemValues) {
    itemValues.forEach(value => {
        const li = document.createElement("li");
        li.textContent = value;
        ulElement.appendChild(li);
    });
}

// Récupérez les éléments de l'interface utilisateur
const ingredientsUl = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
const appliancesUl = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
const ustensilsUl = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");
const ingredientsInput = document.getElementById("ingredientsDropdown");
const appliancesInput = document.getElementById("appliancesDropdown");
const ustensilsInput = document.getElementById("ustensilsDropdown");
const choiceList = document.querySelector(".container-filtres-choice ul");

// Créez des ensembles (sets) pour stocker les valeurs uniques des filtres
const allIngredients = new Set();
const allAppliances = new Set();
const allUstensils = new Set();

// Remplissez les ensembles avec les données de recettes
recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
        allIngredients.add(ingredient.ingredient);
    });
    allAppliances.add(recipe.appliance);
    recipe.ustensils.forEach(ustensil => {
        allUstensils.add(ustensil);
    });
});

// Ajoutez les valeurs des ensembles aux listes de filtres
addItemsToList(ingredientsUl, allIngredients);
addItemsToList(appliancesUl, allAppliances);
addItemsToList(ustensilsUl, allUstensils);

// Fonction pour vérifier si un élément existe déjà dans la liste de choix
function isItemInList(ulElement, itemName) {
    const items = ulElement.querySelectorAll("li");
    for (const item of items) {
        if (item.textContent === itemName) {
            return true;
        }
    }
    return false;
}

// Gérez les interactions utilisateur pour les filtres
ingredientsUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedIngredient = event.target.textContent;
        if (!isItemInList(choiceList, selectedIngredient)) {
            addFilterItem(choiceList, selectedIngredient, selectedIngredients);
        }
    }
});

appliancesUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedAppliance = event.target.textContent;
        if (!isItemInList(choiceList, selectedAppliance)) {
            addFilterItem(choiceList, selectedAppliance, selectedAppliances);
        }
    }
});

ustensilsUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedUstensil = event.target.textContent;
        if (!isItemInList(choiceList, selectedUstensil)) {
            addFilterItem(choiceList, selectedUstensil, selectedUstensils);
        }
    }
});

// Tableaux pour stocker les éléments sélectionnés dans chaque filtre
let selectedIngredients = [];
let selectedAppliances = [];
let selectedUstensils = [];

// Fonction pour supprimer un élément d'un tableau
function removeItemFromArray(array, item) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
}

// Fonction pour ajouter un élément à la liste de choix
function addFilterItem(ulElement, itemName, array) {
    const li = document.createElement("li");
    li.classList.add('container-filtres-choice-list-tag');
    
    const span = document.createElement("span");
    span.textContent = itemName;
    li.appendChild(span);

    const img = document.createElement("img");
    img.src = "./assets/pictures/icons/closeTag.png";
    img.classList.add("container-filtres-choice-list-item-logo", "logoTag");
    
    img.addEventListener("click", () => {
        removeItemFromArray(array, itemName);
        ulElement.removeChild(li);
    });
    
    li.appendChild(img);
    ulElement.appendChild(li);

    // Ajoutez le filtre sélectionné au tableau correspondant
    array.push(itemName);
}

// Écoutez les événements d'entrée utilisateur dans les barres de recherche
ingredientsInput.addEventListener("input", () => {
    filterDropdownList(ingredientsInput, ingredientsUl);
});

appliancesInput.addEventListener("input", () => {
    filterDropdownList(appliancesInput, appliancesUl);
});

ustensilsInput.addEventListener("input", () => {
    filterDropdownList(ustensilsInput, ustensilsUl);
});

// Fonction pour filtrer les éléments de la liste en fonction de la saisie de l'utilisateur
function filterDropdownList(filterInput, ulElement) {
    const inputWords = filterInput.value.toLowerCase().trim().split(' ');
    const items = ulElement.querySelectorAll("li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const allWordsMatch = inputWords.every(word => text.includes(word));
        if (allWordsMatch) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Gérez les événements pour effacer les filtres
const ingredientsCloseIcon = document.querySelector(".container-filtres-tags-tag1-logo.logoClose");
const appliancesCloseIcon = document.querySelector(".container-filtres-tags-tag2-logo.logoClose");
const ustensilsCloseIcon = document.querySelector(".container-filtres-tags-tag3-logo.logoClose");

ingredientsCloseIcon.addEventListener("click", () => {
    ingredientsInput.value = "";
    resetFilterList(ingredientsUl);
    selectedIngredients = [];
    choiceList.innerHTML = "";
});

appliancesCloseIcon.addEventListener("click", () => {
    appliancesInput.value = "";
    resetFilterList(appliancesUl);
    selectedAppliances = [];
    choiceList.innerHTML = "";
});

ustensilsCloseIcon.addEventListener("click", () => {
    ustensilsInput.value = "";
    resetFilterList(ustensilsUl);
    selectedUstensils = [];
    choiceList.innerHTML = "";
});

// Fonction pour réinitialiser la liste de filtres
function resetFilterList(ulElement) {
    const items = ulElement.querySelectorAll("li");
    items.forEach(item => {
        item.style.display = "block";
    });
}

// Gérez l'icône de fermeture dans la barre de recherche
const searchInput = document.getElementById("search");
const closeIcon = document.querySelector(".header-form-close");

closeIcon.addEventListener("click", () => {
    searchInput.value = "";
});
