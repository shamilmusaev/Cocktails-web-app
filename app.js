//Импорты
import presentDrinks from "./src/presentDrinks.js"
import './src/searchForm.js'

//URL
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'


//ОБРАБОТЧИК НА СТРАНИЦУ
//Создаем обработчик события DOMContentLoaded для того чтобы как только страница загрузилась у нас УЖЕ отображались напитки, а не только по поиску.
//Вызываем функцию presentDrinks из модуля и передаем наш api(search) как URL
window.addEventListener('DOMContentLoaded', () => {
 presentDrinks(URL)
})