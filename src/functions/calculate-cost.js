const calculateCost = (name, recipeData, ingredientsData) => {
  let costs = [];
  const currentRecipe = recipeData.find((item) => {
    return item.name === name;
  });
  if(!currentRecipe){
    return `Cannot calculate ${name} recipe cost`;
  } else {
  let recipeIngredients = currentRecipe.ingredients;
  recipeIngredients.forEach((recipeIngredient) => {
    ingredientsData.forEach((ingredient) => {
      if (ingredient.id === recipeIngredient.id){
        costs.push(recipeIngredient.quantity.amount * (ingredient.estimatedCostInCents / 100));
      }
    });
  });
  let totalCost = costs.reduce((acc, currentValue) => 
  acc + currentValue);
  totalCost = totalCost.toFixed(2);
  return `$${totalCost}`;
  }
};

export { calculateCost }