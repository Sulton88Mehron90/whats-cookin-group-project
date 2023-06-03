const filterByTag = (recipeData, tagInput) => {
  const filteredRecipes = recipeData.filter((recipe) => recipe.tags.includes(tagInput));
  if (filteredRecipes.length === 0) {
    return 'Error: try a new tag';
  } else {
    return filteredRecipes;
  }
}; 

const filterRecipesByName = (recipeData, name) => recipeData.filter((recipe) => {
  const lowerCaseName = name.toLowerCase();
  const lowerCaseRecipe = recipe.name.toLowerCase();
  return lowerCaseRecipe.includes(lowerCaseName);
})  

const filterByName = (recipeData, name) => {
  const filteredRecipesByName = filterRecipesByName(recipeData, name);
  if (!filteredRecipesByName.length) {
    return 'No results';
  }
  return filteredRecipesByName;
};

const filterRecipes = (recipeData, filter) => {
  const recipes = [];
  const filteredByName = filterByName(recipeData, filter);
  const filteredByTag = filterByTag(recipeData, filter);
  if (filteredByName !== 'No results' && filteredByName.length > 0) {
    recipes.push.apply(recipes, filteredByName);
  }
  if (filteredByTag !== 'Error: try a new tag' && filteredByTag.length > 0) {
    recipes.push.apply(recipes, filteredByTag);
  }
  if (filter === 'all') {
    recipes.push.apply(recipes, recipeData);
  }
  return [...new Set(recipes)];
};
  
export { filterByTag, filterByName, filterRecipes }
