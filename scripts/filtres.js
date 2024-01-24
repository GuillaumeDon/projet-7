// const ingredientsSelect = document.getElementById("ingredients");
// const allIngredients = [];

// recipes.forEach(recipe => {

//     recipe.ingredients.forEach(ingredient => {

//         if (!allIngredients.includes(ingredient.ingredient)) {
//             allIngredients.push(ingredient.ingredient);
//             const option = document.createElement("option");
//             option.text = ingredient.ingredient;
//             option.value = ingredient.ingredient;
//             ingredientsSelect.add(option);
//         }
//     });
// });

// const appliancesSelect = document.getElementById("appliances");
// const allAppliances = [];

// recipes.forEach(recipe => {
//     if (!allAppliances.includes(recipe.appliance)) {
//         allAppliances.push(recipe.appliance);

//         const option = document.createElement("option");
//         option.text = recipe.appliance;
//         option.value = recipe.appliance;
//         appliancesSelect.add(option);
//     }
// });

// const ustensilsSelect = document.getElementById("ustensils");
// const allUstensils = [];

// recipes.forEach(recipe => {

//     recipe.ustensils.forEach(ustensil => {
//         if (!allUstensils.includes(ustensil)) {
//             allUstensils.push(ustensil);
//             const option = document.createElement("option");
//             option.text = ustensil;
//             option.value = ustensil;
//             ustensilsSelect.add(option);
//         }
//     });
// });






// Sélectionnez les éléments <ul> appropriés par leurs classes
const ingredientsUl = document.querySelector(".container-filtres-tags-tag1 .dropdown-menu ul");
const appliancesUl = document.querySelector(".container-filtres-tags-tag2 .dropdown-menu ul");
const ustensilsUl = document.querySelector(".container-filtres-tags-tag3 .dropdown-menu ul");

// Créez des ensembles pour stocker les valeurs uniques
const allIngredients = new Set();
const allAppliances = new Set();
const allUstensils = new Set();

// Parcourez les recettes pour collecter les valeurs uniques
recipes.forEach(recipe => {
    recipe.ingredients.forEach(ingredient => {
        allIngredients.add(ingredient.ingredient);
    });

    allAppliances.add(recipe.appliance);

    recipe.ustensils.forEach(ustensil => {
        allUstensils.add(ustensil);
    });
});

// Fonction pour ajouter des éléments <li> à une liste <ul>
function addItemsToList(ulElement, itemValues) {
    itemValues.forEach(value => {
        const li = document.createElement("li");
        li.textContent = value;
        ulElement.appendChild(li);
    });
}

// Ajoutez les éléments <li> aux listes <ul>
addItemsToList(ingredientsUl, allIngredients);
addItemsToList(appliancesUl, allAppliances);
addItemsToList(ustensilsUl, allUstensils);
