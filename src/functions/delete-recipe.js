
const deleteRecipe = (targetId, savedRecipes) => {
  savedRecipes.forEach(savedRecipe=> {
    if (targetId === savedRecipe.id) {
      let recipeIndex = savedRecipes.indexOf(savedRecipe);
      savedRecipes.splice(recipeIndex, 1);
    }
  })
  return savedRecipes
}

export { deleteRecipe }