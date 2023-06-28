//Модуль который позволяет искать api url
//Функция которая делает две вещи: 1-е делает fetch напитков, 2-е отображает напитки

import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

//Создаем функцию showDrinks которая
const showDrinks = async (url) => {
  //Получаем напитки через fetch
  const data = await fetchDrinks(url);

  //Отображаем напитки
  const section = await displayDrinks(data);
  if(section){
    setDrink(section)
  }
};
 
export default showDrinks;
