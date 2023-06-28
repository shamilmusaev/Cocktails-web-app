//Модуль который позволяет, отображать полученные напитки из api на странице 

import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

//Создаем функцию displayDrinks куда в параметры передаем объект drinks
//Создаем условие. Если напитки false то отображаем сообщение с ошибкой и очищаем секцию с напитками, чтобы если в поиске ввести напиток которого нет, остальные напитки очистились
const displayDrinks = ({ drinks }) => {
  const section = get(".section-center");
  const title = get(".title");
  if (!drinks) {
    //Каждый раз когда мы не находим напиток вызываем hide loading
    hideLoading()
    title.textContent = "sorry no drinks matched your search";
    section.innerHTML = null;
    return;
  }

  const newDrinks = drinks
    .map((drink) => {
        // console.log(drink);
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      
      return `  <a href="./drink.html">
    <article class="cocktail" data-id="${id}">
      <img src="${image}" alt="${name}">
      <h3>${name}</h3>
    </article>
   </a>`;
    })
    .join("");
  //Каждый раз когда мы НАХОДИМ напиток вызываем hide loading
  hideLoading()
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
