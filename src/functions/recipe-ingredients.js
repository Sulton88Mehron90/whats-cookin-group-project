const recipeIngredients = (recipeName, recipeData, ingredientsData) => {
  const outputArray = [];
  const filteredRecipe = recipeData.find(recipe => recipe.name === recipeName);
   if (filteredRecipe) {
    filteredRecipe.ingredients.forEach(recipeIngredient => {
      ingredientsData.forEach(ingredient => {
        if (recipeIngredient.id === ingredient.id) {
          const {name, estimatedCostInCents} = ingredient;
          const {quantity: {amount, unit}} = recipeIngredient;
          outputArray.push({
            name,
            amount,
            unit,
            cost: estimatedCostInCents
          });
        };
      });
    });
    return outputArray;
   } 
   return `Sorry, cannot find a recipe for ${recipeName}.`;
};

export { recipeIngredients };