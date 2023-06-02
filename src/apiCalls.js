// FETCH REQUESTS //

const fetchRecipes = fetch(`http://localhost:3001/api/v1/recipes`)
const fetchIngredients = fetch(`http://localhost:3001/api/v1/ingredients`)
const fetchUsers = fetch(`http://localhost:3001/api/v1/users`)


export { fetchRecipes, fetchIngredients, fetchUsers };