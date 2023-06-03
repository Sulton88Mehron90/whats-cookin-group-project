const recipeInstructions = (recipe) => {
  if (recipe) {
    return recipe.instructions;
  }; 
  return 'No recipe located';
};

export { recipeInstructions }