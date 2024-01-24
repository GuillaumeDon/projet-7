
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



//header filter effacer

const searchInput = document.getElementById("search");
const closeIcon = document.querySelector(".header-form-close");

closeIcon.addEventListener("click", () => {
    searchInput.value = "";
});
