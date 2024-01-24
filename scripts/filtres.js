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


// Assurez-vous que vos recettes sont stockées dans une variable `recipes`

function updateRecipeCount() {
    const selectedIngredient = document.getElementById('ingredients').value;
    const selectedAppliance = document.getElementById('appliances').value;
    const selectedUtensil = document.getElementById('ustensils').value;
  
    let filteredRecipes = recipes.filter(recipe => {
      const matchesIngredient = selectedIngredient === 'ingredients' || recipe.ingredients.includes(selectedIngredient);
      const matchesAppliance = selectedAppliance === 'appliances' || recipe.appliance === selectedAppliance;
      const matchesUtensil = selectedUtensil === 'ustensils' || recipe.utensils.includes(selectedUtensil);
  
      return matchesIngredient && matchesAppliance && matchesUtensil;
    });
  
    // Mettez à jour l'interface utilisateur avec le nombre de recettes filtrées
    document.querySelector('.container-filtres-results-number').textContent = filteredRecipes.length;
  }
  
  // Attachez cette fonction comme un écouteur d'événements pour chaque sélecteur
  document.getElementById('ingredients').addEventListener('change', updateRecipeCount);
  document.getElementById('appliances').addEventListener('change', updateRecipeCount);
  document.getElementById('ustensils').addEventListener('change', updateRecipeCount);
  
  // Initialisez la page avec le nombre total de recettes
  document.querySelector('.container-filtres-results-number').textContent = recipes.length;
  