import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];
  const { strDrinkThumb: image, strDrink: name, strInstructions: desc } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5
];
//Получаем элементы
const img = get('.drink-img')
const drinkName = get('.drink-name')
const description = get('.drink-desc')
const ingredients = get('.drink-ingredients')

//Передаем картинку 

img.src = image
drinkName.textContent = name
description.textContent = desc
ingredients.innerHTML = list.map((item) => {
if(!item) return
return `<li><i class="far fa-check-square"></i>${item}</li>`
}).join('')

//Меняем title из singleDrink.html динамически
document.title = name

  console.log(drink,list);
};

export default displayDrink;
