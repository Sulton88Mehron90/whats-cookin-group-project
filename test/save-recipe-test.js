import { expect } from 'chai';
import { saveRecipe } from '../src/functions/save-recipe';

describe('save recipe', () => {
  it('should be a function.', function() {
    expect(saveRecipe).to.be.a('function')
  })
  it('should be able to add a recipe to the saved reciped array', () => {
    let savedRecipes
    saveRecipe("Loaded Chocolate Chip Pudding Cookie Cups")
    expect(savedRecipes).to.deep.equal(1)
  })
})

// import { expect } from 'chai';
// import { recipeIngredients } from '../src/functions/recipe-ingredients';

// describe('get recipe ingredients', () => {
//   it('should be a function', function() {
//     expect(recipeIngredients).to.be.a('function')
//   })
//   it('should return the ingredients for a recipe', () => {
//     const ingredients = recipeIngredients("Maple Dijon Apple Cider Grilled Pork Chops")
//     expect(ingredients[0]).to.deep.equal({ name: 'apple cider', amount: 1.5, unit: 'cups', cost: 468 })
//   })

//   it('should return a error message when given an invalid recipe', () => {
//     expect(recipeIngredients('hotdog')).to.equal('Sorry, cannot find a recipe for hotdog.')
//   })
// })

