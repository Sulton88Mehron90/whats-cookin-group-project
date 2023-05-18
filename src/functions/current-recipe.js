import { calculateCost } from "./calculate-cost";
import { recipeIngredients } from "./recipe-ingredients";

const makeCurrentRecipe = (recipeData) => {
  if (!recipeData) {
    return {};
  }
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

export { makeCurrentRecipe }