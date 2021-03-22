const searchMeals = () =>{
    const formInput = document.getElementById('formInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${formInput}`
    //Load Data
    fetch(url)
    .then(res => res.json())
    .then(data => disPlayMeals(data.meals))
}
const disPlayMeals = foods =>{
    const foodContainer =document.getElementById('foodContainer');
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        foodDiv.className = "foodArea"
        foodDiv.innerHTML =`
        <img src="https://www.themealdb.com/images/media/meals/${food.strCategoryThumb}"></img>
        <p onclick="searchDetails()">${food.strMeal}</p>
        `;
        foodContainer.appendChild(foodDiv);
    })
}
const searchDetails = () =>{
    const formInput = document.getElementById('formInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${formInput}`
    //Load Data
    fetch(url)
    .then(res => res.json())
    .then(data => foodDetails(data.meals))
}
const foodDetails = (details)=>{
    const mealDetail = document.getElementById('mealDetail');
    details.forEach(detail => {
       const detailDiv = document.createElement('div');
       detailDiv.innerHTML =`
        <h1> ${detail.strMeal}</h1>
        <h4>Ingredient</h4>
        <li>${detail.strMeasure2}${" "}${detail.strIngredient2} ${" "}fried properly</li>
        <li>${detail.strMeasure1}${" "}${detail.strIngredient1} ${" "}for the dishes</li>
        <li>${detail.strMeasure4}${" "}${detail.strIngredient4} ${" "}American flavoured</li>
        <li>${detail.strMeasure3}${" "}${detail.strIngredient5} ${" "}italian items</li>
        <li>${detail.strMeasure7}${" "}${detail.strIngredient7} ${" "}from raw coco via</li>
       `;
       mealDetail.appendChild(detailDiv);
   })
    
}


//<img src="https://www.themealdb.com/images/media/meals/${food.strCategoryThumb}"></img>
