//Модуль который позволяет, найти напиток по поиску



import presentDrinks from "./presentDrinks.js";
import getElement from "./getElement.js";

const searchURL = "https:/www.thecocktaildb.com/api/json/v1/1/search.php?s="; 

//Получаем два элемента с html. Form и input элементы.
//Input элемент мы получим получив name="drink" атрибут
const form = getElement(".search-form");
const input = getElement('[name="drink"]');

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${searchURL} ${value}`);
});


//Этот модуль мы не будем экспортировать так как он является модулем для поисковой строки
//Нам достаточно импортировать его лишь в app.js и модуль заработает
