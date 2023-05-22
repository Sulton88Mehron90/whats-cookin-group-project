import { calculateCost } from "./calculate-cost";
import { recipeIngredients } from "./recipe-ingredients";
// import sampleIngredients from "../data/sample-ingredients";
// import sampleRecipeData from "../data/sample-recipes";

const makeCurrentRecipe = (recipe, recipeData, ingredientsData) => {
  if (!recipeData) {
    return {};
  }
  const currentRecipeIngredients = recipeIngredients(recipe, recipeData, ingredientsData)
  let currentRecipe = {
    name: recipe.name,
    id: recipe.id,
    image: recipe.image,
    tags: recipe.tags,
    cost: calculateCost(recipe.name, recipeData, ingredientsData),
    instructions: recipe.instructions,
    ingredients: recipeIngredients(recipe.name, recipeData, ingredientsData)
  }
  return currentRecipe;
};

export { makeCurrentRecipe }