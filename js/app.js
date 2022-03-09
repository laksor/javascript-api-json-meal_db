// fetch and search
const searchFood = () => {
    const searchField = document.getElementById('search');
    const searchInput = searchField.value;
    // clear input
    searchField.value = '';
    // err massage
    if(searchInput == ''){
        const err = document.getElementById('err');
        err.style.display = 'block';
    }
    else{
    // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
     fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    }
}
// displaying search result
const displaySearchResult = meals => {
    const searchR = document.getElementById('search-result');
    searchR.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetails()" class="card shadow-lg">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div  class="card-body">
                <h5 class="card-title fw-bold text-danger">${meal.strMeal}</h5>
                <p class="card-text text-md-start "><span class="fw-bold text-success">Cooking Instructions : </span>${meal.strInstructions.slice(0, 180)}</p>
                <a href="${meal.strYoutube}" target="_blank" class="btn btn-danger rounded-pill">Watch on Youtube</a>
            </div>
        </div>
        `;
        searchR.appendChild(div);
    });
}

// details
const loadMealDetails = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals);

    }
    catch(error){
        console.log(error);
    }

    // const res = await fetch(url);
    // const data = await res.json();
    // displayMealDetails(data.meals[0]);

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetails(data.meals));
        
}

const displayMealDetails = meal => {
    const mealDiv = document.getElementById('meal-details');
    mealDiv.textContent = '';
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
        </div>
        `;
        mealDiv.appendChild(div);
   
}
