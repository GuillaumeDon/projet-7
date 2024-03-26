import recipes from './recipes.js';
import {displayRecipeCards} from './cards.js';



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

// Créer des ensembles (sets) pour stocker les valeurs uniques des filtres
const allIngredients = new Set();
const allAppliances = new Set();
const allUstensils = new Set();


function updateTags(recipes){recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
        allIngredients.add(ingredient.ingredient);
    });
    allAppliances.add(recipe.appliance);
    recipe.ustensils.forEach(ustensil => {
        allUstensils.add(ustensil);
    });
});}

updateTags(recipes)


// Ajout des valeurs des ensembles aux listes de filtres
addItemsToList(ingredientsUl, allIngredients);
addItemsToList(appliancesUl, allAppliances);
addItemsToList(ustensilsUl, allUstensils);

//Vérifier si un élément existe déjà dans la liste de choix
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
            event.target.remove();
            updateFilteredRecipes();
        }
    }
});

appliancesUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedAppliance = event.target.textContent;
        if (!isItemInList(choiceList, selectedAppliance)) {
            addFilterItem(choiceList, selectedAppliance, selectedAppliances);
            event.target.remove();
            updateFilteredRecipes();
        }
    }
});

ustensilsUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedUstensil = event.target.textContent;
        if (!isItemInList(choiceList, selectedUstensil)) {
            addFilterItem(choiceList, selectedUstensil, selectedUstensils);
            event.target.remove();
            updateFilteredRecipes();
        }
    }
});

// Tableaux pour stocker les éléments sélectionnés dans chaque filtre
let selectedIngredients = [];
let selectedAppliances = [];
let selectedUstensils = [];

// Supprimer un élément d'un tableau
function removeItemFromArray(array, item, ulElement) {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
        // Créer un nouvel élément li avec le texte de l'élément supprimé
        const li = document.createElement("li");
        li.textContent = item;
        // Ajouter le nouvel élément li à l'élément ul
        ulElement.insertBefore(li, ulElement.firstChild);
        // updateFilteredRecipes();
    }
}

// Ajouter un élément à la liste de choix
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
        // Supprimer l'élément de selectedIngredients et le réintégrer dans ingredientsUl
        removeItemFromArray(selectedIngredients, itemName, ingredientsUl);
        // Supprimer l'élément de selectedAppliances et le réintégrer dans appliancesUl
        removeItemFromArray(selectedAppliances, itemName, appliancesUl);
        // Supprimer l'élément de selectedUstensils et le réintégrer dans ustensilsUl
        removeItemFromArray(selectedUstensils, itemName, ustensilsUl);
        ulElement.removeChild(li);
        updateFilteredRecipes();
    });
    
    li.appendChild(img);
    ulElement.appendChild(li);

    // Ajout du filtre sélectionné au tableau correspondant
    array.push(itemName);
}


ingredientsInput.addEventListener("input", () => {
    filterDropdownList(ingredientsInput, ingredientsUl);
});

appliancesInput.addEventListener("input", () => {
    filterDropdownList(appliancesInput, appliancesUl);
});

ustensilsInput.addEventListener("input", () => {
    filterDropdownList(ustensilsInput, ustensilsUl);
});

// Filtrer les éléments de la liste en fonction de la saisie de l'utilisateur
function filterDropdownList(filterInput, ulElement) {
    const searchText = filterInput.value.toLowerCase().trim();
    const items = ulElement.querySelectorAll("li");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
    // updateRecipesDisplay();
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('search');
    const closeButton = document.querySelector('.header-form-close'); 

    // Gestionnaire pour l'input de recherche
    input.addEventListener('input', function() {
        filterDropdownList(input, ingredientsUl);
        filterDropdownList(input, appliancesUl);
        filterDropdownList(input, ustensilsUl);
    });

    // Gestionnaire pour le clic sur l'icône de fermeture
    closeButton.addEventListener('click', function() {
        input.value = ''; // Efface le contenu de l'input
        filterDropdownList(input, ingredientsUl); // Réinitialise les dropdowns menus
        filterDropdownList(input, appliancesUl);
        filterDropdownList(input, ustensilsUl);
    });});

// Evénements pour effacer les filtres
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

// Réinitialiser la liste de filtres
function resetFilterList(ulElement) {
    const items = ulElement.querySelectorAll("li");
    items.forEach(item => {
        item.style.display = "block";
    });
}

// Gestion de l'icône de fermeture dans la barre de recherche
const searchInput = document.getElementById("search");
const closeIcon = document.querySelector(".header-form-close");

closeIcon.addEventListener("click", () => {
    searchInput.value = "";
    filterDropdownList(searchInput, ingredientsUl);
    filterDropdownList(searchInput, appliancesUl);
    filterDropdownList(searchInput, ustensilsUl);
});

// Compare les tableaux sélectionnés avec le tableau de recettes (algo 1 avec boucle)
function updateFilteredRecipes() {

    if (selectedIngredients.length === 0 && selectedAppliances.length === 0 && selectedUstensils.length === 0) {
        updateRecipesDisplay();
        return;
    }

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
            console.log(matchingRecipes);
        }
    }
    displayRecipeCards(matchingRecipes);
    console.log(matchingRecipes);
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
        updateRecipesDisplay(); //Blocage de la MAJ de la page 
    });


    const errorMessage = document.getElementById('error-message');

    // Fonction pour afficher le message d'erreur
    function displayErrorMessage(message) {
        errorMessage.innerHTML = message;
        errorMessage.classList.add('header-form-error');
    }
    
    // Fonction pour masquer le message d'erreur
    function hideErrorMessage() {
        errorMessage.innerHTML = '';
        errorMessage.classList.remove('header-form-error');
    }
    

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

// if (filteredRecipes.length === 0) {
//     const errorMessageText = `Aucune recette ne contient <span class="result-maj">'${searchText}'</span>. Vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
//     displayErrorMessage(errorMessageText);
//     updateRecipesCount(0);

 
// } else {
//     document.getElementById('error-message').innerHTML = ""; // Efface le message d'erreur s'il y avait un précédent
//     hideErrorMessage(); 
//     updateRecipesCount(filteredRecipes.length);
// }
// } else {
// filteredRecipes = recipes; // Affiche toutes les recettes si le champ est vide
// document.getElementById('error-message').innerHTML = "";
// hideErrorMessage();
// updateRecipesCount(filteredRecipes.length);   // Efface le message d'erreur s'il y avait un précédent
// }

// displayRecipeCards(filteredRecipes);

// function updateRecipesCount(count) {
// const recipesCountElement = document.querySelector('.container-filtres-results-number');
// recipesCountElement.textContent = count.toString() ;
// }

// }

        //Algo 2 avec un filter
        function updateRecipesDisplay() {
            const searchText = input.value.toLowerCase();
            let filteredRecipes;
        
            if (searchText.length >= 3 || selectedIngredients.length > 0 || selectedAppliances.length > 0 || selectedUstensils.length > 0) {
                filteredRecipes = recipes.filter(recipe => {
                    // Vérifier si le texte saisi correspond au nom, à la description, à l'ingrédient, à l'appareil ou à l'ustensile de la recette
                    const matchesSearch = 
                        recipe.name.toLowerCase().includes(searchText) ||
                        recipe.description.toLowerCase().includes(searchText) ||
                        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchText)) ||
                        recipe.appliance.toLowerCase().includes(searchText) ||
                        recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText));
        
                    // Vérifier si les ingrédients, les appareils et les ustensiles de la recette correspondent aux filtres sélectionnés
                    const ingredientsMatch = selectedIngredients.every(selectedIngredient =>
                        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(selectedIngredient.toLowerCase()))
                    );
        
                    const appliancesMatch = selectedAppliances.every(selectedAppliance =>
                        recipe.appliance.toLowerCase().includes(selectedAppliance.toLowerCase())
                    );
        
                    const ustensilsMatch = selectedUstensils.every(selectedUstensil =>
                        recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(selectedUstensil.toLowerCase()))
                    );
        
                    return matchesSearch && ingredientsMatch && appliancesMatch && ustensilsMatch;
                });
            } else {
                // Si aucun filtre n'est appliqué, afficher toutes les recettes
                filteredRecipes = recipes;
            }
            if (filteredRecipes.length === 0) {
                const errorMessageText = `Aucune recette ne contient  <span class="result-maj">  '${searchText}'</span>. Vous pouvez chercher "tarte aux pommes", "poisson", etc.`;
                displayErrorMessage(errorMessageText);
                updateRecipesCount(0);
            
             
            } else {
                document.getElementById('error-message').innerHTML = ""; // Efface le message d'erreur s'il y avait un précédent
                hideErrorMessage(); 
                updateRecipesCount(filteredRecipes.length);
            }
        
            // Mettre à jour l'affichage des recettes
            displayRecipeCards(filteredRecipes);

            function updateRecipesCount(count) {
                const recipesCountElement = document.querySelector('.container-filtres-results-number');
                recipesCountElement.textContent = count.toString() ;
                }
                
        }
        




// Affichage du message d'erreur si aucune correspondance n'est trouvée










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
})