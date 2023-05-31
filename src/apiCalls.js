// FETCH REQUESTS //

const fetchRecipes = fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`)
const fetchIngredients = fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients`)
const fetchUsers = fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users`)

export { fetchRecipes, fetchIngredients, fetchUsers };