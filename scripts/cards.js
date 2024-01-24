function displayRecipeCards() {
    const recipeCardsContainer = document.querySelector('.container-recipe-cards');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('container-recipe-cards-item');

        const image = document.createElement('img');
        image.classList.add('recipe-image');
        image.src = "./assets/pictures/recipes/"+recipe.image;
        recipeCard.appendChild(image);

        const name = document.createElement('h2');
        name.textContent = recipe.name;
        recipeCard.appendChild(name);

        const time = document.createElement('p');
        time.textContent = `Temps : ${recipe.time} minutes`;
        recipeCard.appendChild(time);

        const servings = document.createElement('p');
        servings.textContent = `Portions : ${recipe.servings}`;
        recipeCard.appendChild(servings);

        const ingredientsList = document.createElement('ul');
        recipe.ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('li');
            const ingredientText = `${ingredient.quantity || ''} ${ingredient.unit || ''} ${ingredient.ingredient}`;
            ingredientItem.textContent = ingredientText;
            ingredientsList.appendChild(ingredientItem);
        });
        recipeCard.appendChild(ingredientsList);

        recipeCardsContainer.appendChild(recipeCard);
    });
}

// Appeler la fonction pour afficher les cartes de recette au chargement de la page
window.onload = displayRecipeCards;