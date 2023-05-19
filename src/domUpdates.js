//NOTE: Your DOM manipulation will occur in this file

import recipeData from "./data/recipes.js"
import { filterByTag, filterByName, filterRecipes } from "./functions/filter-recipes.js"
import { makeCurrentRecipe } from "./functions/current-recipe.js";
import { calculateCost } from "./functions/calculate-cost.js";
import { recipeIngredients } from "./functions/recipe-ingredients.js";

const viewAll = document.querySelector('.categories__all');
const allSection = document.querySelector('.all');
const categoriesSection = document.querySelector('.categories');
const categoriesContainer = document.querySelector('.categories__container');
const footerSection = document.querySelector('.footer');
const viewSearchResults = document.querySelector('.home__searchIcon');
const searchInput = document.querySelector('.home__searchInput');
const allContainer = document.querySelector('.all__container');
const recipeSection = document.querySelector('.recipe');
const recipeTitle = document.querySelector('.recipe__title');
const imageContainer = document.querySelector('.image__container');
const ingredientsDisplay = document.querySelector('.recipe__ingredients');
const instructionsDisplay = document.querySelector('.recipe__instructions');
const recipeCost = document.querySelector('.recipe__cost')
const homeButton = document.querySelector('.home__button')
const saveButton = document.querySelector('.recipe__sbutton');
// DATAMODEL 
let savedRecipes = [];

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
  if (!recipes) {
    return 'No results'
  }
  recipes.forEach(recipe => {
    allContainer.innerHTML += 
    `<div style="background-image: url(${recipe.image})" class="all__recipes" id="${recipe.id}">
      <p class='all__text' id="${recipe.id}">${recipe.name}</p>
    </div>`
  })
};

const searchRecipes = () => {
  const filteredRecipes = filterRecipes(recipeData, searchInput.value);
  if(!searchInput.value || !filteredRecipes.length) {
    allContainer.innerHTML = 
      displayRecipes();
       `<p class='all__text'>No Results!</p>`
  } else {
 
  displayRecipes(filteredRecipes)
  }
}

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

//Good
const selectRecipe = (event) => {
  const target = parseInt(event.target.id);
  const foundRecipe = recipeData.find(recipe => recipe.id === target);
  const currentRecipe = makeCurrentRecipe(foundRecipe);

  viewRecipe(currentRecipe);
}

//Good
const viewRecipe = (recipe) => {
  show([recipeSection]);
  hide([allSection]);
  const userRecipeIngredients = recipeIngredients(recipe.name)

  userRecipeIngredients.forEach(ingredient => {
    ingredientsDisplay.innerHTML += `
    <p>${ingredient.name}</p>
    <p>${ingredient.amount}</p>
    <p>${ingredient.unit}</p>`
  })
  recipeTitle.innerText = recipe.name;
  imageContainer.innerHTML = `<img src="${recipe.image}">`;
   
  recipe.instructions.forEach((instruction) => instructionsDisplay.innerHTML += `<p>${instruction.number}.) ${instruction.instruction}</p>`);
  recipeCost.innerHTML = `<p>${recipe.cost}</p>`;
};

// const recipesToCook = (recipe) => {
//   savedRecipes.push(recipe);
// }

// event listener on save recipe button that runs the recipestocook function and passes in current recipe as argument.


export { 
  viewAll,
  categoriesContainer,
  allContainer,
  homeButton,
  viewSearchResults,
  saveButton,
  displayRecipes,
  viewRecipes,
  viewRecipe,
  showHome,
  makeCurrentRecipe,
  selectRecipe,
  searchRecipes
}