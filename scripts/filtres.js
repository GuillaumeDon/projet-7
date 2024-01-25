
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



// //header filter effacer

// const searchInput = document.getElementById("search");
// const closeIcon = document.querySelector(".header-form-close");

// closeIcon.addEventListener("click", () => {
//     searchInput.value = "";
// });









// // Récupérez la liste de choix
// const choiceList = document.querySelector(".container-filtres-choice ul");

// // Ajoutez un gestionnaire d'événements de clic aux éléments de la liste déroulante
// ingredientsUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedIngredient = event.target.textContent;
//         addFilterItem(choiceList, selectedIngredient);
//     }
// });

// appliancesUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedAppliance = event.target.textContent;
//         addFilterItem(choiceList, selectedAppliance);
//     }
// });

// ustensilsUl.addEventListener("click", (event) => {
//     if (event.target.tagName === "LI") {
//         const selectedUstensil = event.target.textContent;
//         addFilterItem(choiceList, selectedUstensil);
//     }
// });

// // Fonction pour ajouter un élément à la liste de choix
// function addFilterItem(ulElement, itemName) {
//     const li = document.createElement("li");
//     li.textContent = itemName;
//     ulElement.appendChild(li);
// }





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

// Ajoutez un gestionnaire d'événements de clic aux éléments de la liste déroulante
ingredientsUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedIngredient = event.target.textContent;
        if (!isItemInList(choiceList, selectedIngredient)) {
            addFilterItem(choiceList, selectedIngredient);
        }
    }
});

appliancesUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedAppliance = event.target.textContent;
        if (!isItemInList(choiceList, selectedAppliance)) {
            addFilterItem(choiceList, selectedAppliance);
        }
    }
});

ustensilsUl.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const selectedUstensil = event.target.textContent;
        if (!isItemInList(choiceList, selectedUstensil)) {
            addFilterItem(choiceList, selectedUstensil);
        }
    }
});

// Fonction pour ajouter un élément à la liste de choix
function addFilterItem(ulElement, itemName) {
    const li = document.createElement("li");
    li.textContent = itemName;
    ulElement.appendChild(li);
}

//header filter effacer

const searchInput = document.getElementById("search");
const closeIcon = document.querySelector(".header-form-close");

closeIcon.addEventListener("click", () => {
    searchInput.value = "";
});