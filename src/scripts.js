// SCRIPTS //

// IMPORTS //

import './styles.css'
import { apiCalls, recipeData } from './apiCalls'
import './images/food-panorama.jpg'
import './images/turing-logo.png'
import './images/search-icon.png'
import './images/chef-icon.png'
import { allContainer, viewRecipes, viewSearchResults, homeButton, showHome, showUserPage,
  categoriesContainer, selectRecipe, searchRecipes, showFilteredRecipes, saveButton, createRandomUser,
   userButton, saveTheRecipe, displayRecipes, backButton, savedRecipes, userSearchIcon, userSearchInput, userRecipes, backFilteredRecipes, searchInput, userBackButton, hide } from './domUpdates.js'

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

userBackButton.addEventListener('click', () => {
  displayRecipes(savedRecipes, userRecipes);
  hide([userBackButton]);
});

window.addEventListener('load', apiCalls);
userButton.addEventListener('click', showUserPage);
homeButton.addEventListener('click', showHome);
categoriesContainer.addEventListener('click', viewRecipes);
allContainer.addEventListener('click', selectRecipe);
saveButton.addEventListener('click', saveTheRecipe);
backButton.addEventListener('click', backFilteredRecipes);
userRecipes.addEventListener('click', selectRecipe);


