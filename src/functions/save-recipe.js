// imported data
import sampleRecipeData from '../data/sample-recipes';
console.log(sampleRecipeData)
let recipeData = sampleRecipeData

// sample querrySelector
// const recipeTitle = document.querySelector('.recipe__title');
let recipeTitle = {}
recipeTitle.innerText = "Loaded Chocolate Chip Pudding Cookie Cups"

// // sample data model 
let savedRecipes =[]

const saveRecipe = () => {
  console.log(recipeData)
  const newRecipe = recipeData.filter((filteredRecipe)=> {
    return filteredRecipe.name === recipeTitle.innerText && !savedRecipes.includes(filteredRecipe)})
    savedRecipes.push(...newRecipe)
    return savedRecipes
  }
  export { saveRecipe, savedRecipes }

// const saveRecipe = (recipeTitle) => {
//   userRecipes.innerText = 'Select recipe to view or right click to delete.'
//   const newRecipe = recipeData.filter((filteredRecipe)=> {
//     return filteredRecipe.name === recipeTitle.innerText && !savedRecipes.includes(filteredRecipe)})
//     const modifiedRecipe = newRecipe.map(modifiedRecipe=> {
//       modifiedRecipe.id = Date.now()
//       return modifiedRecipe
//     }) 
//     console.log(savedRecipes)
//     console.log(savedRecipes.push(...modifiedRecipe))
//   }
//   export { saveRecipe }