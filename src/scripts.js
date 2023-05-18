//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/search-icon.png'
// import { currentRecipe } from './data/data-model.js'
import { allContainer, viewRecipe, viewRecipes, filterByNameOrTag, viewSearchResults, allRecipes,
   homeButton, showHome, categoriesContainer, makeCurrentRecipe, selectRecipe 
 } from './domUpdates.js'

const setUpSearchedRecipes = (event) => {
  filterByNameOrTag(event)
  const recipes = allRecipes()
  recipes.forEach((recipe) => {
    recipe.addEventListener('click', viewRecipe)
  })
}

viewSearchResults.addEventListener('click', setUpSearchedRecipes)
homeButton.addEventListener('click', showHome)
categoriesContainer.addEventListener('click', viewRecipes);
allContainer.addEventListener('click', selectRecipe)

