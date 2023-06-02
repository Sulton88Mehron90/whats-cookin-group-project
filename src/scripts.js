// SCRIPTS //

// IMPORTS //

import './styles.css'
import { fetchRecipes, fetchIngredients, fetchUsers, postSavedRecipe } from './apiCalls'
import './images/food-panorama.jpg'
import './images/turing-logo.png'
import './images/search-icon.png'
import './images/chef-icon.png'
import { allContainer, viewRecipes, viewSearchResults, homeButton, showHome, showUserPage,
  categoriesContainer, selectRecipe, searchRecipes, showFilteredRecipes, saveButton, createRandomUser,
   userButton, saveTheRecipe, displayRecipes, backButton, savedRecipes, userSearchIcon, userSearchInput, userRecipes, backFilteredRecipes, searchInput, userBackButton, hide,
  displayRecipesToCook, currentRecipe, recipeToPost } from './domUpdates.js'

// EVENT LISTENERS //

let recipeData = [];
let ingredientsData = [];
let usersData = [];
let currentUser = {};

window.addEventListener('load', () => {
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
              currentUser = createRandomUser(usersData)
              console.log(currentUser)
              displayRecipesToCook(currentUser, recipeData, savedRecipes)
            }
          })
          .catch(error => {
            console.error('Error parsing response:', error);
          });
      } else {
        alert(`${response.status} server request failed, try again later`)
        console.error('Request failed with status:', response.status);
      }
    });
  });
});

viewSearchResults.addEventListener('click', () => {
  searchRecipes(recipeData, searchInput, allContainer)
  showFilteredRecipes()
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
saveButton.addEventListener('click', () => {
  saveTheRecipe()
});
backButton.addEventListener('click', backFilteredRecipes);
userRecipes.addEventListener('click', selectRecipe);


export { recipeData, ingredientsData, usersData, currentUser }