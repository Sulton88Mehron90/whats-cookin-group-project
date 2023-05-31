import { expect } from 'chai';
import { saveRecipe } from '../src/functions/save-recipe';

describe('save recipe', () => {
  let savedRecipes
  beforeEach( function(){
  savedRecipes = []
  })

  it('should be a function.', function() {
    expect(saveRecipe).to.be.a('function')
  })

  it('should be able to return nothing if savebutton is not clicked', () => {
    expect(savedRecipes.length).to.equal(0)
  })
  
  it('should be able to add a recipe to the saved reciped array', () => {
    saveRecipe([{name: 'breakfast cereal', ingredients: ['milk', 'cereal']}], savedRecipes)
    expect(savedRecipes.length).to.deep.equal(1)
  })

})