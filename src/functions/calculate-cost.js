const calculateCost = (name, recipeData, ingredientsData) => {
  const currentRecipe = getRecipe(name, recipeData);
  if(!currentRecipe) {
    return `Cannot calculate ${name} recipe cost`;
  } else {
     return sumIngredients(ingredientsData, currentRecipe);
  }
};

const getRecipe = (name, recipeData) => recipeData.find((item) => item.name === name);

const sumIngredients = (ingredientsData, currentRecipe) => {
  const costs = [];
  const recipeIngredients = currentRecipe.ingredients;
  recipeIngredients.forEach((recipeIngredient) => {
    ingredientsData.forEach((ingredient) => {
      if (ingredient.id === recipeIngredient.id){
        costs.push(recipeIngredient.quantity.amount * (ingredient.estimatedCostInCents / 100));
      }
    });
  });
  const totalCost = costs.reduce((acc, currentValue) => acc + currentValue).toFixed(2);
  return `$${totalCost}`;
}

export { calculateCost }