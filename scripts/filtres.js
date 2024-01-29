


// const ingredientsUl = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
// const appliancesUl = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
// const ustensilsUl = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");

// const allIngredients = new Set();
// const allAppliances = new Set();
// const allUstensils = new Set();

// recipes.forEach(recipe => {
//     recipe.ingredients.forEach(ingredient => {
//         allIngredients.add(ingredient.ingredient);
//     });

//     allAppliances.add(recipe.appliance);

//     recipe.ustensils.forEach(ustensil => {
//         allUstensils.add(ustensil);
//     });
// });

// function addItemsToList(ulElement, itemValues) {
//     itemValues.forEach(value => {
//         const li = document.createElement("li");
//         li.textContent = value;
//         ulElement.appendChild(li);
//     });
// }

// addItemsToList(ingredientsUl, allIngredients);
// addItemsToList(appliancesUl, allAppliances);
// addItemsToList(ustensilsUl, allUstensils);

// const ingredientsInput = document.getElementById("ingredientsDropdown");
// const logoClose = document.querySelector(".container-filtres-tags-tag1-logo.logoClose");

// logoClose.addEventListener("click", () => {
//     ingredientsInput.value = "";
// });

// const appliancesInput = document.getElementById("appliancesDropdown");
// const logoCloseAppliances = document.querySelector(".container-filtres-tags-tag2-logo.logoClose");

// logoCloseAppliances.addEventListener("click", () => {
//     appliancesInput.value = "";
// });

// const ustensilsInput = document.getElementById("ustensilsDropdown");
// const logoCloseUstensils = document.querySelector(".container-filtres-tags-tag3-logo.logoClose");

// logoCloseUstensils.addEventListener("click", () => {
//     ustensilsInput.value = "";
// });

// // Récupérez la liste de choix
// const choiceList = document.querySelector(".container-filtres-choice ul");

// // Fonction pour vérifier si un élément existe déjà dans la liste de choix
// function isItemInList(ulElement, itemName) {
//     const items = ulElement.querySelectorAll("li");
//     for (const item of items) {
//         if (item.textContent === itemName) {
//             return true; // L'élément existe déjà dans la liste
//         }
//     }
//     return false; // L'élément n'existe pas dans la liste
// }

// ingredientsUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedIngredient = event.target.textContent;
//         if (!isItemInList(choiceList, selectedIngredient)) {
//             addFilterItem(choiceList, selectedIngredient, selectedIngredients);
//             selectedIngredients.push(selectedIngredient);
//             console.log(selectedIngredients); // Affiche le tableau dans la console

//         }
//     }
// });

// appliancesUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedAppliance = event.target.textContent;
//         if (!isItemInList(choiceList, selectedAppliance)) {
//             addFilterItem(choiceList, selectedAppliance, selectedAppliances);
//             selectedAppliances.push(selectedAppliance);
//             console.log(selectedAppliances); // Affiche le tableau dans la console

//         }
//     }
// });

// ustensilsUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedUstensil = event.target.textContent;
//         if (!isItemInList(choiceList, selectedUstensil)) {
//             addFilterItem(choiceList, selectedUstensil, selectedUstensils);
//             selectedUstensils.push(selectedUstensil);
//             console.log(selectedUstensils); // Affiche le tableau dans la console

//         }
//     }
// });

// // Créez trois tableaux pour stocker les éléments sélectionnés dans chaque menu déroulant
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
//         console.log(array); // Supprime l'élément du tableau
//         ulElement.removeChild(li); // Supprime l'élément <li>
//     });

//     li.appendChild(img);
//     ulElement.appendChild(li);
// }
// //header filter effacer

// const searchInput = document.getElementById("search");
// const closeIcon = document.querySelector(".header-form-close");

// closeIcon.addEventListener("click", () => {
//     searchInput.value = "";
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


// const ingredientsList = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
// const appliancesList = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
// const ustensilsList = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");

// // Écoutez les événements d'entrée utilisateur dans les barres de recherche
// ingredientsInput.addEventListener("input", () => {
//     filterDropdownList(ingredientsInput, ingredientsList);
// });

// appliancesInput.addEventListener("input", () => {
//     filterDropdownList(appliancesInput, appliancesList);
// });

// ustensilsInput.addEventListener("input", () => {
//     filterDropdownList(ustensilsInput, ustensilsList);
// });










// Charger les données du fichier JSON
fetch('data/recipes.json') // Assurez-vous de spécifier le bon chemin d'accès
    .then(response => response.json())
    .then(recipes => {
        const ingredientsUl = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
        const appliancesUl = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
        const ustensilsUl = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");

        const allIngredients = new Set();
        const allAppliances = new Set();
        const allUstensils = new Set();

        recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                allIngredients.add(ingredient.ingredient);
            });

            allAppliances.add(recipe.appliance);

            recipe.ustensils.forEach(ustensil => {
                allUstensils.add(ustensil);
            });
        });

        function addItemsToList(ulElement, itemValues) {
            itemValues.forEach(value => {
                const li = document.createElement("li");
                li.textContent = value;
                ulElement.appendChild(li);
            });
        }

        addItemsToList(ingredientsUl, allIngredients);
        addItemsToList(appliancesUl, allAppliances);
        addItemsToList(ustensilsUl, allUstensils);

        const ingredientsInput = document.getElementById("ingredientsDropdown");
        const logoClose = document.querySelector(".container-filtres-tags-tag1-logo.logoClose");

        logoClose.addEventListener("click", () => {
            ingredientsInput.value = "";
        });

        const appliancesInput = document.getElementById("appliancesDropdown");
        const logoCloseAppliances = document.querySelector(".container-filtres-tags-tag2-logo.logoClose");

        logoCloseAppliances.addEventListener("click", () => {
            appliancesInput.value = "";
        });

        const ustensilsInput = document.getElementById("ustensilsDropdown");
        const logoCloseUstensils = document.querySelector(".container-filtres-tags-tag3-logo.logoClose");

        logoCloseUstensils.addEventListener("click", () => {
            ustensilsInput.value = "";
        });

        // Récupérez la liste de choix
        const choiceList = document.querySelector(".container-filtres-choice ul");

        // Fonction pour vérifier si un élément existe déjà dans la liste de choix
        function isItemInList(ulElement, itemName) {
            const items = ulElement.querySelectorAll("li");
            for (const item of items) {
                if (item.textContent === itemName) {
                    return true; // L'élément existe déjà dans la liste
                }
            }
            return false; // L'élément n'existe pas dans la liste
        }

        ingredientsUl.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                const selectedIngredient = event.target.textContent;
                if (!isItemInList(choiceList, selectedIngredient)) {
                    addFilterItem(choiceList, selectedIngredient, selectedIngredients);
                    selectedIngredients.push(selectedIngredient);
                    console.log(selectedIngredients); // Affiche le tableau dans la console

                }
            }
        });

        appliancesUl.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                const selectedAppliance = event.target.textContent;
                if (!isItemInList(choiceList, selectedAppliance)) {
                    addFilterItem(choiceList, selectedAppliance, selectedAppliances);
                    selectedAppliances.push(selectedAppliance);
           console.log(selectedAppliances); // Affiche le tableau dans la console
                }
            }
        });

        ustensilsUl.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                const selectedUstensil = event.target.textContent;
                if (!isItemInList(choiceList, selectedUstensil)) {
                    addFilterItem(choiceList, selectedUstensil, selectedUstensils);
                   selectedUstensils.push(selectedUstensil);
                    console.log(selectedUstensils); // Affiche le tableau dans la console

                }
            }
        });

        // Créez trois tableaux pour stocker les éléments sélectionnés dans chaque menu déroulant
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
        }

        
//header filter effacer

const searchInput = document.getElementById("search");
const closeIcon = document.querySelector(".header-form-close");

closeIcon.addEventListener("click", () => {
    searchInput.value = "";
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


const ingredientsList = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
const appliancesList = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
const ustensilsList = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");

// Écoutez les événements d'entrée utilisateur dans les barres de recherche
ingredientsInput.addEventListener("input", () => {
    filterDropdownList(ingredientsInput, ingredientsList);
});

appliancesInput.addEventListener("input", () => {
    filterDropdownList(appliancesInput, appliancesList);
});

ustensilsInput.addEventListener("input", () => {
    filterDropdownList(ustensilsInput, ustensilsList);

    })
    .catch(error => {
        console.error('Erreur lors du chargement du fichier JSON :', error);
    });







});





