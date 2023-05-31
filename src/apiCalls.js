// FETCH REQUESTS //

// let recipeData = [];
// let ingredientsData = [];
// let usersData = [];

// const fetchRecipeData = () => {
//   fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`)
//       .then(response => response.json())
//       .then(data => recipeData = data.recipes)
//       .catch(error => console.log(error));
// }

// const fetchIngredientsData = () => {
//   fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)
//     .then(response => response.json())
//     .then(data => ingredientsData = data.ingredients)
//     .catch(error => console.log(error));
// }

// const fetchUserData = () => {
//   fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`)
//     .then(response => response.json())
//     .then(data => usersData = data.users)
//     .catch(error => console.log(error));
// }

// const apiCalls = () => {
//   fetchRecipeData();
//   fetchIngredientsData();
//   fetchUserData();
// }

const fetchRecipes = fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`)
const fetchIngredients = fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)
const fetchUsers = fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`)


export { fetchRecipes, fetchIngredients, fetchUsers };