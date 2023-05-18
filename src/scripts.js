//NOTE: Data model and non-dom manipulating logic will live in this file.

import './styles.css'
import apiCalls from './apiCalls'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/search-icon.png'
import ingredientsData from './data/ingredients.js'
import sampleRecipeData from './data/sample-recipes.js'
import { filterByName, filterByTag } from './functions/filter-recipes.js'
import recipeData from './data/recipes.js'
import { allContainer, viewRecipe, viewRecipes, filterByNameOrTag, viewSearchResults, allRecipes,
   homeButton, showHome, categoriesContainer 
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
allContainer.addEventListener('click', event => {
  console.log(event.target)
})
