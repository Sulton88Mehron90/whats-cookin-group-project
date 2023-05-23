import { calculateCost } from "./calculate-cost";
import { recipeIngredients } from "./recipe-ingredients";

const makeCurrentRecipe = (recipe, recipeData, ingredientsData) => {
  if (!recipeData) {
    return {};
  }
  let currentRecipe = {
    name: recipe.name,
    id: recipe.id,
    image: recipe.image,
    tags: recipe.tags,
    cost: calculateCost(recipe.name, recipeData, ingredientsData),
    instructions: recipe.instructions,
    ingredients: recipeIngredients(recipe.name, recipeData, ingredientsData)
  };
  return currentRecipe;
};

export { makeCurrentRecipe }