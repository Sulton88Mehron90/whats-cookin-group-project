// SCRIPTS //

// IMPORTS //

import './styles.css'
import { apiCalls, recipeData } from './apiCalls'
import './images/turing-logo.png'
import './images/search-icon.png'
import './images/chef-icon.png'
import { allContainer, currentRecipes, viewRecipes, viewSearchResults, homeButton, showHome, showUserPage,
  categoriesContainer, selectRecipe, searchRecipes, showFilteredRecipes, saveButton, createRandomUser,
   userButton, saveTheRecipe, backButton, savedRecipes, userSearchIcon, userSearchInput, userRecipes, backFilteredRecipes, searchInput } from './domUpdates.js'

// EVENT LISTENERS //

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

window.addEventListener('load', apiCalls);
userButton.addEventListener('click', showUserPage);
homeButton.addEventListener('click', showHome);
categoriesContainer.addEventListener('click', viewRecipes);
allContainer.addEventListener('click', selectRecipe);
saveButton.addEventListener('click', saveTheRecipe);
backButton.addEventListener('click', backFilteredRecipes);
userRecipes.addEventListener('click', selectRecipe);

