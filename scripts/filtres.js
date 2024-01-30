

fetch('data/recipes.json')
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
            resetFilterList(ingredientsUl, ingredientsList);
        });

        const appliancesInput = document.getElementById("appliancesDropdown");
        const logoCloseAppliances = document.querySelector(".container-filtres-tags-tag2-logo.logoClose");

        logoCloseAppliances.addEventListener("click", () => {
            appliancesInput.value = "";
            resetFilterList(appliancesUl, appliancesList);
        });

        const ustensilsInput = document.getElementById("ustensilsDropdown");
        const logoCloseUstensils = document.querySelector(".container-filtres-tags-tag3-logo.logoClose");

        logoCloseUstensils.addEventListener("click", () => {
            ustensilsInput.value = "";
            resetFilterList(ustensilsUl, ustensilsList);
        });

        const choiceList = document.querySelector(".container-filtres-choice ul");

        function isItemInList(ulElement, itemName) {
            const items = ulElement.querySelectorAll("li");
            for (const item of items) {
                if (item.textContent === itemName) {
                    return true;
                }
            }
            return false;
        }

        ingredientsUl.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                const selectedIngredient = event.target.textContent;
                if (!isItemInList(choiceList, selectedIngredient)) {
                    addFilterItem(choiceList, selectedIngredient, selectedIngredients);
                    const matchingRecipes = recipes.filter(recipe => {
                        return recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() === selectedIngredient.toLowerCase());
                    });
                    selectedIngredients.push(selectedIngredient);
                }
            }
        });

        appliancesUl.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                const selectedAppliance = event.target.textContent;
                if (!isItemInList(choiceList, selectedAppliance)) {
                    addFilterItem(choiceList, selectedAppliance, selectedAppliances);
                    const matchingRecipes = recipes.filter(recipe => {
                        return recipe.appliance.toLowerCase() === selectedAppliance.toLowerCase();
                    });
                    selectedAppliances.push(selectedAppliance);
                }
            }
        });

        ustensilsUl.addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                const selectedUstensil = event.target.textContent;
                if (!isItemInList(choiceList, selectedUstensil)) {
                    addFilterItem(choiceList, selectedUstensil, selectedUstensils);
                    const matchingRecipes = recipes.filter(recipe => {
                        return recipe.ustensils.some(ustensil => ustensil.toLowerCase() === selectedUstensil.toLowerCase());
                    });
                    selectedUstensils.push(selectedUstensil);
                }
            }
        });

        let selectedIngredients = [];
        let selectedAppliances = [];
        let selectedUstensils = [];

        function removeItemFromArray(array, item) {
            const index = array.indexOf(item);
            if (index > -1) {
                array.splice(index, 1);
            }
        }

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

        const searchInput = document.getElementById("search");
        const closeIcon = document.querySelector(".header-form-close");

        closeIcon.addEventListener("click", () => {
            searchInput.value = "";
        });

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

        ingredientsInput.addEventListener("input", () => {
            filterDropdownList(ingredientsInput, ingredientsList);
        });

        appliancesInput.addEventListener("input", () => {
            filterDropdownList(appliancesInput, appliancesList);
        });

        ustensilsInput.addEventListener("input", () => {
            filterDropdownList(ustensilsInput, ustensilsList);
        });

        const ingredientsCloseIcon = document.querySelector(".container-filtres-tags-tag1-logo.logoClose");
        const appliancesCloseIcon = document.querySelector(".container-filtres-tags-tag2-logo.logoClose");
        const ustensilsCloseIcon = document.querySelector(".container-filtres-tags-tag3-logo.logoClose");

        ingredientsCloseIcon.addEventListener("click", () => {
            ingredientsInput.value = "";
            resetFilterList(ingredientsUl, ingredientsList);
        });

        appliancesCloseIcon.addEventListener("click", () => {
            appliancesInput.value = "";
            resetFilterList(appliancesList);
        });

        ustensilsCloseIcon.addEventListener("click", () => {
            ustensilsInput.value = "";
            resetFilterList(ustensilsList);
        });

        function resetFilterList(listElement) {
            const items = listElement.querySelectorAll("li");
            items.forEach(item => {
                item.style.display = "block";
            });
        }
    })
    .catch(error => {
        console.error('Erreur lors du chargement du fichier JSON :', error);
    });
