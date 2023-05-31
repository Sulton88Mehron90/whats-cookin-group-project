import { expect } from 'chai';
import { recipeIngredients } from '../src/functions/recipe-ingredients';
import sampleRecipeData from '../src/data/sample-recipes'
import sampleIngredients from '../src/data/sample-ingredients';

describe('get recipe ingredients', () => {
  let allIngredients
  let recipes
  beforeEach( function(){
    allIngredients = sampleIngredients
    recipes = sampleRecipeData
  })
  it('should be a function', function() {
    expect(recipeIngredients).to.be.a('function')
  })

  it('should return the ingredients for a recipe', () => {
    const ingredients = recipeIngredients("Maple Dijon Apple Cider Grilled Pork Chops", recipes, allIngredients)
    expect(ingredients[0]).to.deep.equal({ name: 'apple cider', amount: 1.5, unit: 'cups', cost: 468 })
  })

  it('should return a error message when given an invalid recipe', () => {
    expect(recipeIngredients('hotdog', recipes, allIngredients)).to.equal('Sorry, cannot find a recipe for hotdog.')
  })
})