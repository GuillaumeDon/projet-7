// // Importez la variable recipes depuis le fichier recipes.js
// import recipes from './recipes.js';

// // Fonction pour ajouter des éléments à une liste
// function addItemsToList(ulElement, itemValues) {
//     itemValues.forEach(value => {
//         const li = document.createElement("li");
//         li.textContent = value;
//         ulElement.appendChild(li);
//     });
// }

// // Récupérez les éléments de l'interface utilisateur
// const ingredientsUl = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
// const appliancesUl = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
// const ustensilsUl = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");
// const ingredientsInput = document.getElementById("ingredientsDropdown");
// const appliancesInput = document.getElementById("appliancesDropdown");
// const ustensilsInput = document.getElementById("ustensilsDropdown");
// const choiceList = document.querySelector(".container-filtres-choice ul");

// // Créez des ensembles (sets) pour stocker les valeurs uniques des filtres
// const allIngredients = new Set();
// const allAppliances = new Set();
// const allUstensils = new Set();

// // Remplissez les ensembles avec les données de recettes
// recipes.forEach(recipe => {
//     recipe.ingredients.forEach(ingredient => {
//         allIngredients.add(ingredient.ingredient);
//     });
//     allAppliances.add(recipe.appliance);
//     recipe.ustensils.forEach(ustensil => {
//         allUstensils.add(ustensil);
//     });
// });

// // Ajoutez les valeurs des ensembles aux listes de filtres
// addItemsToList(ingredientsUl, allIngredients);
// addItemsToList(appliancesUl, allAppliances);
// addItemsToList(ustensilsUl, allUstensils);

// // Fonction pour vérifier si un élément existe déjà dans la liste de choix
// function isItemInList(ulElement, itemName) {
//     const items = ulElement.querySelectorAll("li");
//     for (const item of items) {
//         if (item.textContent === itemName) {
//             return true;
//         }
//     }
//     return false;
// }

// // Gérez les interactions utilisateur pour les filtres
// ingredientsUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedIngredient = event.target.textContent;
//         if (!isItemInList(choiceList, selectedIngredient)) {
//             addFilterItem(choiceList, selectedIngredient, selectedIngredients);


//             console.log(selectedIngredients);
//         }
//     }
// });

// appliancesUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedAppliance = event.target.textContent;
//         if (!isItemInList(choiceList, selectedAppliance)) {
//             addFilterItem(choiceList, selectedAppliance, selectedAppliances);

//             console.log(selectedAppliances);

//         }
//     }
// });

// ustensilsUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedUstensil = event.target.textContent;
//         if (!isItemInList(choiceList, selectedUstensil)) {
//             addFilterItem(choiceList, selectedUstensil, selectedUstensils);

//             console.log(selectedUstensils);

//         }
//     }
// });

// // Tableaux pour stocker les éléments sélectionnés dans chaque filtre
// let selectedIngredients = [];
// let selectedAppliances = [];
// let selectedUstensils = [];

// // Fonction pour supprimer un élément d'un tableau
// function removeItemFromArray(array, item) {
//     const index = array.indexOf(item);
//     if (index > -1) {
//         array.splice(index, 1);
//     }
// }

// // Fonction pour ajouter un élément à la liste de choix
// function addFilterItem(ulElement, itemName, array) {
//     const li = document.createElement("li");
//     li.classList.add('container-filtres-choice-list-tag');
    
//     const span = document.createElement("span");
//     span.textContent = itemName;
//     li.appendChild(span);

//     const img = document.createElement("img");
//     img.src = "./assets/pictures/icons/closeTag.png";
//     img.classList.add("container-filtres-choice-list-item-logo", "logoTag");
    
//     img.addEventListener("click", () => {
//         removeItemFromArray(array, itemName);
//         ulElement.removeChild(li);
//     });
    
//     li.appendChild(img);
//     ulElement.appendChild(li);

//     // Ajoutez le filtre sélectionné au tableau correspondant
//     array.push(itemName);
// }

// // Écoutez les événements d'entrée utilisateur dans les barres de recherche
// ingredientsInput.addEventListener("input", () => {
//     filterDropdownList(ingredientsInput, ingredientsUl);
// });

// appliancesInput.addEventListener("input", () => {
//     filterDropdownList(appliancesInput, appliancesUl);
// });

// ustensilsInput.addEventListener("input", () => {
//     filterDropdownList(ustensilsInput, ustensilsUl);
// });

// // Fonction pour filtrer les éléments de la liste en fonction de la saisie de l'utilisateur
// function filterDropdownList(filterInput, ulElement) {
//     const inputWords = filterInput.value.toLowerCase().trim().split(' ');
//     const items = ulElement.querySelectorAll("li");

//     items.forEach(item => {
//         const text = item.textContent.toLowerCase();
//         const allWordsMatch = inputWords.every(word => text.includes(word));
//         if (allWordsMatch) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }

// // Gérez les événements pour effacer les filtres
// const ingredientsCloseIcon = document.querySelector(".container-filtres-tags-tag1-logo.logoClose");
// const appliancesCloseIcon = document.querySelector(".container-filtres-tags-tag2-logo.logoClose");
// const ustensilsCloseIcon = document.querySelector(".container-filtres-tags-tag3-logo.logoClose");

// ingredientsCloseIcon.addEventListener("click", () => {
//     ingredientsInput.value = "";
//     resetFilterList(ingredientsUl);
//     selectedIngredients = [];
//     choiceList.innerHTML = "";
    
// });

// appliancesCloseIcon.addEventListener("click", () => {
//     appliancesInput.value = "";
//     resetFilterList(appliancesUl);
//     selectedAppliances = [];
//     choiceList.innerHTML = "";
// });

// ustensilsCloseIcon.addEventListener("click", () => {
//     ustensilsInput.value = "";
//     resetFilterList(ustensilsUl);
//     selectedUstensils = [];
//     choiceList.innerHTML = "";
// });

// // Fonction pour réinitialiser la liste de filtres
// function resetFilterList(ulElement) {
//     const items = ulElement.querySelectorAll("li");
//     items.forEach(item => {
//         item.style.display = "block";
//     });
// }

// // Gérez l'icône de fermeture dans la barre de recherche
// const searchInput = document.getElementById("search");
// const closeIcon = document.querySelector(".header-form-close");

// closeIcon.addEventListener("click", () => {
//     searchInput.value = "";
// });




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
// function updateFilteredRecipes() {
//     const matchingRecipes = [];
//     let recipeCountElement = document.querySelector('.container-filtres-results-number');

//     for (let i = 0; i < recipes.length; i++) {
//         const recipe = recipes[i];

//         // Vérifiez si tous les ingrédients sélectionnés sont présents dans la recette
//         const ingredientsMatch = selectedIngredients.every(selectedIngredient => {
//             return recipe.ingredients.some(ingredient => {
//                 return ingredient.ingredient.toLowerCase() === selectedIngredient.toLowerCase();
//             });
//         });

//         // Vérifiez si tous les ustensiles sélectionnés sont présents dans la recette
//         const utensilsMatch = selectedUstensils.every(selectedUtensil => {
//             return recipe.ustensils.some(utensil => {
//                 return utensil.toLowerCase() === selectedUtensil.toLowerCase();
//             });
//         });

//         // Vérifiez si tous les appareils sélectionnés sont présents dans la recette
//         const appliancesMatch = selectedAppliances.every(selectedAppliance => {
//             return recipe.appliance.toLowerCase() === selectedAppliance.toLowerCase();
//         });

//         // Si tous les ingrédients, ustensiles et appareils sélectionnés sont présents dans la recette, ajoutez la recette à matchingRecipes
//         if (ingredientsMatch && utensilsMatch && appliancesMatch) {
//             matchingRecipes.push(recipe);
//         }
//     }

//     // Mettez à jour le nombre de recettes correspondantes affiché
//     recipeCountElement.textContent = matchingRecipes.length;
// }
function updateFilteredRecipes() {
    let recipeCountElement = document.querySelector('.container-filtres-results-number');

    const matchingRecipes = recipes.filter(recipe => {
        // Vérifiez si tous les ingrédients sélectionnés sont présents dans la recette
        const ingredientsMatch = selectedIngredients.every(selectedIngredient => {
            return recipe.ingredients.some(ingredient => {
                return ingredient.ingredient.toLowerCase() === selectedIngredient.toLowerCase();
            });
        });

        // Vérifiez si tous les ustensiles sélectionnés sont présents dans la recette
        const utensilsMatch = selectedUstensils.every(selectedUtensil => {
            return recipe.ustensils.some(utensil => {
                return utensil.toLowerCase() === selectedUtensil.toLowerCase();
            });
        });

        // Vérifiez si tous les appareils sélectionnés sont présents dans la recette
        const appliancesMatch = selectedAppliances.every(selectedAppliance => {
            return recipe.appliance.toLowerCase() === selectedAppliance.toLowerCase();
        });

        // Si tous les ingrédients, ustensiles et appareils sélectionnés sont présents dans la recette, la recette correspond
        return ingredientsMatch && utensilsMatch && appliancesMatch;
    });

    // Mettez à jour le nombre de recettes correspondantes affiché
    recipeCountElement.textContent = matchingRecipes.length;
}

// Vous pouvez appeler updateFilteredRecipes() chaque fois que les éléments sont ajoutés ou supprimés.
// Par exemple :
// selectedIngredients.push("nouvel ingrédient"); // Exemple d'ajout d'un nouvel ingrédient
// updateFilteredRecipes();

// Appeler la fonction pour mettre à jour les recettes filtrées initialement
updateFilteredRecipes();







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



    //Algo 1 avec un filter
    function updateRecipesDisplay() {
        const searchText = input.value.toLowerCase();
        // let filteredRecipes;  algo1

//////////////ALGO 2//////////////////////
    let filteredRecipes = [];

    if (searchText.length >= 3) {
        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchText));

            if (recipe.name.toLowerCase().includes(searchText) ||
                recipe.description.toLowerCase().includes(searchText) ||
                ingredientsMatch ||
                recipe.appliance.toLowerCase().includes(searchText) ||
                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText))) {
                filteredRecipes.push(recipe);
            }
        }

//////////////ALGO 2//////////////////////


//////////////ALGO 1//////////////////////


        // if (searchText.length >= 3) {
        //     filteredRecipes = recipes.filter(recipe => {
        //         return recipe.name.toLowerCase().includes(searchText) ||
        //                recipe.description.toLowerCase().includes(searchText) ||
        //                recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchText)) ||
        //                recipe.appliance.toLowerCase().includes(searchText) ||
        //                recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText));
        //     });

        //////////////ALGO 1//////////////////////

        } else {
            filteredRecipes = recipes; // Affiche toutes les recettes si le champ est vide
        }




//ALGO 1 ENTIER

// function updateRecipesDisplay() {
//     const searchText = input.value.toLowerCase();
//     let filteredRecipes; 
//          if (searchText.length >= 3) {
//             filteredRecipes = recipes.filter(recipe => {
//                 return recipe.name.toLowerCase().includes(searchText) ||
//                        recipe.description.toLowerCase().includes(searchText) ||
//                        recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(searchText)) ||
//                        recipe.appliance.toLowerCase().includes(searchText) ||
//                        recipe.ustensils.some(ustensil => ustensil.toLowerCase().includes(searchText));
//             });
//     } else {
//         filteredRecipes = recipes; 

//     }




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
            description.textContent = recipe.description; // Assurez-vous d'avoir une fonction pour tronquer la description si nécessaire
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
        
                const ingredientText = `${ingredient.ingredient}: ${ingredient.quantity || ''} ${ingredient.unit || ''}`;
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


