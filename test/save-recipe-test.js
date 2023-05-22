import { expect } from 'chai';
import { saveRecipe, savedRecipes } from '../src/functions/save-recipe';

describe('save recipe', () => {
  it('should be a function.', function() {
    expect(saveRecipe).to.be.a('function')
  })
  it('should be able to add a recipe to the saved reciped array', () => {
    saveRecipe()
    expect(savedRecipes.length).to.deep.equal(1)
  })
  it('should be not able to add multiples of the same recipe', () => {
    saveRecipe()
    saveRecipe()
    expect(savedRecipes.length).to.deep.equal(1)
  })
  it('should be able to return nothing if savebutton is not clicked', () => {
    let savedRecipes = []
    expect(savedRecipes.length).to.equal(0)
  })
})