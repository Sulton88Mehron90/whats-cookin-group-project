const deleteRecipe = (targetId, savedRecipes) => {
  return savedRecipes.forEach(savedRecipe=> {
    if (targetId === savedRecipe.id) {
      const recipeIndex = savedRecipes.indexOf(savedRecipe);
      savedRecipes.splice(recipeIndex, 1);
    };
  });
}

export { deleteRecipe }