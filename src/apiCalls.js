// FETCH REQUESTS //

const fetchRecipes = fetch(`http://localhost:3001/api/v1/recipes`);
const fetchIngredients = fetch(`http://localhost:3001/api/v1/ingredients`);
const fetchUsers = fetch(`http://localhost:3001/api/v1/users`);
const postSavedRecipe = (data) => {
  fetch('http://localhost:3001/api/v1/usersRecipes', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
  }
})
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      alert(`${response.status} server request failed, please try again later`)
      console.error('Request failed with status:', response.status)
    }
  })
  .then(json => console.log(json))
  .catch(err => console.log(err))
};

export { fetchRecipes, fetchIngredients, fetchUsers, postSavedRecipe };