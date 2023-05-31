// SCRIPTS //

// IMPORTS //

import './styles.css'
import { fetchRecipes, fetchIngredients, fetchUsers } from './apiCalls'
import './images/food-panorama.jpg'
import './images/turing-logo.png'
import './images/search-icon.png'
import './images/chef-icon.png'
import { allContainer, viewRecipes, viewSearchResults, homeButton, showHome, showUserPage,
  categoriesContainer, selectRecipe, searchRecipes, showFilteredRecipes, saveButton, createRandomUser,
   userButton, saveTheRecipe, displayRecipes, backButton, savedRecipes, userSearchIcon, userSearchInput, userRecipes, backFilteredRecipes, searchInput, userBackButton, hide } from './domUpdates.js'

// EVENT LISTENERS //

let recipeData = [];
let ingredientsData = [];
let usersData = [];

Promise.all([fetchRecipes, fetchIngredients, fetchUsers])
  .then(responses => {
    responses.forEach(response => {
      if (response.ok) {
        response.json()
          .then(data => {
            if (response.url.includes('/recipes')) {
              recipeData = data.recipes;
            } else if (response.url.includes('/ingredients')) {
              ingredientsData = data.ingredients;
            } else if (response.url.includes('/users')) {
              usersData = data.users;
            }
          })
          .catch(error => {
            console.error('Error parsing response:', error);
            // There was an error parsing the data into JSON
          });
      } else {
        console.error('Request failed with status:', response.status);
        // The response is not ok
      }
    });
  });

viewSearchResults.addEventListener('click', () => {
  searchRecipes(recipeData, searchInput, allContainer)
  showFilteredRecipes()
});

window.addEventListener('load', () => {
  setTimeout(() => {createRandomUser()}, 1000);
});

userSearchIcon.addEventListener('click', () => {
  searchRecipes(savedRecipes, userSearchInput, userRecipes)
});

userBackButton.addEventListener('click', () => {
  displayRecipes(savedRecipes, userRecipes);
  hide([userBackButton]);
});

userButton.addEventListener('click', showUserPage);
homeButton.addEventListener('click', showHome);
categoriesContainer.addEventListener('click', viewRecipes);
allContainer.addEventListener('click', selectRecipe);
saveButton.addEventListener('click', saveTheRecipe);
backButton.addEventListener('click', backFilteredRecipes);
userRecipes.addEventListener('click', selectRecipe);


export { recipeData, ingredientsData, usersData }