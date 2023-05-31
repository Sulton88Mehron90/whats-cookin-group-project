import { calculateCost } from "./calculate-cost";
import { recipeIngredients } from "./recipe-ingredients";

const makeCurrentRecipe = (recipe, recipeData, ingredientsData) => {
  if (!recipeData) {
    return {};
  }
  return {
    name: recipe.name,
    id: recipe.id,
    image: recipe.image,
    tags: recipe.tags,
    cost: calculateCost(recipe.name, recipeData, ingredientsData),
    instructions: recipe.instructions,
    ingredients: recipeIngredients(recipe.name, recipeData, ingredientsData)
  };
};

export { makeCurrentRecipe }