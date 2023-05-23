



const deleteRecipe = (targetId, savedRecipes) => {
  console.log(savedRecipes)
  savedRecipes.forEach(savedRecipe=> {
    console.log(savedRecipe.id)
    console.log(targetId)
    console.log(targetId === savedRecipe.id)
    if (targetId === savedRecipe.id) {
      let recipeIndex = savedRecipes.indexOf(savedRecipe);
      console.log(recipeIndex)
      savedRecipes.splice(recipeIndex, 1);
    }
  })
  console.log(savedRecipes)
  return savedRecipes
}


export { deleteRecipe }