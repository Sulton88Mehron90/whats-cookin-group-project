import { expect } from 'chai';
import { saveRecipe } from '../src/functions/save-recipe';

describe('save recipe', () => {
  it('should be a function.', function() {
    expect(saveRecipe).to.be.a('function')
  })
  it('should be able to add a recipe to the saved reciped array', () => {
    let savedRecipes = []
    saveRecipe([{name: 'breakfast cereal', ingredients: ['milk', 'cereal']}], savedRecipes)
    expect(savedRecipes.length).to.deep.equal(1)
  })
  it('should be able to return nothing if savebutton is not clicked', () => {
    let savedRecipes = []
    expect(savedRecipes.length).to.equal(0)
  })
})