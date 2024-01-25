function displayRecipeCards() {
    const recipeCardsContainer = document.querySelector('.container-recipe-cards');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('container-recipe-cards-item');

        const image = document.createElement('img');
        image.classList.add('container-recipe-cards-item-img');
        image.src = "./assets/pictures/recipes/"+recipe.image;
        recipeCard.appendChild(image);

        const containerTime =  document.createElement('div');
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
        secondTitle.textContent= `Recette`;
        recipeCard.appendChild(secondTitle);


        const description = document.createElement('p');
        description.classList.add('container-recipe-cards-item-description');
        // description.textContent = recipe.description;
        description.textContent = truncateDescription(recipe.description);
        recipeCard.appendChild(description);

        const thirdTitle = document.createElement('h4');
        thirdTitle.classList.add('container-recipe-cards-item-thirdTitle');
        thirdTitle.textContent= `Ingrédients`;
        recipeCard.appendChild(thirdTitle);


        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('container-recipe-cards-item-ingredientsList');

        recipe.ingredients.forEach(ingredient => {
            const ingredientItem = document.createElement('li');
            ingredientItem.classList.add('container-recipe-cards-item-ingredientsList-item');



            const ingredientText = `${ingredient.ingredient}<br><span class="grey-title">${ingredient.quantity || '-'} ${ingredient.unit || ''} </span>`;
            ingredientItem.innerHTML = ingredientText;
            ingredientsList.appendChild(ingredientItem);
        });
        recipeCard.appendChild(ingredientsList);

        recipeCardsContainer.appendChild(recipeCard);
    });

    function truncateDescription(description) {
        const maxLength = 140;
        return description.length > maxLength ? description.substring(0, maxLength) : description;
      }
      updateRecipeCount();//MAJ du compteur de recettes
}
function updateRecipeCount() {
    const recipeCards = document.querySelectorAll('.container-recipe-cards-item'); // Assurez-vous que le sélecteur correspond à vos cartes de recettes
    const recipeCount = recipeCards.length;
    document.querySelector('.container-filtres-results-number').textContent = recipeCount;
}
// Appeler la fonction pour afficher les cartes de recette au chargement de la page
window.onload = displayRecipeCards;






function filterCardsByTags(selectedTags) {
    const allCards = document.querySelectorAll('.container-recipe-cards-item'); // Classe de vos cartes

    allCards.forEach(card => {
        const cardData = {
            title: card.querySelector('.container-recipe-cards-item-title').textContent.toLowerCase(),
            description: card.querySelector('.container-recipe-cards-item-description').textContent.toLowerCase(),
            ingredients: Array.from(card.querySelectorAll('.container-recipe-cards-item-ingredientsList-item')).map(el => el.textContent.toLowerCase())
        };

        const isMatch = selectedTags.every(tag => 
            cardData.title.includes(tag) || 
            cardData.description.includes(tag) ||
            cardData.ingredients.some(ingredient => ingredient.includes(tag))
        );

        card.style.display = isMatch ? 'block' : 'none';
    });
}
