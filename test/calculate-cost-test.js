import { expect } from 'chai';
import { calculateCost } from '../src/functions/calculate-cost'
import sampleRecipeData from '../src/data/sample-recipes';
import sampleIngredients from '../src/data/sample-ingredients';

describe('calculate cost', () => {
  it('should calculate the cost of a recipe', () => {
    expect(calculateCost("Maple Dijon Apple Cider Grilled Pork Chops", sampleRecipeData, sampleIngredients)).to.equal('$272.97')
  });

  it('should return an error message when recipe is not in the data', () => {
    expect(calculateCost("Hotdog", sampleRecipeData, sampleIngredients)).to.equal('Cannot calculate Hotdog recipe cost')
  })
})