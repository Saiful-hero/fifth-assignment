document.getElementById('click-btn').addEventListener('click', function(){
    const countryName = document.getElementById('search-box').value;
    console.log(countryName);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryName}`)
    .then(res => res.json())
    .then(data=> displayMealItems(data))
        
})

const displayMealItems = meals =>{
    const cartMeal = document.getElementById('cart-meal');
    
    meals.meals.forEach(element => { //first meals is an object and the second one is an array
        const addingImages = `
        <a onclick="displayMealInDetails('${element.idMeal}')">
        <img src="${element.strMealThumb}">
        <h6>${element.strMeal}</h6>
        </a>
        `
        const divIntodiv  = document.createElement('div');
        divIntodiv.innerHTML = addingImages;
        cartMeal.appendChild(divIntodiv);
        divIntodiv.className = 'meal';
    });
}

const displayMealInDetails = id => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then(data=>renderMealInfo(data))
}

const renderMealInfo = info =>{
    const shortForm = info.meals[0];
    // console.log(shortForm.idMeal);
  const mealDiv =  document.getElementById('info');
  mealDiv.innerHTML = `
  <img src="${info.meals[0].strMealThumb}">
  <h5>${info.meals[0].strMeal}</h5>
  <h6>Ingredients</h6>
  <p>${shortForm.strMeasure1} ${shortForm.strIngredient1}</p>
  <p>${shortForm.strMeasure2} ${shortForm.strIngredient2}</p>
  <p>${shortForm.strMeasure3} ${shortForm.strIngredient3}</p>
  <p>${shortForm.strMeasure4} ${shortForm.strIngredient4}</p>
  <p>${shortForm.strMeasure5} ${shortForm.strIngredient5}</p>
  <p>${shortForm.strMeasure6} ${shortForm.strIngredient6}</p>
  `
    
      
 
}