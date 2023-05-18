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
const ingredientsEl = document.querySelector('.recipe__ingredients');
const instructionsEl = document.querySelector('.recipe__instructions');
const recipeCost = document.querySelector('.recipe__cost')
const homeButton = document.querySelector('.home__button')

const show = (names) => {
  names.forEach((name) => name.classList.remove('class--hidden'))
};

const hide = (names) => {
  names.forEach((name) => name.classList.add('class--hidden'))
};

//Good
const displayRecipes = (recipes) => {
  allContainer.innerHTML = ''
  hide([categoriesSection, footerSection, recipePage]);
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
  hide([categoriesSection, footerSection, recipePage]);
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
}

//Good
const showHome = () => {
  hide([allSection, homeButton, recipePage]);
  show([categoriesSection, footerSection]);
}

//Good
const viewRecipes = (event) => {
  const target = event.target.id;
  const filteredRecipes = filterRecipes(recipeData, target)
  displayRecipes(filteredRecipes)
}

// Updates Data Model
const makeCurrentRecipe = (recipeData) => {
  
  let recipe = {
    name: recipe.name,
    image: recipe.image,
    tags: recipe.tags,
    cost: calculateCost(recipe.name),
    instructions: recipe.instructions,
    ingredients: recipeIngredients(recipe.name)
  }
  currentRecipe = recipe;
}

//Questionable
const viewRecipe = (recipe) => {
  `<section class="recipe__header">
    <section class="recipe__header2"> 
    </section>
    <h1 class="recipe__title">${recipe.name}</h1>
    <button class="recipe__sbutton">Save Recipe</button>
  </section>
  <section class="recipe__main">
    <section class="recipe__left">
      <img class="recipe__image" src="${recipe.image}"></img>
        <section class="recipe__ingredients">Ingredients:
        ${recipe.ingredients}
        </section>
        <section class="recipe__cost">
        ${recipe.cost}
        </section>
    </section>
    <section class="recipe__instructions">${recipe.instructions}
  </section>
</section>`
}

//Questionable
const displayRecipe = (recipe) => {
  recipeTitle.innerText = ''
  recipeCost.innerText = ''
  hide([allSection]);
  show([recipePage, homeButton]);
  recipeTitle.innerText = `${recipe.name}`;
  displayRecipeImg(recipe);
  displayIngredients(recipe);
  displayInstructions(recipe);
  const cost = calculateCost(recipe.name);
  recipeCost.innerText = `The estimated cost is ${cost}`;
}

//Questionable
const displayRecipeImg = (recipe) => {
  imageContainer.innerHTML =''
  const image = document.createElement('img');
  image.setAttribute('src', recipe.image);
  image.classList.add('recipe__img');
  imageContainer.appendChild(image);
}

//Questionable
const displayIngredients = (recipe) => {
  ingredientsEl.innerHTML = 'Ingredients:'
  const ingredientsArr = recipeIngredients(recipe.name);
  recipe.ingredients.forEach((ingredient, index) => {
    const {quantity: {amount, unit}} = ingredient;
    ingredientsEl.innerHTML += `<p> ${amount} ${unit} ${ingredientsArr[index]}</p>`;
  })
}

//Questionable
const displayInstructions = (recipe) => {
  instructionsEl.innerHTML = 'Instructions:'
  recipe.instructions.forEach((instruction, index) => {
    instructionsEl.innerHTML += `<p> ${instruction.instruction} </p>`;
  })
}

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
  makeCurrentRecipe
}