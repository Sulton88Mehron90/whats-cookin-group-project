//NOTE: Your DOM manipulation will occur in this file

import recipeData from "./data/recipes.js"
import { filterByTag, filterByName } from "./functions/filter-recipes.js"
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
const allRecipes = () => document.querySelectorAll('.all__recipes');
const recipePage = document.querySelector('.recipe');
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

const displayRecipes = (recipes) => {
  allContainer.innerHTML = ''
  hide([categoriesSection, footerSection, recipePage]);
  show([allSection, homeButton]);
  recipes.forEach(recipe => {
    allContainer.innerHTML += 
    `<div style="background-image: url(${recipe.image})" class='all__recipes'>
    <p class='all__text'>${recipe.name}</p>
    </div>`
  })
};

const viewFilteredRecipes = (event) => {
  allContainer.innerHTML = ''
  hide([categoriesSection, footerSection, recipePage]);
  show([allSection, homeButton]);
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if(tag === event.target.id)
      allContainer.innerHTML += 
      `<div style='background-image: url(${recipe.image})' class='all__recipes'>
      <p class='all__text'>${recipe.name}</p>
      </div>`
    })
  })
};

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

const showHome = () => {
  hide([allSection, homeButton, recipePage]);
  show([categoriesSection, footerSection]);
}

const viewRecipes = (event) => {
  const target = event.target.id;
  const filteredByName = filterByName(recipeData, event.target.id);
  const filteredByTag = filterByTag(recipeData, event.target.id);
  if(filteredByName !== 'No results') {
    displayRecipes(filteredByName)
  }
  if(filteredByTag !== 'Error: try a new tag') {
    displayRecipes(filteredByTag)
  }
  if(target === 'all') {
    displayRecipes(recipeData);
  }
};

const viewRecipe = (event) => {
  recipeData.forEach(recipe => {
    if(recipe.name === event.target.innerText){
      displayRecipe(recipe)
    }
  })
};

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

const displayRecipeImg = (recipe) => {
  imageContainer.innerHTML =''
  const image = document.createElement('img');
  image.setAttribute('src', recipe.image);
  image.classList.add('recipe__img');
  imageContainer.appendChild(image);
}
const displayIngredients = (recipe) => {
  ingredientsEl.innerHTML = 'Ingredients:'
  const ingredientsArr = recipeIngredients(recipe.name);
  recipe.ingredients.forEach((ingredient, index) => {
    const {quantity: {amount, unit}} = ingredient;
    ingredientsEl.innerHTML += `<p> ${amount} ${unit} ${ingredientsArr[index]}</p>`;
  })
}

const displayInstructions = (recipe) => {
  instructionsEl.innerHTML = 'Instructions:'
  recipe.instructions.forEach((instruction, index) => {
    instructionsEl.innerHTML += `<p> ${instruction.instruction} </p>`;
  })
}

export { 
  viewAll,
  displayRecipes,
  viewFilteredRecipes,
  viewSearchResults, 
  filterByNameOrTag,
  viewRecipes,
  viewRecipe,
  allRecipes,
  homeButton,
  showHome,
  categoriesContainer
}