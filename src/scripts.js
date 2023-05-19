//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/search-icon.png'
// import { currentRecipe } from './data/data-model.js'
import { allContainer, viewRecipes, viewSearchResults, homeButton, showHome, categoriesContainer, selectRecipe, searchRecipes, saveButton } from './domUpdates.js'

// Data Model
let currentRecipe = {};

viewSearchResults.addEventListener('click', searchRecipes)
homeButton.addEventListener('click', showHome)
categoriesContainer.addEventListener('click', viewRecipes);
allContainer.addEventListener('click', selectRecipe)
saveButton.addEventListener('click', () => {
  recipesToCook(currentRecipe)
})
