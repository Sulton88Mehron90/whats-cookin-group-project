// recipe ingredients function here

import ingredientsData from "../data/ingredients";
import recipeData from "../data/recipes";

const recipeIngredients = (recipe) => {
  const filteredRecipe = recipeData.find(item => item.name === recipe);

  if (!filteredRecipe) {
    return `Sorry, cannot find a recipe for ${recipe}.`;
  }

  const ingredientIds = filteredRecipe.ingredients.map(ingredient => ingredient.id);

  const ingredientObjects = ingredientIds.map(ingredientId => {
    return ingredientsData.find(ingredient => ingredient.id === ingredientId);
  });

  const ingredientStrings = ingredientObjects.map(object => object.name);

  return ingredientStrings;
};



export { recipeIngredients };