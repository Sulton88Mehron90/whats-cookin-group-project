// Your fetch requests will live here!
// import fetch from 'node-fetch'

console.log('I will be a fetch request!')

// const fetchData = (dataset) => {
// fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`)
//   .then((response) => {
//     if (response.ok) {
//       console.log(response.json)
//       return response.json();
//     } else {
//       console.log(response.statusText)
//     }
//   })
//   .catch((error) => console.log(error))
// }
let recipeData = [];

const fetchData = () => {

  fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes`)
      .then(response => response.json())
      .then(data => {
        recipeData = data.recipes})
}

export {fetchData, recipeData}