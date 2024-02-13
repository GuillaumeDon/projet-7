
import recipes from './recipes.js';

// Fonction pour ajouter des éléments à une liste
function addItemsToList(ulElement, itemValues) {
    itemValues.forEach(value => {
        const li = document.createElement("li");
        li.textContent = value;
        ulElement.appendChild(li);
    });
}


const ingredientsUl = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
const appliancesUl = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
const ustensilsUl = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");
const ingredientsInput = document.getElementById("ingredientsDropdown");
const appliancesInput = document.getElementById("appliancesDropdown");
const ustensilsInput = document.getElementById("ustensilsDropdown");
const choiceList = document.querySelector(".container-filtres-choice ul");

// CréeR des ensembles (sets) pour stocker les valeurs uniques des filtres
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

// Gérer les interactions utilisateur pour les filtres
ingredientsUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedIngredient = event.target.textContent;
        if (!isItemInList(choiceList, selectedIngredient)) {
            addFilterItem(choiceList, selectedIngredient, selectedIngredients);
            updateFilteredRecipes();
        }
    }
});

appliancesUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedAppliance = event.target.textContent;
        if (!isItemInList(choiceList, selectedAppliance)) {
            addFilterItem(choiceList, selectedAppliance, selectedAppliances);
            updateFilteredRecipes();
        }
    }
});

ustensilsUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedUstensil = event.target.textContent;
        if (!isItemInList(choiceList, selectedUstensil)) {
            addFilterItem(choiceList, selectedUstensil, selectedUstensils);
            updateFilteredRecipes();
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
        updateFilteredRecipes();
    });
    
    li.appendChild(img);
    ulElement.appendChild(li);

    // Ajouter le filtre sélectionné au tableau correspondant
    array.push(itemName);
}

// Écouter les événements d'entrée utilisateur dans les barres de recherche
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
    updateFilteredRecipes();
});

appliancesCloseIcon.addEventListener("click", () => {
    appliancesInput.value = "";
    resetFilterList(appliancesUl);
    selectedAppliances = [];
    choiceList.innerHTML = "";
    updateFilteredRecipes();
});

ustensilsCloseIcon.addEventListener("click", () => {
    ustensilsInput.value = "";
    resetFilterList(ustensilsUl);
    selectedUstensils = [];
    choiceList.innerHTML = "";
    updateFilteredRecipes();
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

// Comparez les tableaux sélectionnés avec le tableau de recettes (algo 1 avec boucle)
function updateFilteredRecipes() {

    
    const matchingRecipes = [];
    let recipeCountElement = document.querySelector('.container-filtres-results-number');

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        let ingredientsMatch = true, utensilsMatch = true, appliancesMatch = true;

        // Vérification des ingrédients
        for (let j = 0; j < selectedIngredients.length && ingredientsMatch; j++) {
            let ingredientFound = false;
            for (let k = 0; k < recipe.ingredients.length; k++) {
                if (recipe.ingredients[k].ingredient.toLowerCase() === selectedIngredients[j].toLowerCase()) {
                    ingredientFound = true;
                    break;
                }
            }
            if (!ingredientFound) ingredientsMatch = false;
        }

        // Vérification des ustensiles
        for (let j = 0; j < selectedUstensils.length && utensilsMatch; j++) {
            let utensilFound = false;
            for (let k = 0; k < recipe.ustensils.length; k++) {
                if (recipe.ustensils[k].toLowerCase() === selectedUstensils[j].toLowerCase()) {
                    utensilFound = true;
                    break;
                }
            }
            if (!utensilFound) utensilsMatch = false;
        }

        // Vérification des appareils
        if (selectedAppliances.length > 0 && recipe.appliance.toLowerCase() !== selectedAppliances[0].toLowerCase()) {
            appliancesMatch = false;
        }

        if (ingredientsMatch && utensilsMatch && appliancesMatch) {
            matchingRecipes.push(recipe);
        }
    }

    recipeCountElement.textContent = matchingRecipes.length.toString();
}





document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('search');
    const closeButton = document.querySelector('.header-form-close'); 

    // Gestionnaire pour l'input de recherche
    input.addEventListener('input', updateRecipesDisplay);

    // Gestionnaire pour le clic sur l'icône de fermeture
    closeButton.addEventListener('click', function() {
        input.value = ''; // Efface le contenu de l'input
        updateRecipesDisplay(); // Met à jour l'affichage des recettes
    });




//Algo 1 avec des boucles

// function updateRecipesDisplay() {
//     const searchText = input.value.toLowerCase();
//     let filteredRecipes;

//     if (searchText.length >= 3) {
//         filteredRecipes = [];
//         for (let i = 0; i < recipes.length; i++) {
//             const recipe = recipes[i];
//             let matchesSearch = false;

//             // Vérification du nom de la recette
//             if (recipe.name.toLowerCase().includes(searchText)) {
//                 matchesSearch = true;
//             }

//             // Vérification de la description de la recette
//             if (!matchesSearch && recipe.description.toLowerCase().includes(searchText)) {
//                 matchesSearch = true;
//             }

//             // Vérification des ingrédients de la recette
//             if (!matchesSearch) {
//                 for (let j = 0; j < recipe.ingredients.length; j++) {
//                     const ingredient = recipe.ingredients[j];
//                     if (ingredient.ingredient.toLowerCase().includes(searchText)) {
//                         matchesSearch = true;
//                         break;
//                     }
//                 }
//             }

//             // Vérification de l'appareil de la recette
//             if (!matchesSearch && recipe.appliance.toLowerCase().includes(searchText)) {
//                 matchesSearch = true;
//             }

//             // Vérification des ustensiles de la recette
//             if (!matchesSearch) {
//                 for (let j = 0; j < recipe.ustensils.length; j++) {
//                     const ustensil = recipe.ustensils[j];
//                     if (ustensil.toLowerCase().includes(searchText)) {
//                         matchesSearch = true;
//                         break;
//                     }
//                 }
//             }

//             if (matchesSearch) {
//                 filteredRecipes.push(recipe);
//             }
//         }
//     } else {
//         filteredRecipes = recipes; // Affiche toutes les recettes si le champ est vide
//     }



        //Algo 2 avec un filter
    function updateRecipesDisplay() {
        const searchText = input.value.toLowerCase();
        let filteredRecipes; 
             if (searchText.length >= 3) {
                filteredRecipes = recipes.filter(recipe => {
                    return recipe.name.toLowerCase().includes(searchText) ||
                           recipe.description.toLowerCase().includes(searchText) ||
                           recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchText)) ||
                           recipe.appliance.toLowerCase().includes(searchText) ||
                           recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText));
                });
        } else {
            filteredRecipes = recipes; 
    
        }





        const recipesContainer = document.getElementById('recipe-cards');
        recipesContainer.innerHTML = ''; // Vide le conteneur pour les nouveaux résultats
        filteredRecipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('container-recipe-cards-item');
        
            const image = document.createElement('img');
            image.classList.add('container-recipe-cards-item-img');
            image.src = "./assets/pictures/recipes/" + recipe.image;
            recipeCard.appendChild(image);
        
            const containerTime = document.createElement('div');
            containerTime.classList.add('container-recipe-cards-item-containerTime');
            recipeCard.appendChild(containerTime);
        
            const time = document.createElement('p');
            time.classList.add('container-recipe-cards-item-containerTime-time');
            time.textContent = `${recipe.time} min`;
            containerTime.appendChild(time);
        
            const title = document.createElement('h2');
            title.classList.add('container-recipe-cards-item-title');
            title.textContent = recipe.name;
            recipeCard.appendChild(title);
        
            const secondTitle = document.createElement('h4');
            secondTitle.classList.add('container-recipe-cards-item-secondTitle');
            secondTitle.textContent = `Recette`;
            recipeCard.appendChild(secondTitle);
        
            const description = document.createElement('p');
            description.classList.add('container-recipe-cards-item-description');
            description.textContent = recipe.description; 
            recipeCard.appendChild(description);
        
            const thirdTitle = document.createElement('h4');
            thirdTitle.classList.add('container-recipe-cards-item-thirdTitle');
            thirdTitle.textContent = `Ingrédients`;
            recipeCard.appendChild(thirdTitle);
        
            const ingredientsList = document.createElement('ul');
            ingredientsList.classList.add('container-recipe-cards-item-ingredientsList');
            recipe.ingredients.forEach(ingredient => {
                const ingredientItem = document.createElement('li');
                ingredientItem.classList.add('container-recipe-cards-item-ingredientsList-item');
        
                // const ingredientText = `${ingredient.ingredient}: ${ingredient.quantity || ''} ${ingredient.unit || ''}`;            const ingredientText = `${ingredient.ingredient}<br><span class="grey-title">${ingredient.quantity || '-'} ${ingredient.unit || ''} </span>`;
                const ingredientText = `${ingredient.ingredient}<br><span class="grey-title">${ingredient.quantity || '-'} ${ingredient.unit || ''} </span>`;

                ingredientItem.innerHTML = ingredientText;
                ingredientsList.appendChild(ingredientItem);
            });
            recipeCard.appendChild(ingredientsList);
        
            recipesContainer.appendChild(recipeCard);
            const recipesCountElement = document.querySelector('.container-filtres-results-number');
recipesCountElement.textContent = filteredRecipes.length; 

        });
    }
});












//ALGO 1 ENTIER

// function updateRecipesDisplay() {
    // const searchText = input.value.toLowerCase();
    // let filteredRecipes; 
    //      if (searchText.length >= 3) {
    //         filteredRecipes = recipes.filter(recipe => {
    //             return recipe.name.toLowerCase().includes(searchText) ||
    //                    recipe.description.toLowerCase().includes(searchText) ||
    //                    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchText)) ||
    //                    recipe.appliance.toLowerCase().includes(searchText) ||
    //                    recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText));
    //         });
    // } else {
    //     filteredRecipes = recipes; 

    // }




    //ALGO 2 ENTIER

//     function updateRecipesDisplay() {
//         const searchText = input.value.toLowerCase();

//     let filteredRecipes = [];

//     if (searchText.length >= 3) {
//         for (let i = 0; i < recipes.length; i++) {
//             const recipe = recipes[i];
//             const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchText));

//             if (recipe.name.toLowerCase().includes(searchText) ||
//                 recipe.description.toLowerCase().includes(searchText) ||
//                 ingredientsMatch ||
//                 recipe.appliance.toLowerCase().includes(searchText) ||
//                 recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText))) {
//                 filteredRecipes.push(recipe);
//             }
//         }
// } else {
//     filteredRecipes = recipes; 
// }
