const searchFood = () => {
    const searchField = document.getElementById('search');
    const searchInput = searchField.value;
    // console.log(searchInput);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    // console.log(url);
     fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.meals))
}