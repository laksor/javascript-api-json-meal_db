const searchFood = () => {
    const searchField = document.getElementById('search');
    const searchInput = searchField.value;
    // console.log(searchInput);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    // console.log(url);
     fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchR = document.getElementById('search-result');
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div  onclick="loadMealDetails()"  class="card shadow-lg">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold text-danger">${meal.strMeal}</h5>
                <p class="card-text text-md-start "><span class="fw-bold text-success">Cooking Instructions : </span>${meal.strInstructions.slice(0, 180)}</p>
            </div>
        </div>
        `;
        searchR.appendChild(div);
    });
}

// const loadMealDetails = mealId => {
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data.meals.idMeal));
// }

// const displayMealDetails = meal => {
//     const mealDiv = document.getElementById('meal-details');
//         const div = document.createElement('div');
//         div.classList.add('card');
//         div.innerHTML = `
//         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//         `;
//         mealDiv.appendChild(div);
   
// }