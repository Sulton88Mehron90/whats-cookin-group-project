



const deleteRecipe = (event) => {
  savedRecipes.forEach(savedRecipe=> {
    if (parseInt(event.target.id) === savedRecipe.id) {
      let recipeIndex = savedRecipes.indexOf(savedRecipe)
      savedRecipes.splice(recipeIndex, 1);
      displayRecipes(savedRecipes)
      show([userSection])
    }
  })
}


export { deleteRecipe };