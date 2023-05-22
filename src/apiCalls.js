// FETCH REQUESTS //

let recipeData = [];
let ingredientsData = [];
let usersData = [];

const fetchRecipeData = () => {

  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`)
      .then(response => response.json())
      .then(data => recipeData = data.recipes)
}

const fetchIngredientsData = () => {

  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)
    .then(response => response.json())
    .then(data => ingredientsData = data.ingredients)
}

const fetchUserData = () => {
  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`)
    .then(response => response.json())
    .then(data => usersData = data.users)
}

export { ingredientsData, fetchRecipeData, fetchIngredientsData, usersData, fetchUserData, recipeData };