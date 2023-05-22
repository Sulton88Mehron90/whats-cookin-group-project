import recipeData from "../data/recipes.js";

let savedRecipes = []
let recipeTitle = {
  innerText: "Loaded Chocolate Chip Pudding Cookie Cups" 
}
let userRecipes = {}

const saveRecipe = (recipeTitle) => {
  userRecipes.innerText = 'Select recipe to view or right click to delete.'
  const newRecipe = recipeData.filter((filteredRecipe)=> {
    return filteredRecipe.name === recipeTitle.innerText && !savedRecipes.includes(filteredRecipe)})
    const modifiedRecipe = newRecipe.map(modifiedRecipe=> {
      modifiedRecipe.id = Date.now()
      return modifiedRecipe
    }) 
    console.log(savedRecipes)
    console.log(savedRecipes.push(...modifiedRecipe))
  }
  export { saveRecipe }