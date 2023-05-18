//NOTE: Your DOM manipulation will occur in this file

import recipeData from "./data/recipes.js"
import { filterByTag, filterByName, filterRecipes } from "./functions/filter-recipes.js"
import { calculateCost } from "./functions/calculate-cost.js";
import { recipeIngredients } from "./functions/recipe-ingredients.js";
import { currentRecipe, currentRecipes, savedRecipes } from "./data/data-model.js";

const viewAll = document.querySelector('.categories__all');
const allSection = document.querySelector('.all');
const categoriesSection = document.querySelector('.categories');
const categoriesContainer = document.querySelector('.categories__container');
const footerSection = document.querySelector('.footer');
const viewSearchResults = document.querySelector('.home__searchIcon');
const searchInput = document.querySelector('.home__searchInput');
const allContainer = document.querySelector('.all__container');
const allRecipes = () => document.querySelectorAll('.all__recipes');
const recipeSection = document.querySelector('.recipe');
const recipeTitle = document.querySelector('.recipe__title');
const imageContainer = document.querySelector('.image__container');
const ingredientsDisplay = document.querySelector('.recipe__ingredients');
const instructionsDisplay = document.querySelector('.recipe__instructions');
const recipeCost = document.querySelector('.recipe__cost')
const homeButton = document.querySelector('.home__button')

// Modifiers
const show = (names) => {
  names.forEach((name) => name.classList.remove('class--hidden'))
};

const hide = (names) => {
  names.forEach((name) => name.classList.add('class--hidden'))
};

// DOM

//Good
const displayRecipes = (recipes) => {
  allContainer.innerHTML = ''
  hide([categoriesSection, footerSection, recipeSection]);
  show([allSection, homeButton]);
  recipes.forEach(recipe => {
    allContainer.innerHTML += 
    `<div style="background-image: url(${recipe.image})" class="all__recipes" id="${recipe.id}">
      <p class='all__text' id="${recipe.id}">${recipe.name}</p>
    </div>`
  })
};

//Questionable
const filterByNameOrTag = () => {
  allContainer.innerHTML = ''
  hide([categoriesSection, footerSection, recipeSection]);
  show([allSection, homeButton]);
  let results = filterByTag(recipeData, searchInput.value)
  if (results === `Error: try a new tag`){
    results = filterByName(recipeData, searchInput.value)
  }
  if (results !== 'No results' && searchInput.value){
    results.forEach(recipe => {
      allContainer.innerHTML += 
      `<div style="background-image: url(${recipe.image})" class='all__recipes'>
        <p class='all__text'>${recipe.name}</p>
      </div>`
    })
  } else {
    allContainer.innerHTML = 
      `<p class='all__text'>No Results!</p>`
  }
};

//Good
const showHome = () => {
  hide([allSection, homeButton, recipeSection]);
  show([categoriesSection, footerSection]);
};

//Good
const viewRecipes = (event) => {
  const target = event.target.id;
  const filteredRecipes = filterRecipes(recipeData, target)
  displayRecipes(filteredRecipes)
};

// Updates Data Model
// Move to its own file and import/export
const makeCurrentRecipe = (recipeData) => {
  
  let recipe = {
    name: recipeData.name,
    image: recipeData.image,
    tags: recipeData.tags,
    cost: calculateCost(recipeData.name),
    instructions: recipeData.instructions,
    ingredients: recipeIngredients(recipeData.name)
  }
  return recipe;
};

const selectRecipe = (event) => {
  const target = parseInt(event.target.id)
  const foundRecipe = recipeData.find(recipe => recipe.id === target)
  const currentRecipe = makeCurrentRecipe(foundRecipe);
  viewRecipe(currentRecipe);
}

//Good
const viewRecipe = (recipe) => {
  show([recipeSection])
  hide([allSection])
  recipeTitle.innerText = recipe.name;
  imageContainer.innerHTML = `<img src="${recipe.image}">`;
  ingredientsDisplay.innerText = `Ingredients: ${recipe.ingredients}`; 
  recipe.instructions.forEach((instruction) => instructionsDisplay.innerHTML += `<p>${instruction.number}.) ${instruction.instruction}</p>`);
  recipeCost.innerHTML = `<p>${recipe.cost}</p>`;
};

export { 
  viewAll,
  displayRecipes,
  viewSearchResults, 
  filterByNameOrTag,
  viewRecipes,
  viewRecipe,
  allRecipes,
  homeButton,
  showHome,
  categoriesContainer,
  allContainer,
  makeCurrentRecipe,
  selectRecipe
}