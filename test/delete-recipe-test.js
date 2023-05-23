import { expect } from 'chai';
import { deleteRecipe } from '../src/functions/delete-recipe';

describe('delete recipe', () => {
  it('should be a function.', function() {
    expect(deleteRecipe).to.be.a('function')
  })
  it('should be able to delete a recipe from the saved reciped array', () => {
    let savedRecipes = [{name: 'breakfast cereal', ingredients: ['milk', 'cereal'], id: 1}]
    deleteRecipe(1,savedRecipes)
    expect(savedRecipes.length).to.deep.equal(0)
  })
  it('should be able to return nothing if delete button is not clicked', () => {
    let savedRecipes = [{name: 'breakfast cereal', ingredients: ['milk', 'cereal']}]
    expect(savedRecipes.length).to.equal(1)
  })
})