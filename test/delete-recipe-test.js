import { expect } from 'chai';
import { deleteRecipe } from '../src/functions/delete-recipe';

describe('delete recipe', () => {
  let savedRecipes
  beforeEach( function() {
    savedRecipes = [{name: 'breakfast cereal', ingredients: ['milk', 'cereal'], id: 1}]
  })
  it('should be a function.', function() {
    expect(deleteRecipe).to.be.a('function')
  })
  it('should be able to return nothing if delete button is not clicked', () => {
    expect(savedRecipes.length).to.equal(1)
  })

  it('should be able to delete a recipe from the saved reciped array', () => {
    deleteRecipe(1,savedRecipes)
    expect(savedRecipes.length).to.deep.equal(0)
  })
  
})