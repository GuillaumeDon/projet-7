const ingredientsSelect = document.getElementById("ingredients");
const allIngredients = [];

recipes.forEach(recipe => {

    recipe.ingredients.forEach(ingredient => {

        if (!allIngredients.includes(ingredient.ingredient)) {
            allIngredients.push(ingredient.ingredient);
            const option = document.createElement("option");
            option.text = ingredient.ingredient;
            option.value = ingredient.ingredient;
            ingredientsSelect.add(option);
        }
    });
});

const appliancesSelect = document.getElementById("appliances");
const allAppliances = [];

recipes.forEach(recipe => {
    if (!allAppliances.includes(recipe.appliance)) {
        allAppliances.push(recipe.appliance);

        const option = document.createElement("option");
        option.text = recipe.appliance;
        option.value = recipe.appliance;
        appliancesSelect.add(option);
    }
});

const ustensilsSelect = document.getElementById("ustensils");
const allUstensils = [];

recipes.forEach(recipe => {

    recipe.ustensils.forEach(ustensil => {
        if (!allUstensils.includes(ustensil)) {
            allUstensils.push(ustensil);
            const option = document.createElement("option");
            option.text = ustensil;
            option.value = ustensil;
            ustensilsSelect.add(option);
        }
    });
});
