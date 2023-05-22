//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/search-icon.png'
import './images/chef-icon.png'
// import { currentRecipe } from './data/data-model.js'
import { allContainer, currentRecipes, displayRecipes, viewRecipes, viewSearchResults, homeButton, showHome, showUserPage, deleteRecipe,
  categoriesContainer, selectRecipe, searchRecipes, viewRecipe, showFilteredRecipes, saveButton, createRandomUser, userButton, saveRecipe, backButton, savedRecipes, userSearchIcon, userSearchInput, userRecipes, backFilteredRecipes, searchInput } from './domUpdates.js'

// EVENT LISTENERS //

viewSearchResults.addEventListener('click', () => {
  searchRecipes(currentRecipes, searchInput, allContainer)
  showFilteredRecipes()
})
userButton.addEventListener('click', showUserPage)
homeButton.addEventListener('click', showHome)
window.addEventListener('load', createRandomUser)
categoriesContainer.addEventListener('click', viewRecipes);
allContainer.addEventListener('click', selectRecipe)
saveButton.addEventListener('click', saveRecipe)
backButton.addEventListener('click', backFilteredRecipes)
userRecipes.addEventListener('click', selectRecipe)

userSearchIcon.addEventListener('click', () => {
  searchRecipes(savedRecipes, userSearchInput, userRecipes)
})
