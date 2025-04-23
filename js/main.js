
document.querySelector('button').addEventListener('click', getRecipe)

function getRecipe() {
    let mealName = document.querySelector('h2')
    let mealImage = document.querySelector('img')
    let mealSource = document.querySelector('a')
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            mealName.innerText = data.meals[0].strMeal
            mealImage.src = data.meals[0].strMealThumb
            mealSource.href = data.meals[0].strSource
        })
        .catch(err => {
            console.log(`error ${err}`)
            })
}
